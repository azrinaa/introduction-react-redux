import Axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { setUsers } from "./actions";
import { makeSelectUsers } from "./selectors";
import { UsersList } from "./usersList";

const stateSelector = createSelector(makeSelectUsers, (users) => ({
    users: users
}));

const actionDispatch = (dispatch) => ({
    setUser: (users) => dispatch(setUsers(users))
})

export function HomePage(props){
    const { users }  = useSelector(stateSelector)
    const { setUser } = actionDispatch(useDispatch());
    
    const getUsers = async () => {
        const response = await Axios.get("https://reqres.in/api/users").catch((err)=> {
            console.log("Err:", err);
        });

        let datas = response.data.data

        setUser(datas)
    }

    useEffect(() => {
      getUsers();  
    }, []);

    console.log(JSON.stringify(users))

    return (
        <div>
           <UsersList />
        </div>
    )
}
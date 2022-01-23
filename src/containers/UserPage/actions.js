//takes argument & return an action
import { ActionTypes } from "./constants"

export const setUsers = (user) => ({ 
    type: ActionTypes.SET_USER, 
    payload: user
})
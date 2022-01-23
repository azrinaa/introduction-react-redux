import logo from './logo.svg';
import './App.css';
import { HomePage } from './containers/Home';
import { UserPage } from './containers/UserPage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:userId" element={<UserPage />} />
          <Route>404 Not Found :(</Route>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;

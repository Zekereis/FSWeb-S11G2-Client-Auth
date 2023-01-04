import React from 'react';
import './App.css';
import { NavLink} from 'react-router-dom';
import {Route ,Switch} from "react-router";
import Login from "./Login";
import List from "./List";
import AddFriend from "./AddFriend";
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <header className='header'>
        <h1>FRIENDS DATABASE</h1>
        <nav>
          <NavLink to="/login">lOGİN.</NavLink>
          <NavLink to="/friends">FRIENDlIST.</NavLink>
          <NavLink to="/friends/add">ADDFRIEND.</NavLink>
        </nav>
        </header>
        <div className='content'>
        <Switch>
          <Route path='/login'><Login/></Route>
          <PrivateRoute path="/friends" component={List} exact/>
          <PrivateRoute path="/friends/add" component={AddFriend}/>
        </Switch>
        </div>

      </div>
    </div>
  );
}

export default App;

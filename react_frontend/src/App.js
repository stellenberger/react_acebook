import React, { useState } from 'react';
import { 
  BrowserRouter, 
  Route,
  Switch,
} from 'react-router-dom'
import Register from './components/authentication/Register'
import Login from './components/authentication/Login'
import './App.css';
import axios from 'axios'

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/signup' component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

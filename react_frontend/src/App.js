import React from 'react';
import { 
  BrowserRouter, 
  Route,
  Switch,
} from 'react-router-dom'
import Register from './components/authentication/Register'
import Landing from './components/landing/Landing'
import Home from './components/home/Home'
import './App.css';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/signup' component={Register} />
          <Route exact path='/home' component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

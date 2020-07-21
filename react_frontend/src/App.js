import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter, 
  Route,
  Switch,
} from 'react-router-dom'
import Register from './components/authentication/Register'
import Landing from './components/landing/Landing'
import Home from './components/home/Home'
import './App.css';
import axios from 'axios'
function App() {
  const [loggedInUser, setLoggedInUser] = useState(null)

  const checkLoginStatus = () => {
    axios.get('http://localhost:3001/logged_in', { withCredentials: true })
      .then(response => {
        console.log('from inside of check login status',response)
        if (response.data.logged_in && loggedInUser === null) {
          setLoggedInUser(response.data.user)
        } else if (!response.data.logged_in && loggedInUser) {
          setLoggedInUser(null)
        }
      })
      .catch(error => {
        console.log('check login error', error)
      })
  }
  useEffect(() => {
    checkLoginStatus()
  }, [])
  const handleLogin = (data) => {
    console.log('hello from inside app component, handleLogin function', data)
    setLoggedInUser(data.data.user)
  }

  
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' render={props => (
                <Landing {...props}
                  handleLogin={handleLogin}
                  // handleLogout={this.handleLogout}
                  // loggedInStatus={this.state.loggedInStatus}
                />
                )}
                />
          <Route exact path='/signup' component={Register} />
          <Route exact path='/home' component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

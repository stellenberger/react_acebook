import React, { useState } from 'react';
import axios from 'axios'

function Login(props) {
  const [user, setUser] = useState({ email: '', password: '' })
  
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/sessions', { user: user }, { withCredentials: true })
      .then(response => {
        console.log('Log In successful', response)
        this.props.history.push('/home')
      })
      .catch(error => {
        console.log('Log In error', error)
      })
  }

  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  
  console.log(props)
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Log In</h3>
        <label>Enter your email</label><br />
        <input type="email" name="email" onChange={handleOnChange} /><br />
        <label>Enter your password</label><br />
        <input type="password" name="password" onChange={handleOnChange} /><br />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;

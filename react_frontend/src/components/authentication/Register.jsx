import React, { useState } from 'react';
import axios from 'axios'

function Register() {
  const [newUser, setNewUser] = useState({ email: '', password: '', password_confirmation: '' })
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/users', { user: newUser })
      .then(response => {
        console.log('Sign Up successful', response)
      })
      .catch(error => {
        console.log('Sign up error', error)
      })
  }

  const handleOnChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Sign up</h3>
        <label>Enter your email</label><br />
        <input type="email" name="email" onChange={handleOnChange} /><br />
        <label>Enter your password</label><br />
        <input type="password" name="password" onChange={handleOnChange} /><br />
        <label>Confirm your password</label> <br />
        <input type="password" name="password_confirmation" onChange={handleOnChange} /><br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Register;

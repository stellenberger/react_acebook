import React from 'react'
import Register from '../authentication/Register'
import Login from '../authentication/Login'


const Landing = (props) => {
  console.log('this is the landing component props',props)
  return (
    <div>
      This is the landing page
      <Register />
      <Login props={props}/>
    </div>
  )
}

export default Landing
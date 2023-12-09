import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div style={{backgroundColor:'#f1f1f1', padding:'20px 0px'}}>
    <label>User Name : </label>
    <input type='text' placeholder='eg:JohnSnow'></input><br /><br />
    <label>Password : </label>
    <input type='password' placeholder='Enter Here'></input><br /><br />
    <Link to='/home'><button>Login</button></Link>
    </div>
    
  )
}

export default Login
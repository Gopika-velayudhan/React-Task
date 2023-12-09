import React from 'react'
import { Link } from 'react-router-dom'


function Rgistration() {

  return (
    <div style={{backgroundColor:'#f1f1f1', padding:'20px 0'}}>
        <form>
            <lebel>First Name</lebel>
            <input type='text'></input><br /><br />
            
            <lebel>Last Name</lebel>
            <input type='text'></input><br /><br />

            <label>Gender : </label>
            <lebel >Male</lebel><input type='Radio' name='gender' value={'Male'}></input>
            <lebel>Female</lebel><input type='Radio' name='gender' value={'Female'}></input>
            <lebel>Other</lebel><input type='Radio' name='gender' value={'NotHumen'}></input>
            <br /><br />

            <label>Email</label>
            <input type='text' placeholder='eg:someone@gmail.com'></input><br /><br />

            <label>Phone</label>
            <input type='text' placeholder='eg:044 81 200'></input><br /><br />

            <label>Address</label>
            <input type='textarea'></input><br /><br />
            <Link to='/login'><button>Sign In</button></Link>
        </form>
        
    </div>
  )
}

export default Rgistration
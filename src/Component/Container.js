import React from 'react'
import Rgistration from './Registration'
import { Route, Routes } from 'react-router-dom'
import Login from './Login2'
import Home1 from './Homecontent'


function Container() {
  return (
    <div style={{width:'30%', textAlign:'center', marginLeft:'35%'}}>
        <Routes>
            <Route path='/' element={<Rgistration />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home1 />} />
        </Routes>
    </div>
  )
}

export default Container
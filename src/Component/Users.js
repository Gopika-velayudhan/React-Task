import React from 'react'
import { Outlet } from 'react-router-dom'

export const Users = () => {
  return (
    <div>
        <h2>user1</h2>
        <h2>user2</h2>
        <h2>user3</h2>
        <Outlet/>
    </div>
  )
}

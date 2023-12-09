import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function Products() {
  return (
    <>
        <div>
        <input type='search' placeholder='search products'/>
    </div>
    <nav>
        <Link to= "featured">featured</Link>
        <Link to ="new">New</Link>
    </nav>
    <Outlet />
    </>
    
  )
}

export default Products
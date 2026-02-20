import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div>
      <div className='text-white text-2xl flex flex-row gap-20 justify-center font-bold '>
        <Link to='/products/men'>Men</Link>
        <Link to='/products/women'>Women</Link>
        <Link to='/products/kids'>Kids</Link>
      </div>
      
      <Outlet />
    </div>
  )
}

export default Products

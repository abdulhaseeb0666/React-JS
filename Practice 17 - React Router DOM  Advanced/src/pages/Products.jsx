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
      {/* <h1 className='text-white font-bold text-8xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>Products</h1> */}

      <Outlet />
    </div>
  )
}

export default Products

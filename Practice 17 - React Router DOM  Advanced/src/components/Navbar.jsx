import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between p-1.25  items-center bg-[#24a67b] text-white mb-1.25 h-fit'>
      <h1 className='text-4xl font-bold ml-10' >MyWeb</h1>
      <ul className='flex flex-row gap-5 p-1.25 mr-2.5 font-bold'>
          <Link className=' hover:text-shadow-black hover:text-[#1c096a]' to='/'>Home</Link>
          <Link className=' hover:text-shadow-black hover:text-[#1c096a]' to='/about'>About</Link>
          <Link className=' hover:text-shadow-black hover:text-[#1c096a]' to='/contact'>Contact</Link>
          <Link className=' hover:text-shadow-black hover:text-[#1c096a]' to='/products'>Products</Link>
          <Link className=' hover:text-shadow-black hover:text-[#1c096a]' to='/courses'>Courses</Link>
      </ul>
    </div>
  )
}

export default Navbar

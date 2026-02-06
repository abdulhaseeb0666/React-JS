import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div className='navbar'>
      <h1>MyWeb</h1>
      <ul className='nav-list'>
        <Link id='link' to='/'>Home</Link>
        <Link id='link' to='/about'>About</Link>
        <Link id='link' to='/contact'>Contact</Link>
      </ul>
    </div>
  )
}

export default navbar

import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <>
        <div className='nav'>
            <h1>MyWebApp</h1>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Light</li>
            </ul>
        </div>
        <Button/>
    </>
  )
}

export default Navbar

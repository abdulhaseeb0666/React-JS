import React from 'react'
import Button from './Button'

const Navbar = (props) => {
    console.log(props)
  return (
    <>
        <div className='nav'>
            <h1>MyWebApp</h1>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>{props.theme}</li>
            </ul>
        </div>
        <Button theme={props.theme} settheme={props.setTheme} />
    </>
  )
}

export default Navbar

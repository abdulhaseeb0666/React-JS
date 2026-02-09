import React, { useContext } from 'react'
import Button from './Button'
import { ThemeDataContext } from '../contexts/ThemeContext'

const Navbar = () => {
  const data = useContext(ThemeDataContext)
  const theme = data[0]

  return (
    <>
        <div className={theme}>
            <h1>MyWebApp</h1>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>{data[0]}</li>
            </ul>
        </div>
        <Button/>
    </>
  )
}

export default Navbar

import React, { useContext } from 'react'
import { ThemeDataContext } from '../contexts/ThemeContext'

const Button = (props) => {

  const data = useContext(ThemeDataContext)
  const settheme = data[1]
  
  function changeTheme (){
    if(data[0] == 'Light'){
      settheme('Dark')
    }
    else{
      settheme('Light')
    }
  }
  
  return (
    <>
      <button type='button' onClick={changeTheme}>Change Theme</button>
    </>
  )
}

export default Button
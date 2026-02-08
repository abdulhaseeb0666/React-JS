import React from 'react'

const Button = (props) => {

  return (
    <>
      <button type='button' onClick={()=>{
        if(props.theme == 'Light'){props.settheme('Dark')}
        else{props.settheme('Light')}
    }
      }>Change Theme</button>
    </>
  )
}

export default Button

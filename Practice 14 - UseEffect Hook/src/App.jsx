import React, { useEffect, useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(10)
  
  useEffect(function(){
    console.log("Num is Changing....")
  } , [num])

  useEffect(function(){
    console.log("Num2 is Changing....")
  } , [num2])

  return (
    <div className='main-box'>
      <h2>Value of <span>num</span> is {num}</h2>
      <h2>Value of <span>num2</span> is {num2}</h2>

      <button type="button" 
      
      onMouseEnter={()=>{
        setnum(num+1)
      }}
      onMouseLeave={()=>{
        setnum2(num2+10)
      }}

      > Hover </button>

      <p>When mouse enters the button then <br /> the value of <span>num</span> is changed but when <br /> mouse leaves the button the value of <br /> <span>num2</span> is changed</p>
    </div>
  )
}
export default App

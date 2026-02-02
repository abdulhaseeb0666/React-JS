import React from 'react'

const App = () => {


  function btnClicked(){
    console.log("Button Clicked.....")
  }

  function mouseEntered(){
    console.log("MOuse Entered.....")
  }

  function inputChanging(event){
    console.log(event.target.value)
  }

  function onWheel(event){
    if(event.deltaY >= 0){
      console.log("Scrolling Down...")
    }
    else if(event.deltaY < 0){
      console.log("Scrolling Up.....")
    }
  }

  return (
    <div>
      <input type="text" onChange={(event)=>{
        inputChanging(event);
      }} />
      {/* Agr btnClicked ke saath bracket lga di to function automatically call ho jaye ga */}
      <button onClick={btnClicked} onMouseEnter={mouseEntered}>Submit</button>
     
      <div onWheel={(event)=>{
        onWheel(event);
      }} className='box'></div>
    </div>
  )
}

export default App

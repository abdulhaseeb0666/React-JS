import React, { useState } from 'react'

jaklsdhfkjsdf
const App = () => {

    function btnClicked(){
        setnum(num+1);
    }
    
    const [num, setnum] = useState(0);

  return (
    <div>
        <h1>The number is {num}</h1>
        <button type="button" onClick={btnClicked}>Increase Number</button>
    </div>
  )
}

export default App

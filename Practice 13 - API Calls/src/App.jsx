import React from 'react'
import axios, { Axios } from 'axios';

const App = () => {
  
  async function callingAPI(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    console.log(data)
  }

  async function callingAPIusingFetch(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response.data)
  }

  return (
    <div className='buttons'>
      <button type="button" onClick={callingAPI}>Get API using Fetch</button>
      <button type="button" onClick={callingAPIusingFetch}>Get API using Axios</button>
    </div>
  )
}

export default App
import React, { useState } from 'react'
import axios, { Axios } from 'axios';

const App = () => {
  
  const [data, setdata] = useState([])
  
  async function callingAPI(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    console.log(data)
  }
  
  async function callingAPIusingFetch(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response.data)
  }
  
  const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    setdata(response.data)
  }

  return (
    <>
      <div className='buttons'>
        <button type="button" onClick={callingAPI}>Get API using Fetch</button>
        <button type="button" onClick={callingAPIusingFetch}>Get API using Axios</button>
        <button type="button" onClick={getData}>Use Data using Axios</button>
      </div>

      <div className='data'>
        {data.map((info , idx) => {
          return(
            <h3 className='info' key={idx}>ID: {info.id} <br /> Name: {info.name} <br />  Username: {info.username} <br /> Email: {info.email} <br /> Phone: {info.phone} <br /> Website: {info.website}</h3>
          )
        })}
      </div>
    </>
  )
}

export default App
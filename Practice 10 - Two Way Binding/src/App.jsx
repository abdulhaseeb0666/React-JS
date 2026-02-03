import React, { useState } from 'react'

const App = () => {

  function typingName(event){
    setname(event.target.value)
  }

  function typingBio(event){
    setbio(event.target.value)
  }

  function typingDesc(event){
    setdesc(event.target.value)
  }

  function formSubmitted(event){
    event.preventDefault();

    console.log("Name: ", name)
    console.log("Bio: ", bio)
    console.log("Description: ", desc)

    setname("")
    setbio("")
    setdesc("")
  }
  
  const [name, setname] = useState("")
  const [bio, setbio] = useState("")
  const [desc, setdesc] = useState("")

  return (
    <div>
      <form>
        
        <h1>Add User</h1>

        <p>Username</p>
        <input onChange={(event) => {typingName(event)} }  type="text" placeholder="Enter your username" value={name} />
        
        <p>Bio</p>
        <input onChange={(event) => {typingBio(event)} } type="text" placeholder="Enter your Bio" value={bio}/>
        
        <p>Description</p>
        <textarea onChange={(event) => {typingDesc(event)} } name="description" placeholder="Add your Description" value={desc}></textarea>
        
        <button id="login" type="submit" onClick={(event)=>{formSubmitted(event)}}>Submit</button>

      </form>
    </div>
  )
}

export default App

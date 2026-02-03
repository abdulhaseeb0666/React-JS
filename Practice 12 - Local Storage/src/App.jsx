import React from 'react'

const App = () => {

  const user = {
    name : "Haseeb",
    age : 20
  }

  localStorage.setItem("User" , "Haseeb")
  localStorage.setItem("NewUser" , user)
  localStorage.setItem("CorrectUser" , JSON.stringify(user))
  
  localStorage.setItem("Age" , 20)
  localStorage.removeItem("Age")

  let username = localStorage.getItem("User")
  console.log(username)
  
  let NewUser = localStorage.getItem("NewUser")
  console.log(NewUser)
  
  // This will Log object as string
  let CorrectUser = localStorage.getItem("CorrectUser")
  console.log(CorrectUser)
  
  //This will convertthe string to Object
  let newCorrectUser = JSON.parse(localStorage.getItem("CorrectUser"))
  console.log(newCorrectUser)
  
  
  localStorage.clear()
  
  
  return (
    <div>
        App
    </div>
  )
}

export default App

import React, { useState } from 'react'

const App = () => {

  const students = [
    "Alice Johnson",
    "Bob Smith",
    "Charlie Brown",
    "David Miller",
    "Eve Davis",
    "Frank Wilson",
    "Grace Taylor",
    "Hannah Moore",
    "Ian Anderson",
    "Jack Thomas",
    "Kevin Jackson",
    "Laura White",
    "Michael Harris",
    "Nina Martin",
    "Oliver Thompson",
    "Paul Garcia",
    "Quinn Martinez",
    "Rachel Robinson",
    "Samuel Clark",
    "Tina Rodriguez",
    "Umar Khan",
    "Victor Lewis",
    "William Walker",
    "Xavier Hall",
    "Yasmin Young",
    "Zara Allen",
    "Adeel Ahmed",
    "Bilal Hussain",
    "Danish Iqbal",
    "Fahad Ali",
    "Hamza Sheikh",
    "Imran Raza",
    "Junaid Akhtar",
    "Kamran Malik",
    "Laiba Noor",
    "Mohsin Farooq",
    "Noman Qureshi",
    "Osama Siddiqui",
    "Rizwan Ahmed",
    "Saad Mahmood"
  ];


    function IncreaseRollno(){
      setRollno(prev => prev+1)
      setname(prev => students[rollno])
      console.log(rollno)
    }

    function decreaseRollno(){
      setRollno(prev => prev-1)
      setname(prev => students[rollno])
      console.log(rollno)
    }
    
    
    const [rollno, setRollno] = useState(1);
    const [name, setname] = useState(students[rollno-1])

  return (
    <div>
        <h1>The Student at Rollno {rollno} is {name}</h1>
        <h1>The Student at Rollno {rollno} is {students[rollno-1]}</h1>
        
        <div className='buttons'>
          <button type="button" onClick={()=>{
            if(rollno >= 40){
              alert("Limit Reached....")
            }
            else{IncreaseRollno()}
          }}>Increase Rollno</button>
          <button type="button" onClick={()=>{
            if(rollno <= 1){
              alert("Limit Reached....")
            }
            else{decreaseRollno()}
          }}>Decrease Rollno</button>
        </div>

        <p>Uper wala React ke lagging effect ki wajah se ek step peeche rhe ga to iss wajah se student ki value name ke alag variable ki bjaye direct rollno se derive ki he..</p>
    </div>
  )
}

export default App

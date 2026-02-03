import React, { useState } from 'react'

const App = () => {

  function changingtitle(event){
    settitle(event.target.value)
  }

  function changingdesc(event){
    setdesc(event.target.value)
  }

  function submitForm(event){
    event.preventDefault()

    setNotes(prevNotes => [
      ...prevNotes,
      {
        title: title,
        description: desc
      }
    ])

    settitle('')
    setdesc('')
  }

  function resetNotes(){
    setNotes([])
  }

  function deleteNote(index){
    let copyNotes = [...notes]; 
    copyNotes.splice(index, 1);
    setNotes(copyNotes);
  }

  const [title, settitle] = useState('')
  const [desc, setdesc] = useState('')
  const [notes, setNotes] = useState([])

  return (
    <div className='flex flex-row h-full max-w-full '>
      <div className="flex flex-col text-white justify-self-start gap-3 p-5 w-1/2">
        <h1 className='text-white place-self-center text-4xl font-bold'>Add Notes</h1>
        
        <form className="flex flex-col text-white justify-between gap-3 p-5">
          <input className="px-5 py-2 border-2 border-white rounded-2xl" type="text" placeholder='Enter Name' onChange={(event) => {changingtitle(event)}} value={title} />
          <textarea placeholder='Enter Details' className="px-5 py-2 border-2 border-white rounded-2xl" onChange={(event) => {changingdesc(event)}} value={desc}></textarea>
          <button type="submit" className="px-5 py-2 border-2 border-white rounded-2xl" onClick={(event) => {submitForm(event)}}>Submit</button>
        </form>

      </div>
      <div className="flex flex-col text-white justify-between gap-3 p-5 w-1/2 ml-2 border-l-4 border-l-white h-screen" >

        <h1 className='text-white inline-block place-self-start text-4xl font-bold w-fit '>
          Recent Notes 
          
          <button type="button" className='inline bg-red-600 w-fit px-3 py-1 text-2xl font-bold rounded-2xl ml-30 cursor-pointer border-2' onClick={resetNotes}>Reset Notes</button>

        </h1>  
        
        <div className='h-full w-full overflow-auto flex flex-row flex-wrap gap-4 pt-4 pb-4 pl-8 rounded-3xl scrollbar-hide border-2 place-content-start'>
          
          {notes.map((note, index) => (
            <div key={index} className='bg-[#cd7a00] h-45 w-40 rounded-3xl border-2 border-red-600 overflow-auto scrollbar-hide' >
              <h1 className='text-white bg-amber-950 w-full h-13 p-2 rounded-t-3xl text-xl font-bold flex items-center justify-center overflow-auto scrollbar-hide'>{note.title}</h1>
              <div className='p-2 pt-0 flex flex-col justify-between h-31'>
                
                <p className='text-white text-sm font-bold p-1 overflow-auto scrollbar-hide'>{note.description}</p>

                <button type="button" className=' bg-red-600  w-full px-3 text-xl font-bold rounded-md cursor-pointer border-2 mt-1' 
                onClick={()=>{deleteNote(index)}}
                >Delete</button>

              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default App

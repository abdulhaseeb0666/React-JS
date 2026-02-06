import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNavigation = () => {
  const navigate = useNavigate()
    
  return (
        <div className='h-fit bg-red-400 flex flex-row justify-between items-center py-2 px-5 mb-2'>
            <button type="button" onClick={()=>{
                navigate(-1)
            }} className='text-white font-bold bg-green-800 px-3 py-1 rounded-2xl border-2 cursor-pointer active:scale-90'>Go to Previous Page</button>
            
            <button type="button" onClick={()=>{
                navigate('/')
            }} className='text-white font-bold bg-green-800 px-3 py-1 rounded-2xl border-2 cursor-pointer active:scale-90'>Go to Home Page</button>
            
            <button type="button" onClick={()=>{
                navigate(+1)
            }} className='text-white font-bold bg-green-800 px-3 py-1 rounded-2xl border-2 cursor-pointer active:scale-90'>Go to Next Page</button>
        </div>
    )
}

export default PageNavigation

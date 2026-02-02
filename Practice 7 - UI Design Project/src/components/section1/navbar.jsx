import React from 'react'

const navbar = () => {
  return (
    <div className='w-full flex justify-between p-5'>
        <button className='bg-black text-white rounded-full p-2 cursor-pointer '>Target Audience</button>
        <button className='bg-transparent rounded-full p-2 b-black border-black border-2 cursor-pointer'>Digital Banking Platform</button>
    </div>
  )
}

export default navbar

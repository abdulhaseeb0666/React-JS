import React from 'react'
import leftcontent from './leftcontent'
import rightcontent from './rightcontent'
const center = () => {
  return (
    <div className='flex flex-row items-start gap-10 h-full w-full  p-10'>
      {leftcontent()}
      {rightcontent()}
    </div>
  )
}

export default center

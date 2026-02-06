import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesDetails = () => {
  const params = useParams()
  console.log(params)
  return (
    <div>
      <h1 className='text-white capitalize font-bold text-4xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>{params.id} Courses Details</h1>
    </div>
  )
}

export default CoursesDetails

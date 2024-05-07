import React from 'react'
import { SelectDemo } from './SelectCity'
const page = () => {
  return (
    <div className='container py-4 rounded-lg h-32 my-4 bg-[#f9b233]'>
      <div className='md:container'>
        <h2 className='md:text-3xl text-2xl font-bold'>Browsing event in</h2>
      </div>

      <div className='my-2 md:container'>
        <SelectDemo/>
      </div>
    </div>
  )
}

export default page
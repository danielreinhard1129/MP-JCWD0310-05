import React from 'react'
import { SelectDemo } from './SelectCity'
const page = () => {
  return (
    <div className='container h-32 my-4'>
      <div className='flex flex-col gap-2 bg-mythemes-yellow py-4 rounded-lg'>
        <div className='pl-6'>
          <h2 className='md:text-2xl text-2xl font-bold'>Browsing event in</h2>
        </div>

        <div className='pl-6'>
          <SelectDemo />
        </div>
      </div>
    </div>
  )
}

export default page
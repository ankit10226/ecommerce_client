import { Framer } from 'lucide-react'
import React from 'react'

const Logo = () => {
  return (
    <div className='h-16 shadow-lg flex justify-center items-center'>
      <Framer className='text-white'/><span className='text-white font-bold text-xl'>AdminPanel</span>
    </div>
  )
}

export default Logo
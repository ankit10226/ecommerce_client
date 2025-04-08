import React from 'react'
import Button from '../../UI/Button/Button'
const Products = () => {
  return (
    <div className='h-fit'>
      <div className='flex justify-between items-center p-2'>
        <h1 className='font-bold text-2xl text-gray-800'>Products</h1>
        <Button className="bg-amber-400 text-white">Add Product</Button>
      </div>
    </div>
  )
}

export default Products
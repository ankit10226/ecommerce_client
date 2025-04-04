import React from 'react'

const Sidebar = () => {
  return (
    <div className='h-svh w-1/5 shadow-xl'>
      <div className='h-16 shadow-lg flex justify-center items-center'>LOGO</div>
      <ul>
        <li>Dashboard</li>
        <li>Product</li>
        <li>Order</li>
      </ul>
    </div>
  )
}

export default Sidebar
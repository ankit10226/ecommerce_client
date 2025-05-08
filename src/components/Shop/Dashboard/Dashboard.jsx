import React from 'react'
import Carousel from './Carousel'
import Category from './Category'

const Dashboard = () => {
  return (
    <div className="w-full h-[calc(100vh-64px)] overflow-y-auto">
      <Carousel />
      <Category />
    </div>
  )
}

export default Dashboard

import React from 'react'
import Logo from './Logo'
import sidebarList from '../../../utils/sidebarList/sidebarList'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='hidden h-svh w-1/5 shadow-xl bg-red-400 lg:block md:block sm:block'>
      <Logo /> 
      <ul className="text-white py-4 px-6">
        {
          sidebarList.map((list)=>(
            <Link to={list.navigate} key={list.id}><li className='w-fit flex items-center justify-start py-2 cursor-pointer transition duration-200 ease-in-out hover:scale-110'>{list.logo}<span className='pl-2 text-md font-semibold'>{list.name}</span></li></Link>
          ))
        } 
      </ul>
    </div>
  )
}

export default Sidebar

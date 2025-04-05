import React from 'react'
import Button from '../../UI/Button/Button'
import { AlignJustify, LogOut } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { showModal } from '../../../redux/slices/ModalSlice'
import { destroyUserSession } from '../../../redux/slices/AuthSlice'

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () =>{
    dispatch(destroyUserSession());
    navigate('/',{ replace: true });
    dispatch(showModal({ type: 'success', message: 'Logout Successfully.' }));
  }
  const showSidebar = () =>{
    
  }
  return (
    <header className='h-16 w-full shadow-lg flex items-center justify-between lg:justify-end px-4'> 
      <Button type="button" className="bg-red-400 text-white lg:hidden md:block" onClick={showSidebar}>
        <AlignJustify />
      </Button>
      <Button
        type="button"
        className="bg-red-400 text-white"
        onClick={handleLogout}
      >
       <LogOut className='inline'/>Logout
      </Button>
    </header>
  )
}

export default Header

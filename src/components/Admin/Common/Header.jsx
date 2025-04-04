import React from 'react'
import Button from '../../UI/Button/Button'
import { AlignJustify } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { showModal } from '../../../redux/slices/ModalSlice'

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () =>{
    dispatch(destroyUserSession());
    navigate('/',{ replace: true });
    dispatch(showModal({ type: 'success', message: 'Logout Successfully.' }));
  }
  return (
    <header className='h-16 w-full shadow-lg flex items-center justify-between px-10'> 
      <Button type="button" className="bg-blue-950 text-white">
        <AlignJustify />
      </Button>
      <Button
        type="button"
        className="bg-red-400 text-white"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </header>
  )
}

export default Header
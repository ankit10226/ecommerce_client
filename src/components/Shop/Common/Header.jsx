import React from 'react'
import Button from '../../UI/Button/Button'
import { AlignJustify, LogOut } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Logo from '../../Shop/Common/Logo'
import { destroyUserSession } from '../../../redux/slices/AuthSlice'
import CategoryList from './CategoryList'
import Cart from '../Cart/Cart'

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () =>{
    let res = confirm('Are you sure want to logout!');
    if(res){
      dispatch(destroyUserSession());
      navigate('/',{ replace: true });
      dispatch(showModal({ type: 'success', message: 'Logout Successfully.' }));
    }
  }
  return (
    <header className='h-16 w-full shadow-lg flex items-center justify-between px-4'>
      <div>
        <Logo />  
      </div>
      <div>
        <CategoryList />
      </div>
      <div className='flex justify-between items-center'>
        <Cart />
        <Button
          type="button"
          className="bg-teal-900 text-white ml-8"
          style={{borderRadius:50}}
          onClick={handleLogout}
          >
        <LogOut className='inline'/>
        </Button> 
      </div>
    </header>
  )
}

export default Header
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const ProtectedRoutes = (props) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state)=>state.auth);

  useEffect(() => {
     if(!isLoggedIn){
      navigate('/');
     }
  }, [isLoggedIn,navigate])
  
  if(!isLoggedIn) return null;

  return props.children;
}

export default ProtectedRoutes
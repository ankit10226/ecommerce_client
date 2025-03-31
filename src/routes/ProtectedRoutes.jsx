import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const ProtectedRoutes = (props) => {
  const navigate = useNavigate();
  const { isLoggedIn,isCheckingSession } = useSelector((state)=>state.auth);

  useEffect(() => {
     if(!isCheckingSession && !isLoggedIn){
      navigate('/');
     }
  }, [isLoggedIn,isCheckingSession,navigate])
  
  if(isCheckingSession) return <div>Loading...</div>;

  return props.children;
}

export default ProtectedRoutes

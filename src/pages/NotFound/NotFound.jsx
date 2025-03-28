import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../redux/slices/AuthSlice';

const NotFound = () => {
  const dispatch = useDispatch();
  useEffect(() => { 
    dispatch(logoutUser());
  }, [dispatch])
  
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-cyan-100'>
      <h1 className="text-5xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-8">
        The page you are looking for does not exist.
      </p>
    </div>
  )
}

export default NotFound
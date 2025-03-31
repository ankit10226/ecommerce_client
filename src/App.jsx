import './App.css'
import AppRouter from './routes/AppRouter'
import Modal from './components/UI/Modal/Modal'
import { checkUserSession } from './redux/slices/AuthSlice' 
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function App() { 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch])
  
  return (
    <>
      <Modal />
      <AppRouter />
    </>
  )
}

export default App

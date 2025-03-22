import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRouter from './routes/AppRouter'
import Modal from './components/UI/Modal/Modal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Modal />
      <AppRouter />
    </>
  )
}

export default App

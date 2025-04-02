import './App.css';
import UserRouter from './routes/UserRouter';
import Modal from './components/UI/Modal/Modal';
import { checkUserSession } from './redux/slices/AuthSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminRouter from './routes/AdminRouter';
import AuthRouter from './routes/AuthRouter';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  const { user } = useSelector((state) => state.auth);    
  return (
    <>
      <Modal />
      {!user ? (
        <AuthRouter />
      ) : user?.role === 'user' ? (
        <UserRouter />
      ) : (
        <AdminRouter />
      )}
    </>
  );
}

export default App;

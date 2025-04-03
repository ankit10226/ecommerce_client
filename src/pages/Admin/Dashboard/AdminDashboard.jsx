import React from 'react';
import Button from '../../../components/UI/Button/Button';
import { useDispatch } from 'react-redux';
import { destroyUserSession } from '../../../redux/slices/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { showModal } from '../../../redux/slices/ModalSlice';

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(destroyUserSession());
    navigate('/', { replace: true });
    dispatch(showModal({ type: 'success', message: 'Logout Successfully.' }));
  };
  return (
    <>
      <div>AdminDashboard</div>
      <Button
        type="button"
        className="bg-red-400 text-white"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </>
  );
};

export default AdminDashboard;

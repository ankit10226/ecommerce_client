import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../components/UI/Button/Button';
import { destroyUserSession } from '../../../redux/slices/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { showModal } from '../../../redux/slices/ModalSlice';

const ShopDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(destroyUserSession());
    navigate('/',{ replace: true });
    dispatch(showModal({ type: 'success', message: 'Logout Successfully.' }));
  };
  return (
    <>
      <div>ShopDashboard</div>
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

export default ShopDashboard;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../components/UI/Button/Button';
import { destroyUserSession } from '../../../redux/slices/AuthSlice';
import { Outlet, useNavigate } from 'react-router-dom';
import { showModal } from '../../../redux/slices/ModalSlice';
import Header from '../../../components/Shop/Common/Header';

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
      <Header />
      <Outlet />      
    </>
  );
};

export default ShopDashboard;

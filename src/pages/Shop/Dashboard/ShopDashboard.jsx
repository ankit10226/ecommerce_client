import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { Outlet, useNavigate } from 'react-router-dom'; 
import Header from '../../../components/Shop/Common/Header';

const ShopDashboard = () => { 
  return (
    <>
      <Header />
      <Outlet />      
    </>
  );
};

export default ShopDashboard;

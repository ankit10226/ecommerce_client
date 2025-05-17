import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { Outlet, useNavigate } from 'react-router-dom'; 
import Header from '../../../components/Shop/Common/Header';
import Sidebar from '../../../components/Shop/Common/Sidebar';

const ShopDashboard = () => { 
  return (
    <>
      <Sidebar />
      <Header />
      <Outlet />      
    </>
  );
};

export default ShopDashboard;

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from '../../../redux/slices/ModalSlice';
import { toggleAjaxLoader } from '../../../redux/slices/AjaxLoaderSlice';
import api from '../../../utils/api/api';
import { fetchDashboards } from '../../../redux/slices/DashboardSlice';

const DashboardDetails = () => {

  const dispatch = useDispatch();
  const {dashboards} = useSelector((state)=>state.dashboard);
  useEffect(() => {
    dispatch(fetchDashboards());
  }, [dispatch]);
  return (
    <div className='w-full p-2'>
      {
        dashboards.map((value)=>(
          <div className='w-full h-60 flex justify-center items-center overflow-hidden mb-4 shadow-lg rounded-lg ' key={value._id}>
              <img src={value.image} alt="Dashboard image" className="transition-transform duration-300 ease-linear hover:scale-110"/>
          </div>
        ))
      }
    </div>
  )
}

export default DashboardDetails
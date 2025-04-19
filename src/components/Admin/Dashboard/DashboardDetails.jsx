import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { showModal } from '../../../redux/slices/ModalSlice';
import { toggleAjaxLoader } from '../../../redux/slices/AjaxLoaderSlice';
import api from '../../../utils/api/api';

const DashboardDetails = () => {

  const dispatch = useDispatch();

  const [dashboards, setDashboards] = useState([]);
  useEffect(() => {
    const fetchDashboards = async () => {
      try {
        dispatch(toggleAjaxLoader());
        const response = await api.get('/admin/fetch/dashboard');
        if (response.status === 200) {
          setDashboards(response.data.dashboard);  
        }
      } catch (error) { 
        dispatch(showModal({ type: "error", message: error.response?.data?.message || error.message }));
      } finally {
        dispatch(toggleAjaxLoader());
      }
    };

    fetchDashboards();
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
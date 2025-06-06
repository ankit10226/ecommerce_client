import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import OrderDetails from './OrderDetails';
import { fetchOrder, fetchOrderDetail } from '../../../redux/slices/OrderSlice';
import { Eye, Trash2 } from 'lucide-react';
import Button from '../../UI/Button/Button';
import Select from '../../UI/Select/Select';
import {statusList} from '../../../utils/Admin/dropDownList';
import { toggleAjaxLoader } from '../../../redux/slices/AjaxLoaderSlice';
import { showModal } from '../../../redux/slices/ModalSlice';
import api from '../../../utils/api/api';

const Orders = () => {
  const dispatch = useDispatch(); 
  const { user } = useSelector((state) => state.auth);  
  const { order } = useSelector((state) => state.order);  

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); 

  const handleStatusChange = async(e) =>{ 
    const {id,value} = e.target;
    if(!value) return;
    try { 
      dispatch(toggleAjaxLoader());
      const response = await api.put(`/shop/update/orderStatus/${id}/${value}`);  
      dispatch(showModal({ type: "success", message: 'Status updated successfully.' }));
      dispatch(fetchOrder('all')); 
    } catch (error) {
      dispatch(showModal({ type: "error", message: error.response?.data?.message || error.message }));
    }finally{
      dispatch(toggleAjaxLoader());
    }
  }

  const handleDeleteOrder = async (e) => {
    const orderId = e.currentTarget.id; 
    const res = confirm("Are you sure you want to delete this order?");
    if (res) {
      dispatch(toggleAjaxLoader());
      try {
        const response = await api.delete(`/shop/delete/order/${orderId}`);
        if (response.status === 200) {
          dispatch(
            showModal({ type: "success", message: response.data?.message })
          );
          dispatch(fetchOrder('all'));
        }
      } catch (error) {
        dispatch(
          showModal({
            type: "error",
            message: error.response?.data?.message || error.message,
          })
        );
      } finally {
        dispatch(toggleAjaxLoader());
      }
    }
  };

  useEffect(() => { 
    dispatch(fetchOrder('all')); 
  }, [dispatch]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = order.slice(indexOfFirstItem, indexOfLastItem); 
  const totalPages = Math.ceil(order.length / itemsPerPage);
  // console.log(order[0].createdAt)
  return (
    <>
      <OrderDetails />
      <div className="border border-gray-300 rounded-md p-4">
        <h2 className="text-lg font-semibold mb-4">Total Orders</h2>
        <table className="w-full table-auto border border-collapse border-gray-300 text-sm text-gray-800 font-semibold">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="border border-gray-300 px-3 py-2">Sr No.</th>
              <th className="border border-gray-300 px-3 py-2">User Name</th>
              <th className="border border-gray-300 px-3 py-2">Total Items</th>
              <th className="border border-gray-300 px-3 py-2">Total Amount</th>
              <th className="border border-gray-300 px-3 py-2">Status</th>
              <th className="border border-gray-300 px-3 py-2">Order Date</th>
              <th className="border border-gray-300 px-3 py-2">Address</th>
              <th className="border border-gray-300 px-3 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.length > 0 ? (
              currentOrders.map((ord, index) => (
                <tr key={ord._id}>
                  <td className="border border-gray-300 px-3 py-2">{indexOfFirstItem + index + 1}</td>
                  <td className="border border-gray-300 px-3 py-2">{ord.user.name}</td>
                  <td className="border border-gray-300 px-3 py-2">{ord.totalItems}</td>
                  <td className="border border-gray-300 px-3 py-2">&#8377;{ord.totalAmount}</td>
                  {/* <td className="border border-gray-300 px-3 py-2 capitalize">{ord.status}</td> */}
                  <td className="border border-gray-300 px-3 py-2 capitalize">
                        <Select
                        id={ord._id}
                        placeholder="Select Category"
                        options={statusList}
                        value={ord.status}
                        onChange={handleStatusChange}
                      />
                  </td>
                  <td className="border border-gray-300 px-3 py-2">{new Date(ord.createdAt).toLocaleDateString('en-GB')}</td>
                  <td className="border border-gray-300 px-3 py-2 capitalize">{`${ord.address.address}, ${ord.address.state}, ${ord.address.pincode}`}</td>
                  <td className="border border-gray-300 px-3 py-2">
                    <div className='flex'>
                      <Button type="button" className="bg-gray-800 text-white mx-2" id={ord._id} onClick={()=>dispatch(fetchOrderDetail(ord._id))}>
                        <Eye />
                      </Button>
                      <Button type="button" className="bg-red-400 text-white mx-2" id={ord._id} onClick={handleDeleteOrder}>
                        <Trash2 id={ord._id}/>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">No orders found</td>
              </tr>
            )}
          </tbody>
        </table>


        {totalPages > 1 && (
          <div className="flex justify-end mt-4 space-x-2 text-sm">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100"
            >
              Prev
            </button>
            {[...Array(totalPages).keys()].map((num) => (
              <button
                key={num}
                onClick={() => setCurrentPage(num + 1)}
                className={`px-3 py-1 border rounded ${
                  currentPage === num + 1 ? 'bg-blue-500 text-white' : 'border-gray-300 hover:bg-gray-100'
                }`}
              >
                {num + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100"
            >
              Next
            </button>
          </div>
        )}
  
      </div>
    </>
  );
};

export default Orders

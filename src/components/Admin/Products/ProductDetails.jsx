import React, { useEffect, useState } from 'react'
import api from '../../../utils/api/api';
import { useDispatch } from 'react-redux';
import { toggleAjaxLoader } from '../../../redux/slices/AjaxLoaderSlice';

const ProductDetails = () => {
  const dispatch = useDispatch();

  const [products,setProducts] = useState([]);
  useEffect(()=>{
    const fetchProducts = async () =>{
      try {
        dispatch(toggleAjaxLoader());
        const response = await api.get('/admin/fetch/product');
        if (response.status === 200) {
          setProducts(response.data.product);
        }
      } catch (error) {
        console.log("Error in fetching data : ",error.response?.data?.message || error.message);
      } finally{
        dispatch(toggleAjaxLoader());
      }
    }

    fetchProducts();
  },[dispatch]) 
  return (
    <>
    {
      products.map((value) => (
        <div className='w-full h-80 p-4 flex' key={value._id}>
          <div className='w-1/2 flex'>
            <img src={value.image} alt={`${value.title} image`} className='w-auto h-full'/>
          </div>
          <div className='w-1/2 bg-yellow-400'>{value.price}</div>
        </div> 
      ))
    }

    </>
  )
}

export default ProductDetails
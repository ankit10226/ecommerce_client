import React, { useEffect, useState } from 'react';
import api from '../../../utils/api/api';
import { useDispatch } from 'react-redux';
import { toggleAjaxLoader } from '../../../redux/slices/AjaxLoaderSlice';

const ProductDetails = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        dispatch(toggleAjaxLoader());
        const response = await api.get('/admin/fetch/product');
        if (response.status === 200) {
          setProducts(response.data.product); 
        }
      } catch (error) {
        dispatch(showModal({ type: "error", message: error.response?.data?.message || error.message }));
      } finally {
        dispatch(toggleAjaxLoader());
      }
    };

    fetchProducts();
  }, [dispatch]);
  return (
    <> 
      <div className="w-full p-2 grid lg:grid-cols-2 gap-4 md:grid-cols-1">
        {products.map((value) => (
          <div className="flex h-50 shadow-lg rounded-lg border-1 border-gray-300 hover:border-gray-400 hover:transition ease-linear text-teal-900" key={value._id}>
            <div className="w-1/3 overflow-hidden rounded-lg flex justify-center items-center">
              <img
                src={value.image}
                alt={`${value.title} image`}
                className="w-full h-auto transition-transform duration-300 ease-linear hover:scale-110"
              />
            </div>
            <div className="w-2/3 overflow-y-scroll p-2">
              <div className='flex'>
                <h1 className='font-bold w-1/3'>Title</h1>
                <p className='pl-2 w-2/3 font-semibold text-teal-700'>{value.title}</p>
              </div>
              <div className='flex'>
                <h1 className='font-bold w-1/3'>Price</h1>
                <p className='pl-2 w-2/3 font-semibold text-teal-700'>{value.price}</p>
              </div>
              <div className='flex'>
                <h1 className='font-bold w-1/3'>Quantity</h1>
                <p className='pl-2 w-2/3 font-semibold text-teal-700'>{value.quantity}</p>
              </div>
              <div className='flex'>
                <h1 className='font-bold w-1/3'>Description</h1>
                <p className='pl-2 w-2/3 font-semibold text-teal-700'>{value.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductDetails;

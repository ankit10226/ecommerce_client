import React from 'react';
import Button from '../../UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { toggleProductModal } from '../../../redux/slices/ProductSlice';
import AddProductModal from './AddProductModal';
const Products = () => {
  const dispatch = useDispatch();
  return (
    <>
      <AddProductModal />
      <div className="h-fit">
        <div className="flex justify-between items-center p-2">
          <h1 className="font-bold text-2xl text-gray-800 underline">
            Products
          </h1>
          <Button
            className="bg-teal-500 text-white"
            onClick={() => dispatch(toggleProductModal())}
          >
            Add New Product
          </Button>
        </div>
      </div>
    </>
  );
};

export default Products;

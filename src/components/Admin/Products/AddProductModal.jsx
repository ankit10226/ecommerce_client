import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleProductModal } from '../../../redux/slices/ProductSlice';
import Button from '../../UI/Button/Button';
import { createPortal } from 'react-dom';

const AddProductModal = () => {

  const dispatch = useDispatch();
  const { isProductModalVisible } = useSelector((state)=>state.product);

  if(!isProductModalVisible) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-40" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="bg-white p-4 w-86 rounded-lg shadow-lg">

        <Button type="type" className="bg-gray-900 text-white" onClick={() => dispatch(toggleProductModal())}>
          Close
        </Button> 
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default AddProductModal
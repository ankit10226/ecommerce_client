import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPortal } from 'react-dom';
import { hideModal } from '../../../redux/slices/ModalSlice';
import Button from '../Button/Button';

const Modal = ({}) => {
  const dispatch = useDispatch();
  const { isVisible,type,message } = useSelector((state)=>state.modal);
  
  if(!isVisible) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="bg-white p-6 w-96 rounded-lg shadow-lg">
        <h2 className={`text-xl font-bold mb-2 ${type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
          {type === 'success' ? 'Success' : 'Error'}
        </h2>
        <p>{message}</p>
        <Button type="type" className={`mt-4 px-4 py-2 text-white ${type === 'success' ? 'bg-green-400' : 'bg-red-400'}`} onClick={() => dispatch(hideModal())}>
          Close
        </Button> 
      </div>
    </div>,
    document.getElementById('modal-root')
  );
  
}

export default Modal
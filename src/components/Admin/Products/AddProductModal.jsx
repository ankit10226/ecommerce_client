import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleProductModal } from '../../../redux/slices/ProductSlice';
import Button from '../../UI/Button/Button';
import { createPortal } from 'react-dom';
import Input from '../../UI/Input/Input';
import { showModal } from '../../../redux/slices/ModalSlice';
import api from '../../../utils/api/api';
import TextArea from '../../UI/TextArea/TextArea';
import categoryList from '../../../utils/categoryList/categoryList';
import Select from '../../UI/Select/Select';

const initialFormData = {
  title:'',
  price:'',
  quantity:'',
  description:'',
  category:'',
}

const initialError = { 
  title: false,
  price:false,
  quantity:false,
  description:false,
  category:false,
  imageUrlError:false
};

const AddProductModal = () => {
  const dispatch = useDispatch();
  const { isProductModalVisible } = useSelector((state)=>state.product);

  const [formData,setFormData] = useState(initialFormData);
  const [error,setError] = useState(initialError);
  const [imageUrl, setImageUrl] = useState('');

  const handleInputChange = (e) =>{
    const { name,value } = e.target; 
    setFormData((prev)=>({
      ...prev,
      [name]:value
    }));

    setError((prev)=>({
      ...prev,
      [name]:value.trim() === ''
    }));
  }

  const handleFileSelect = async (e) => {
    const file = e.target.files[0]; 
    if (!file) return;
  
    const formData = new FormData();
    formData.append("file", file);
  
    try {
      const response = await api.post(
        "/admin/upload/image",
        formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      if (response.status === 200) {
        const uploadedUrl = response.data?.url;
  
        if (uploadedUrl) {
          setImageUrl(uploadedUrl);
          setFormData(prev => ({ ...prev, image: uploadedUrl }));
          setError((prev)=>({
            ...prev,
            imageUrlError: false
          }));
          dispatch(showModal({ type: "success", message: "Image uploaded successfully!" }));
        }
      }
    } catch (err) {
      console.error("Image upload error:", err);
      dispatch(showModal({ type: "error", message: "Image upload failed!" }));
    }
  };
  

  const handleFormSubmit = async (e) =>{
    e.preventDefault();
    if(!imageUrl){
      setError((prev)=>({
        ...prev,
        imageUrlError: true
      }));
      return;
    }
    
    let hasError = Object.keys(formData).reduce((acc,key)=>{
      let errorExists = formData[key].trim() === '';
      setError((prev)=>({
        ...prev,
        [key]:errorExists
      }));
      return acc || errorExists;
    },false);
    if(hasError) return; 
    
    try {
      const response = await api.post(
        "/admin/upload/product",
        formData
      );
  
      if (response.status === 200) {
        dispatch(showModal({type:'success',message:response.data?.message}));
        dispatch(toggleProductModal());
      }
    } catch (error) {
      dispatch(showModal({type:'error',message:error.response?.data?.message || error.message}))
    }
  }

  useEffect(() => {
    if (isProductModalVisible) {
      setFormData(initialFormData);
      setError(initialError);
      setImageUrl('');
    }
  }, [isProductModalVisible]);

  if(!isProductModalVisible) return null;
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-40" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
      <div className="bg-white p-4 w-1/4 rounded-lg shadow-lg max-h-[90vh] overflow-y-auto">
        <form onSubmit={handleFormSubmit}>
        <Input
          type="file"
          name="file"
          id="file"
          className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-lg file:border-0
          file:text-sm file:font-semibold
          file:bg-teal-50 file:text-teal-700
          hover:file:bg-teal-100
          mb-4 cursor-pointer"
          onChange={handleFileSelect}
        /> 
        { (!imageUrl && error.imageUrlError) && <p className='text-red-400 font-light text-sm'>{`Please upload product image!`}</p>}
        {imageUrl && (
          <div className="mb-4 flex justify-center">
            <img src={imageUrl} alt="Uploaded" className="w-1/4 h-auto rounded shadow" />
          </div>
        )}
        <Select
          name="category"
          id="category"
          placeholder="Select category"
          options={categoryList}
          value={formData.category}
          onChange={handleInputChange}
        />
        { error.category && <p className='text-red-400 font-light text-sm'>{`This field is required!`}</p>}
        <Input
            type="text"
            name="title"
            id="title"
            label="Title"
            className={`${error.title ? 'border-2 border-red-400' : 'mb-4'}`}
            value={formData.title}
            onChange={handleInputChange}
          />
          { error.title && <p className='text-red-400 font-light text-sm'>{`This field is required!`}</p>}
        <Input
            type="number"
            name="price"
            id="price"
            label="Price"
            className={`${error.price ? 'border-2 border-red-400' : 'mb-4'}`}
            value={formData.price}
            onChange={handleInputChange}
          />
          { error.price && <p className='text-red-400 font-light text-sm'>{`This field is required!`}</p>}
        <Input
            type="number"
            name="quantity"
            id="quantity"
            label="Quantity"
            className={`${error.quantity ? 'border-2 border-red-400' : 'mb-4'}`}
            value={formData.quantity}
            onChange={handleInputChange}
          />
          { error.quantity && <p className='text-red-400 font-light text-sm'>{`This field is required!`}</p>}
        <TextArea
            type="number"
            name="description"
            id="description"
            label="Description"
            className={`${error.description ? 'border-2 border-red-400' : 'mb-4'}`}
            value={formData.description}
            onChange={handleInputChange}
          />
          
          { error.description && <p className='text-red-400 font-light text-sm'>{`This field is required!`}</p>}
          <div className='flex justify-end '>
            <Button type="button" className="bg-teal-500 text-white mr-2" onClick={() => dispatch(toggleProductModal())}>
              Close
            </Button> 
            <Button type="submit" className="bg-teal-500 text-white">
              Submit
            </Button> 
          </div>
        </form>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default AddProductModal
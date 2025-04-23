import { createSlice } from '@reduxjs/toolkit';
import { toggleAjaxLoader } from './AjaxLoaderSlice';
import { showModal } from './ModalSlice';
import api from '../../utils/api/api';

const initialState = {
  isProductModalVisible: false,
  modalType:null,
  editModalId:null,
  products:[]
};
export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    toggleProductModal: (state,action) => {
      state.isProductModalVisible = !state.isProductModalVisible;
      const {type,id} = action.payload || {};
      state.modalType = type || null;
      state.editModalId = id || null;
    },
    setProduct: (state,action) =>{
      state.products = action.payload
    }
  },
});

export const { toggleProductModal,setProduct } = ProductSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  try { 
    dispatch(toggleAjaxLoader());
    const response = await api.get('/admin/fetch/product'); 
    dispatch(setProduct(response.data.product));  
  } catch (error) {
    dispatch(showModal({ type: "error", message: error.response?.data?.message || error.message }));
  }finally{
    dispatch(toggleAjaxLoader());
  }
};

export default ProductSlice.reducer

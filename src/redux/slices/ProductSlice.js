import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isProductModalVisible: false,
};
export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    toggleProductModal: (state) => {
      state.isProductModalVisible = !state.isProductModalVisible;
    },
  },
});

export const { toggleProductModal } = ProductSlice.actions;

export default ProductSlice.reducer

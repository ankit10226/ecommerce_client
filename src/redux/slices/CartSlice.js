import { createSlice } from "@reduxjs/toolkit";

const getInitialCartItems = () => {
  const localData = localStorage.getItem("cartItems");
  return localData ? JSON.parse(localData) : [];
};

const initialState = {
  showShoppingCartModal: false,
  cartItems: getInitialCartItems(),
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleShoppingCartModal:(state)=>{
      state.showShoppingCartModal = !state.showShoppingCartModal
    },
    setCartItem: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const { setCartItem,toggleShoppingCartModal } = cartSlice.actions

export default cartSlice.reducer

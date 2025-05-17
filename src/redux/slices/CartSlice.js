import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItem: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const { setCartItem } = cartSlice.actions

export default cartSlice.reducer

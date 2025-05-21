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
    updateCartQty: (state, action) => {
      const { id, type } = action.payload;
      const itemIndex = state.cartItems.findIndex((item) => item._id === id);

      if (itemIndex !== -1) {
        if (type === "add") {
          state.cartItems[itemIndex].cartQty += 1;
        } else if (type === "minus") {
          if (state.cartItems[itemIndex].cartQty > 1) {
            state.cartItems[itemIndex].cartQty -= 1;
          } else { 
            const isConfirm = confirm('Are you sure? Item will be removed from cart.');
            if(isConfirm)
              state.cartItems.splice(itemIndex, 1);
          }
        } 
      }
    },
    deleteCartItem : (state,action) => {
      const {id} = action.payload;
      const itemIndex = state.cartItems.findIndex((item) => item._id === id);
      if (itemIndex !== -1) {
        const isConfirm = confirm('Are you sure? Item will be removed from cart.');
        if(isConfirm)
          state.cartItems.splice(itemIndex, 1);
      }
    }

  },
});

export const { setCartItem,updateCartQty,deleteCartItem,toggleShoppingCartModal } = cartSlice.actions

export default cartSlice.reducer

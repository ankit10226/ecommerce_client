import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVisible : false
};
export const SidbarSlice = createSlice({
  name:'sidebar',
  initialState,
  reducers:{
    showSidebar:(state)=>{
      state.isVisible = !state.isVisible;
    }
  }
});

export const { showSidebar } = SidbarSlice.actions;

export default SidbarSlice.reducer
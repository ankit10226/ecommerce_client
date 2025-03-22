import { createSlice } from '@reduxjs/toolkit'

const persistedUser = JSON.parse(localStorage.getItem('user'));
const persistedToken = localStorage.getItem('token');

const initialState = {
  user:persistedUser || null,
  token:persistedToken || null,
  isLoggedIn:!!persistedToken
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser:(state,action)=>{
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;

      localStorage.setItem('user',JSON.stringify(action.payload.user));
      localStorage.setItem('token',action.payload.token);
    },
    logoutUser:(state)=>{
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;

      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
  },
})
 
export const { setUser,logoutUser } = authSlice.actions

export default authSlice.reducer
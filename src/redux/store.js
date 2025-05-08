import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/AuthSlice";
import modalReducer from "./slices/ModalSlice";
import sidebarReducer from "./slices//SidebarSlice"
import productReducer from "./slices/ProductSlice"
import dashboardReducer from "./slices/DashboardSlice"
import ajaxLoaderReducer from "./slices/AjaxLoaderSlice"

export const store = configureStore({
  reducer: {
    auth:authReducer,
    modal:modalReducer,
    sidebar:sidebarReducer,
    product:productReducer,
    dashboard:dashboardReducer,
    ajaxLoader:ajaxLoaderReducer
  },
})
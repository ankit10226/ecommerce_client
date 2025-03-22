import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Auth from '../pages/Auth/Auth';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import { Suspense } from 'react';
import NotFound from '../pages/NotFound/NotFound';
import Dashboard from '../pages/Dashboard/Dashboard';
import ProtectedRoutes from './ProtectedRoutes';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
    children: [
      { index: true, element: <Login /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
    ],
  },{
    path:'/dashboard',
    element:<ProtectedRoutes><Dashboard /></ProtectedRoutes>
  },{
    path:'/*',
    element:<NotFound />
  }
]);

const AppRouter = () => (
  <Suspense fallback={<div>Loading....</div>}>
    <RouterProvider router={router} />
  </Suspense>
);

export default AppRouter;
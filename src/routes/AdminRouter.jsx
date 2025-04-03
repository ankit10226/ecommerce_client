import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdminDashboard from '../pages/Admin/Dashboard/AdminDashboard';
import { Suspense } from 'react';
import Loading from '../components/UI/Loading/Loading';
import NotFound from '../pages/NotFound/NotFound';

const AdminRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/admin/dashboard',
      element: <AdminDashboard />,
    },
    {
      path:'*',
      element:<NotFound />
    }
  ]);

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  );
};

export default AdminRouter;

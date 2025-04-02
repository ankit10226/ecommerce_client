import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdminDashboard from '../pages/Admin/Dashboard/AdminDashboard';
import { Suspense } from 'react';
import Loading from '../components/UI/Loading/Loading';

const AdminRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/dashboard',
      element: <AdminDashboard />,
    },
  ]);

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  );
};

export default AdminRouter;

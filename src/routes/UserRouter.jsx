import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Loading from '../components/UI/Loading/Loading';
const UserDashboard = lazy(() =>
  import('../pages/User/Dashboard/UserDashboard')
);
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const ProtectedRoutes = lazy(() => import('./ProtectedRoutes'));

const UserRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/user/dashboard',
      element: (
        <ProtectedRoutes>
          <UserDashboard />
        </ProtectedRoutes>
      ),
    },
    {
      path: '/user/*',
      element: (
        <ProtectedRoutes>
          <NotFound />
        </ProtectedRoutes>
      ),
    },
  ]);

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default UserRouter;

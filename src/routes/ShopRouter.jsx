import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Loading from '../components/UI/Loading/Loading';
const ShopDashboard = lazy(() =>
  import('../pages/Shop/Dashboard/ShopDashboard')
);
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const ProtectedRoutes = lazy(() => import('./ProtectedRoutes'));

const ShopRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/shop/dashboard',
      element: (
        <ProtectedRoutes>
          <ShopDashboard />
        </ProtectedRoutes>
      ),
    },
    {
      path: '*',
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

export default ShopRouter;

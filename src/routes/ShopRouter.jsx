import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

import Loading from "../components/UI/Loading/Loading";
import NotFound from "../pages/NotFound/NotFound";
import ShopDashboard from "../pages/Shop/Dashboard/ShopDashboard";
import Dashboard from "../components/Shop/Dashboard/Dashboard";
import Products from "../components/Shop/Products/Products";
import Profile from "../components/Shop/Profile/Profile";
import ShoppingCart from "../components/Shop/ShoppingCart/ShoppingCart";

const ShopRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/shop/",
      element: <ShopDashboard />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "products", element: <Products /> },
        { path: "shoppingCart", element: <ShoppingCart /> },
        { path: "profile", element: <Profile /> },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  );
};

export default ShopRouter;

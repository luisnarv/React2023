import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./UI/Home";
import Menu, { loader as menuLoader } from "./Features/menu/Menu";
import Cart from "./Features/cart/Cart";
import Order, { loader as orderLoader } from "./Features/order/Order";
import CreateOrder, {
  action as actionNewOrder,
} from "./Features/order/CreateOrder";
import AppLayout from "./UI/AppLayout";
import Error from "./UI/Error";
import { action as updateOrderAction } from "./Features/order/UpdateORder";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home />, errorElement: <Error /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart />, errorElement: <Error /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: actionNewOrder,
        errorElement: <Error />,
      },
      {
        path: "/order/:orderID",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

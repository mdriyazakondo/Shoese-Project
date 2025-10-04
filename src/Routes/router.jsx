import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Carts from "../pages/Carts";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/carts",
        element: <Carts />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

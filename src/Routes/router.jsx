import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Carts from "../pages/Carts";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import TShart from "../pages/TShart";
import Pant from "../pages/Pant";
import Shart from "../pages/Shart";
import TShartNow from "../pages/TShartNow";
import PantNow from "../pages/PantNow";
import ShartNow from "../pages/ShartNow";

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
        path: "/cart/:id",
        element: <Cart />,
      },
      {
        path: "/t-shart",
        element: <TShart />,
      },
      {
        path: "/t-shart/:id",
        element: <TShartNow />,
      },
      {
        path: "/pant",
        element: <Pant />,
      },
      {
        path: "/pant/:id",
        element: <PantNow />,
      },
      {
        path: "/shart",
        element: <Shart />,
      },
      {
        path: "/shart/:id",
        element: <ShartNow />,
      },
    ],
  },
]);

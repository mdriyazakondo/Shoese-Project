import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/router.jsx";
import ProductsContext from "./context/ProductContext.jsx";

createRoot(document.getElementById("root")).render(
  <ProductsContext>
    <RouterProvider router={router} />
  </ProductsContext>
);

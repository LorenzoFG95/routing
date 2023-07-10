import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Error from "./routes/error.jsx";
import About from "./routes/about/About.jsx";
import ProductsStatic from "./routes/products";
import Contacts from "./routes/contacts/Contacts.jsx";
import Locations from "./routes/products/Locations.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/locations",
    element: <ProductsStatic />,
  },
  {
    path: "/locations/:id",
    element: <Locations />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

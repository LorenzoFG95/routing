import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Error from "./routes/error.jsx";
import About from "./routes/about/About.jsx";
import ProductsStatic from "./routes/products";
import Contacts from "./routes/contacts/Contacts.jsx";
import Locations from "./routes/products/Locations.jsx";
import DefaultLayout from "./layouts/defaultLayout/Defaultlayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./components/login/Login.jsx";
import Dashboard from "./routes/Dashboard.jsx";
import Logout from "./routes/Logout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DefaultLayout>
        <App />
      </DefaultLayout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: (
      <DefaultLayout>
        <About />
      </DefaultLayout>
    ),
  },
  {
    path: "/contacts",
    element: (
      <DefaultLayout>
        <Contacts />
      </DefaultLayout>
    ),
  },
  {
    path: "/locations",
    element: (
      <DefaultLayout>
        <ProductsStatic />
      </DefaultLayout>
    ),
  },
  {
    path: "/locations/:id",
    element: (
      <DefaultLayout>
        <Locations />
      </DefaultLayout>
    ),
  },
  {
    path: "/login",
    element: (
      <DefaultLayout>
        <Login />
      </DefaultLayout>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    ),
  },
  {
    path: "/logout",
    element: (
      <DefaultLayout>
        <Logout />
      </DefaultLayout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

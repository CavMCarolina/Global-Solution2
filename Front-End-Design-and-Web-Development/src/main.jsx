import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import ONGs from "./Pages/ONGs.jsx";
import Voluntario from "./Pages/Voluntario.jsx";
import API from "./Pages/API.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "BlueWatch/ONGs", element: <ONGs /> },
      { path: "/BlueWatch/Voluntario", element: <Voluntario /> },
      { path: "/BlueWatch/API", element: <API /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

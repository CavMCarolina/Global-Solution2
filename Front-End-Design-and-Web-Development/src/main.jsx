import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";
import Prototipo from "./Pages/Prototipo.jsx";
import ONGs from "./Pages/ONGs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { path: "/", element: <Home/> },
      { path: "BlueWatch/ONGs", element: <ONGs/> },
      { path: "/BlueWatch/Prototipo", element: <Prototipo/> },
      { path: "*", element: <PageNotFound/> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Prototipo from "./Pages/Prototipo.jsx";
import ONGs from "./Pages/ONGs.jsx";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Voluntario from "./Pages/Voluntario.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { path: "/", element: <Home/> },
      { path: "BlueWatch/ONGs", element: <ONGs/> },
      { path: "/BlueWatch/Prototipo", element: <Prototipo/> },
      { path: "/BlueWatch/Voluntario", element: <Voluntario/> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="852986452160-m1nm30pp7ltgshkgivml0flm8560mj66.apps.googleusercontent.com">
  <React.StrictMode>
     <RouterProvider router={router}/>  
  </React.StrictMode>,
  </GoogleOAuthProvider>
)
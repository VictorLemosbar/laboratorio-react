import React from "react"
import ReactDOM from"react-dom/client"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import Layout from "./Pages/LAyout.jsx"
import Login from "./Pages/Login.jsx"
import Home from "./Pages/Home.jsx"
import Contador from "./Pages/Contador.jsx"
import Profile from "./Pages/Profile.jsx"

const router = createBrowserRouter([

  {
    element: <Layout />,
    children: [
      { path: "/", element: <Login /> },
      { path: "home", element: <Home /> },
      { path: "contador", element: <Contador /> },
      { path: "profile", element: <Profile /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />,
  </React.StrictMode>
);



import React from "react"
import ReactDOM from"react-dom/client"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import Layout from "../src/Pages/Layout/Layout.jsx"
import Login from "../src/Pages/Login/Login.jsx"
import Home from "../src/Pages/Home/Home.jsx"
import Activities from "../src/Pages/Activities/Activities.jsx"
import Profile from "../src/Pages/Profile/Profile.jsx"
import Contador from "./Pages/Counter/Contador.jsx"
import Api from "./API/Api.jsx"

const router = createBrowserRouter([

  {
    element: <Layout />,
    children: [
      { path: "/", element: <Login /> },
      { path: "home", element: <Home /> },
      { path: "activities", element: <Activities />},
      { path: "contador", element: <Contador /> },
      { path: "profile", element: <Profile /> },
      { path: "books", element: <Api />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />,
  </React.StrictMode>
);



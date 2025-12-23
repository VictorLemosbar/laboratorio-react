import React from "react"
import ReactDOM from"react-dom/client"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'


//Layout defines the entire aplication format
import Layout from "../src/Pages/Layout/Layout.jsx"


import Login from "../src/Pages/Login/Login.jsx"
import Home from "../src/Pages/Home/Home.jsx"

//Activities is the main component of the normal React Activities
import Activities from "../src/Pages/Activities/Activities.jsx"

import Counter from "./Pages/Activities/Counter/Counter.jsx"
import Profile from "./Pages/Activities/ProfileCard/Profile.jsx"
import Form from "./Pages/Activities/SimpleForm/Form.jsx"

const router = createBrowserRouter([

  {
    element: <Layout />,
    children: [
      { path: "/", element: <Login /> },
      { path: "home", element: <Home /> },
      { path: "activities", element: <Activities />},
      { path: "contador", element: <Counter /> },
      { path: "profile", element: <Profile /> },
      {path: "form", element: <Form />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />,
  </React.StrictMode>
);



import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home/Home";
import App from "./App";
import WatchMatch from "./Components/Home/Matches/WatchMatch/WatchMatch";
import Tournaments from "./Components/Tournaments/Tournaments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[{
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/watch/:id',
      element:<WatchMatch></WatchMatch>,
      loader:({params})=>fetch(`http://localhost:5000/matches/${params.id}`)
    },
    {
      path:'/tournaments',
      element:<Tournaments></Tournaments>,
     
    },
  ]
   
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

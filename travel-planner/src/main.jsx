import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateTrip from "./create-trip";
import Header from "./components/ui/custom/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <App />
      </>
    ),
  },
  {
    path: "/create-trip",
    element: (
      <>
        <Header />
        <CreateTrip />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <Header />
        <Register />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Header />
        <Login />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

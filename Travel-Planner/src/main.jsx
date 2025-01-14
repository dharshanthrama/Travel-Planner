import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Login from './Service/Login';
import Register from './Service/Register';
import ForgotPassword from './Service/ForgotPassword';
import ResetPassword from './Service/ResetPassword';
import HelpCenter from './Pages/HelpCenter';
import Booking from './Pages/Booking';
import Flight from './Pages/Flight';
import Hotel from './Pages/Hotel';
import Train from './Pages/Train';
import TravelInsurance from './Pages/TravelInsurance';
import HotelDetails from './Pages/HotelDetails';
import Dashboard from './Pages/Dashboard';
import Makepayment from './Pages/Makepayment';
import ItineraryPage from './Pages/Itinerary';
import BudgetPage from './Pages/BudgetPage';
import HolidayPackage from './Pages/HolidayPackage';
import ProtectedRoute from './Service/ProtectedRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element:  <ProtectedRoute>
    <Header />
    <App />
  </ProtectedRoute>
  },
  {
    path: "/login",
    element:   <>
    <Header />
    <Login />
  </>,
  },
  {
    path: "/register",
    element:     <>
    <Header />
    <Register /> </>,
  },
  {
    path: "/forgot-password",
    element:     <>
    <Header />
    <ForgotPassword /> </>,
  },
  {
    path: "/reset-password/:token",
    element:     <>
    <Header />
    <ResetPassword /> </>,
  },
  {
    path: "/help",
    element:     <>
    <Header />
    <HelpCenter /> </>,
  },
  {
    path: "/bookings",
    element:     <>
    <Header />
    <Booking /> </>,
  },
  {
    path: "/flight",
    element: <Flight /> 
  },
  {
    path: "/hotel",
    element: <Hotel /> 
  },
  {
    path: "/train",
    element: <Train /> 
  },
  {
    path: "/travelInsurance",
    element: <TravelInsurance /> 
  },
  {
    path: "/hotel-details",
    element: <HotelDetails /> 
  },
  {
    path: "/dashboard",
    element: <Dashboard /> 
  },
  {
    path: "/make-payment",
    element: <Makepayment /> 
  },
  {
    path: "/itinerary",
    element: <>
    <Header />
    <ItineraryPage /> 
    </>
  },
  {
    path: "/budget",
    element: <>
    <Header />
    <BudgetPage /> 
    </>
  },
  {
    path: "/HolidayPackage",
    element: <>
    <Header />
    <HolidayPackage/> 
    </>
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

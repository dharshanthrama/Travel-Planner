import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * ProtectedRoute Component
 * This component is used to protect routes that require authentication.
 * It checks if a valid token is present in localStorage and redirects
 * to the login page if the user is not authenticated.
 * 
 * @param {Object} props - Props passed to the component
 * @param {React.ReactNode} props.children - The component(s) to render if authenticated
 * @returns {React.ReactNode} - The protected route or a redirect to the login page
 */
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // Retrieve the token from localStorage

  if (!token) {
    // If no token, redirect to the login page
    return <Navigate to="/login" replace />;
  }

  // If a token exists, render the children components
  return children;
};

export default ProtectedRoute;

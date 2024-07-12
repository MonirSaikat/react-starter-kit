import { useAuth } from "@hooks/useAuth";
import { Navigate } from "react-router-dom";

export const AppPages = ({ children, isAuthenticated }) => {
  const { isAuthenticated: _isAuthenticated } = useAuth();

  return (isAuthenticated || _isAuthenticated) ? children : <Navigate to='/login' />;
};
import { Link } from "react-router-dom";
import { StyledNavbar } from "./Navbar.styled";
import { useAuth } from "@hooks/useAuth";

export const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  const _logout = (e) => {
    e.preventDefault();
    logout();
  };
  
  return (
    <StyledNavbar>
      <Link to="/">Home</Link>
      <Link to="/site">Site</Link>
      <Link to="/app">App</Link>
      {isAuthenticated ? <Link to="#" onClick={_logout}>Logout</Link> : <Link to="/login">Login</Link>}
    </StyledNavbar>
  );
};

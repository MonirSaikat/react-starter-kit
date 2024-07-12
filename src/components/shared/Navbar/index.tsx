import { Link } from "react-router-dom";
import { StyledNavbar } from "./Navbar.styled";

export const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to="/">Home</Link>
      <Link to="/site">Site</Link>
      <Link to="/app">App</Link>
    </StyledNavbar>
  );
};

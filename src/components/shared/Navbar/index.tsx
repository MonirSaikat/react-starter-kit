import { Link } from "react-router-dom";
import { StyledNavbar } from "./Navbar.styled";
import { Button } from "@elements/Button";

export const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to="/">Home</Link>
      <Link to="/site">Site</Link>
      <Link to="/app">App</Link>
      <Button variant="danger">Logout</Button>
    </StyledNavbar>
  );
};

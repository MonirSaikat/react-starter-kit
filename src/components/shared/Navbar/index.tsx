import { Link } from "react-router-dom";
import { StyledNavbar } from "./Navbar.styled";

export const Navbar = ({ links = [] }) => {
  return (
    <StyledNavbar>
      {links.map(({ text, path }) => <Link to={path} key={path}>{text}</Link>)}
    </StyledNavbar>
  );
};

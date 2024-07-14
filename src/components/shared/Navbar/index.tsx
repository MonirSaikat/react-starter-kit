import { Link } from "react-router-dom";
import { StyledNavbar } from "./Navbar.styled";
import React from "react";

interface INavbar {
  links: {
    text: string;
    path: string;
  }[]
}

export const Navbar: React.FC<INavbar> = ({ links = [] }) => {
  return (
    <StyledNavbar>
      {links.map(({ text, path }) => <Link to={path} key={path}>{text}</Link>)}
    </StyledNavbar>
  );
};

import styled from "@emotion/styled";
import { Navbar } from "react-bootstrap";

export const StyledNavbar = styled(Navbar)`
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  background-color: ${props => props.theme.color.dark};

  a {
    text-decoration: none;
    color: ${props => props.theme.color.light};
    font-weight: 700;
  }
`;

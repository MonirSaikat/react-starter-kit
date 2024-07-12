import styled from "@emotion/styled";

export const StyledNavbar = styled.nav`
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    color: ${props => props.theme.dark};
    font-weight: 700;
  }
`;

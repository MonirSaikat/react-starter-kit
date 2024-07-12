import styled from "@emotion/styled";

export const StyledNavbar = styled.nav`
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  background-color: ${props => props.theme.color.secondary};

  a {
    text-decoration: none;
    color: ${props => props.theme.color.light};
    font-weight: 700;
  }
`;

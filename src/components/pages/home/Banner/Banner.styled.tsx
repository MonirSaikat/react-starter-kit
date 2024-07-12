import styled from "@emotion/styled";

export const StyledBanner = styled.div`
  background: ${props => props.theme.color.primary};
  padding: 1rem;
  text-align: center;

  h1 {
    font-size: 4rem;
  }
`;

import { StyledFooter } from "./Footer.styled";

export const Footer = () => {
  return(
    <StyledFooter>
      <p>Footer &copy; {(new Date()).getFullYear()} | Lorem ipsum dolor sit amet.</p>
    </StyledFooter>
  );
}
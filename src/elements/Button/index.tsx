import React from "react";
import { StyledButton } from "./Button.styled";

export const Button: React.FC = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>{children}</StyledButton>
  );
}
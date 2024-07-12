import React from "react";
import { StyledButton } from "./Button.styled";

export const Button: React.FC = ({ children }) => {
  return (
    <StyledButton>{children}</StyledButton>
  );
}
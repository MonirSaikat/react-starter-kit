import React from "react";
import { StyledButton } from "./Button.styled";
import { ButtonProps } from "react-bootstrap";

export interface IButton extends React.ComponentProps<'button'>, ButtonProps {
  variant: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "warning" | "light" | "dark" | "link";
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<IButton> = (
  { icon, children, ...props }) => {
  return (
    <StyledButton icon={icon} {...props}>
      {icon && <span className="icon">{icon}</span>}
      {children}
    </StyledButton>
  );
}
import React from "react";
import { StyledButton } from "./Button.styled";
import { ButtonProps } from "react-bootstrap";
import { Spinner } from "@elements/Spinner";

export interface IButton extends React.ComponentProps<'button'>, ButtonProps {
  variant: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "warning" | "light" | "dark" | "link";
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean | string;
}

export const Button: React.FC<IButton> = (
  { loading = false, icon, children, ...props }) => {

  const nonLoadingContent = <>
    {icon && <span className="icon">{icon}</span>}
    {children}
  </>;

  return (
    <StyledButton icon={(!!icon).toString()} loading={(!!loading).toString()} {...props}>
      {loading ? <Spinner size={props.size} /> : nonLoadingContent}

    </StyledButton>
  );
}
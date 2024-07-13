import React from "react";
import { StyledInput, StyledInputContainer } from "./Input.styled";

interface IInput {
  icon?: React.FC;
  iconPosition: 'left' | 'right';
}

export const Input = ({ iconPosition = 'right', ...rest }: IInput) => {
  const { icon } = rest;

  if (!icon) return <StyledInput {...rest} />;

  return (
    <StyledInputContainer iconPosition={iconPosition}>
      <div className="icon">{icon}</div>
      <StyledInput {...rest} />
    </StyledInputContainer>
  );
}
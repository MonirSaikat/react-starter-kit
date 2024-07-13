import React, { ReactNode } from "react";
import { StyledInput, StyledInputContainer } from "./Input.styled";

interface IInput extends Partial<React.ComponentProps<'input'>> {
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Input: React.FC<IInput> = ({ icon, iconPosition = 'right', ...otherProps }) => {
  return icon ? (
    <StyledInputContainer iconPosition={iconPosition}>
      <div className="icon">{icon}</div>
      <StyledInput {...otherProps} />
    </StyledInputContainer>
  ) : (
    <StyledInput {...otherProps} />
  );
};

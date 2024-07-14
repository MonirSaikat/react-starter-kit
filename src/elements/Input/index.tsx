import React, { ReactNode } from "react";
import { StyledInput, StyledInputContainer } from "./Input.styled";
import { Form } from "react-bootstrap";
import { Label } from "@elements/Label";

interface IInput extends Omit<Partial<React.ComponentProps<'input'>>, 'size'> {
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  size?: 'lg' | 'sm' | undefined;
  value?: string | undefined | string[];
  label?: string;
}

export const Input: React.FC<IInput> = ({ label, icon, iconPosition = 'right', size, ...otherProps }) => {
  const styledInput = <StyledInput size={size} {...otherProps} />;

  const styledContainer = (
    <StyledInputContainer iconPosition={iconPosition}>
      <div className="icon">{icon}</div>
      {styledInput}
    </StyledInputContainer>
  );

  if (label) {
    return (
      <Form.Group controlId={ Math.random().toString(36) }>
        <Label>{ label }</Label>
        { icon ? styledContainer : styledInput }
      </Form.Group>
    );
  }

  return icon ? styledContainer : styledInput;
};

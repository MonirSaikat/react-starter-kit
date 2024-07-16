import React, { ReactNode } from "react";
import { StyledChecked, StyledInput, StyledInputContainer } from "./Input.styled";
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

  if (['checkbox', 'radio', 'switch'].includes(otherProps.type as string)) {
    return (
      <StyledChecked
        type={otherProps || 'radio'}
        label={label}
        id={Math.random().toString(36)}
        {...otherProps}
      />
    );
  }

  const styledContainer = (
    <StyledInputContainer iconPosition={iconPosition}>
      <div className="icon">{icon}</div>
      {styledInput}
    </StyledInputContainer>
  );

  if (label) {
    return (
      <Form.Group controlId={Math.random().toString(36)}>
        <Label>{label}</Label>
        {icon ? styledContainer : styledInput}
      </Form.Group>
    );
  }

  return icon ? styledContainer : styledInput;
};

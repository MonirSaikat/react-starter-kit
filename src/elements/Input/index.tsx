import { StyledInput, StyledInputContainer } from "./Input.styled";

export const Input = ({ iconPosition = 'right', ...rest }) => {
  const { icon } = rest;

  if (!icon) return <StyledInput {...rest} />;

  return (
    <StyledInputContainer iconPosition={iconPosition}>
      <div className="icon">{icon}</div>
      <StyledInput {...rest} />
    </StyledInputContainer>
  );
}
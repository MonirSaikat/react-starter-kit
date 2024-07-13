import styled from "@emotion/styled";
import { darken } from "polished";
import { Button } from "react-bootstrap";

export const StyledButton = styled(Button)`
  border-radius: 4px;
  font-size: 14px;
  box-shadow: 0 0 0;
  border: 0;
  background-color: ${props => props.theme.color[props.variant || 'primary']};

  &:hover, &:focus, &:active {
    background-color: ${props => darken(0.1, props.theme.color[props.variant == 'link' ? 'primary' : props.variant])} !important;
  }
`;
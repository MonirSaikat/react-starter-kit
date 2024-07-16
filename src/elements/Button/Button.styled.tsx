import styled from "@emotion/styled";
import { darken } from "polished";
import { Button } from "react-bootstrap";
import { IButton } from ".";

export const StyledButton = styled(Button) <IButton>`
  border-radius: 4px;
  font-size: 14px;
  box-shadow: 0 0 0;
  border: 0;
  background-color: ${props => props.theme.color[props.variant || 'primary']};
  position: relative;
  --gapping: 10px;

  ${({ icon, iconPosition, loading }) =>
    (icon == 'true' && loading != 'true')
      ? iconPosition === 'right'
        ? 'padding-right: calc(var(--gapping) * 3);'
        : 'padding-left: calc(var(--gapping) * 3);'
      : ''
  }
  
  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${({ iconPosition }) => iconPosition == 'right' ? 'right: var(--gapping);' : 'left: var(--gapping);'}
  }

  &:hover, &:focus, &:active {
    background-color: ${props => darken(0.1, props.theme.color[props.variant == 'link' ? 'primary' : props.variant])} !important;
  }
`;
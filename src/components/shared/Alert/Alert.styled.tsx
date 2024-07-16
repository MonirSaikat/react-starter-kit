import styled from "@emotion/styled";
import { lighten } from "polished";
import { Alert } from "react-bootstrap";

export const StyledAlert = styled(Alert)` 
  border-radius:0;
  border: 0;
  padding: 8px 10px;
  background-color: ${props => props.theme.color[props.variant || 'primary']};
  color: ${props => lighten('0.8', props.theme.color[props.variant || 'primary'])};
  display: flex;
  justify-content: space-between;

  .btn-close {
    display: none;
  }

  /* custom one */
  .alert-btn-close {
    color: white;
    cursor: pointer;
  }
`;
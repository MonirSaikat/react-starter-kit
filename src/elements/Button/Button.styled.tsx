import styled from "@emotion/styled";
import { Button } from "react-bootstrap";

export const StyledButton = styled(Button)`
  border-radius: 0;
  box-shadow: 0 0 0;
  border: 0;
  background-color: ${props => props.theme.color.secondary};
`;
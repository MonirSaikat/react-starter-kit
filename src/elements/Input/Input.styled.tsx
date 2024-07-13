import styled from "@emotion/styled";
import { FormControl } from 'react-bootstrap';

export const StyledInput = styled(FormControl)`
  border-radius: 0px;
  box-shadow: 0 0 0;
  border-radius: 5px;
  border: 1px solid #a5a5a5;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  
  &:focus {
    border: 1px solid ${props => props.theme.color.primary};
    box-shadow: 0 0 0;
  }
`;
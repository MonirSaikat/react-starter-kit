import styled from "@emotion/styled";
import { FormCheck, FormControl, FormControlProps } from 'react-bootstrap';

interface StyledInputContainerProps {
  iconPosition: 'left' | 'right';
}

export const StyledChecked = styled( FormCheck)`

[type=${(props) => props.type}] {
    accent-color: ${props => props.theme.color.primary} !important;
    background-color: ${props => props.theme.color.primary} !important;
    color: ${props => props.theme.color.primary} !important;
    box-shadow: 0 0 0;
  }
  /* input[type="checkbox"] {
    accent-color: ${props => props.theme.color.primary};
  } */
`;

export const StyledInputContainer = styled.div<StyledInputContainerProps>`
  position: relative;
  display: flex;

  .icon {
    position: absolute;
    ${({ iconPosition }) => iconPosition === 'left' ? 'left: 10px;' : 'right: 10px;'}
    top: 50%;
    transform: translateY(-50%);
  }

  input {
    padding-left: ${({ iconPosition }) => iconPosition === 'left' ? '2rem' : '1rem'};
    padding-right: ${({ iconPosition }) => iconPosition === 'right' ? '2rem' : '1rem'};
  }
`;

export const StyledInput = styled(FormControl) <FormControlProps>`
  border-radius: 0px;
  box-shadow: 0 0 0;
  border-radius: 6px;
  border: 1px solid #a5a5a5;
  padding: ${props => props.size == 'sm' ? '0.3rem 0.8rem' : '0.5rem 1rem'};
  font-size: 0.8rem;

  &:focus {
    border: 1px solid ${props => props.theme.color.primary};
    box-shadow: 0 0 0;
  }
`;
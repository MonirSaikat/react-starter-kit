import { useState } from "react";
import { StyledAlert } from "./Alert.styled";
import { Icon } from '@iconify/react';

export const Alert = ({ children, ...props }) => {
  const [show, setShow] = useState(true);
  
  const _toggleClick = () => setShow(!show);
  
  return (
    <StyledAlert show={show} {...props}>
      {children}

      { props.dismissible && <span className="alert-btn-close" onClick={_toggleClick}>
        <Icon icon="bitcoin-icons:cross-filled" />
      </span> }
    </StyledAlert>
  );
}
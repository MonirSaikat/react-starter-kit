import { StyledText } from "./Text.styled";

export const Text = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};

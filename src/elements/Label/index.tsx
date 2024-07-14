import { StyledLabel } from "./Label.styled";

interface ILabel extends React.ComponentProps<'label'> {}

export const Label: React.FC<ILabel> = ({ children }) => {
  return (
    <StyledLabel>
      {children}
    </StyledLabel>
  );
}
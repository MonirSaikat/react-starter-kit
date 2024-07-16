import styled from "@emotion/styled";
import { FormLabel } from "react-bootstrap";

export const StyledLabel = styled(FormLabel)`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 5px;
`;
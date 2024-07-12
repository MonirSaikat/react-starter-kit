import styled from "@emotion/styled";

export const StyledText = styled.p<{ heading?: boolean }>`
  font-size: ${(props) => (props.heading ? "4rem" : "1rem")};
  color: #000000;
`;

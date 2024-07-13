/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";

const styles = css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Inter", sans-serif;
    background-color: #f5f5f5;
  }
`;

const GlobalStyles = () => <Global styles={styles} />;

export default GlobalStyles;

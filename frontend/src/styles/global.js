import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #D4D7DF;
    font: 14px 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }

  a {
    text-decoration: none;
  }
`;

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  h1,h2,h3,h4,h5{
    padding: 0;
    margin: 0;
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    transition: all 0.25s linear;
  }
  .button-dark-light, .button-dark-light a:focus{
    color:  ${({ theme }) => theme.text} !important;
  }
`;
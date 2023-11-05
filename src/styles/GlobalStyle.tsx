import '@fontsource/noto-sans/400.css';
import '@fontsource/noto-sans/500.css';
import '@fontsource/noto-sans/700.css';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html,
  body,
  #root {
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.color.gray[900]};
    color: ${({ theme }) => theme.color.gray[900]};
    font-family: 'Noto Sans', sans-serif;
    font-weight: ${({ theme }) => theme.typography.weight.regular};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, textarea { 
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }

  input:focus {
    outline: none;
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  #root {
    display: flex;
    width: 100%;
    height: 100%;

    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, html {
    margin: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
    min-height: 100vh;
  }
`;

export default GlobalStyle;

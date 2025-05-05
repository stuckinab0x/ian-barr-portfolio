import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    font-family: Urbanist, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, html {
    display: flex;
    flex-direction: column;
    margin: 0;
    -webkit-tap-highlight-color: transparent;
  }
`;

export default GlobalStyle;

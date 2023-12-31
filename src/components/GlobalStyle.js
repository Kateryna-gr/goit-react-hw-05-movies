import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    color: #212121;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  header {
    position: sticky;
    top: 0;
    background-color: #f5edf5;
    box-shadow: 0px 2px 8px #75659a;
  }

  h2, h4 {
    color: #7c5979;
  }
`;

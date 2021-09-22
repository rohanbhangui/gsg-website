import { createGlobalStyle } from 'styled-components';
import Typography from './typography';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
  }

  html {
    font-size: calc(60% + 0.8vmin);
  }

  body {
    background: linear-gradient(to bottom, rgba(136, 136, 136, 0), rgba(0, 0, 0, 0.73));
    background-size: cover;
    background-repeat: no-repeat;
  }

  #root {
    width: 100%;
  }

  * {
    font-size: 1rem;
    font-family: 'Manrope', sans-serif;
  }

  ${Typography}

  @-webkit-keyframes marquee {
    0% {transform: translateX(0%);}
    100% {transform: translateX(-50%);}
  }
`;
 
export default GlobalStyle;
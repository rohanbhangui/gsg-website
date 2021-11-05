import { createGlobalStyle } from "styled-components";
import Typography from "./typography";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;

    &.mobile-open {
      overflow: hidden;
      pointer-events: none;
    }
  }

  html {
    font-size: calc(60% + 0.8vmin);

    &.smooth-scroll {
      scroll-behavior: smooth;
    }
  }

  body {
    background: #f0f0f0;
  }

  #root {
    width: 100%;
  }

  * {
    font-size: 1rem;
    font-family: 'Manrope', sans-serif;
  }

  /* reset index.css */
  a {
    margin: 0;
  }

  ${Typography}

  @-webkit-keyframes marquee {
    0% {transform: translateX(0%);}
    100% {transform: translateX(-50%);}
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';
import Typography from './typography';

import Speckles from "../img/speckles.png";

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
    // background-image:url('${Speckles}');
    // background-repeat: no-repeat;
    // background-size: auto 150vh;
    // background-attachment: fixed;
    // background-position: center var(--background-position);

    // @media ${({ theme }) => theme.mediaQuery.medium} {
    //   background-size: auto 150vh;
    // }
  }

  body {
    background: linear-gradient(to bottom, rgba(136, 136, 136, 0), rgba(0, 0, 0, 0.73));
    background-size: cover;
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
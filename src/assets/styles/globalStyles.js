import { createGlobalStyle } from 'styled-components';
import Typography from './typography';

import Speckles from "../img/speckles.png";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    min-height: 100%;
    height: 100%;
  }

  html {
    font-size: calc(60% + 0.8vmin);
    overflow-x: hidden;
    background-image:url('${Speckles}');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }

  body {
    background: linear-gradient(to bottom, rgba(136, 136, 136, 0), rgba(0, 0, 0, 0.73));
  }

  * {
    font-size: 1rem;
    font-family: 'Manrope', sans-serif;
  }

  ${Typography}
`;
 
export default GlobalStyle;
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'SUIT-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

* {
    box-sizing: border-box; 
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'SUIT-Regular', Arial, sans-serif;
    background-color: #f4f4f4;
  }
`;
export default GlobalStyle;

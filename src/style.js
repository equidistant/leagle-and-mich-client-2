import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro|Source+Serif+Pro|Bubbler+One|Nothing+You+Could+Do|Open+Sans:700|Playfair+Display');
  html, body, #root {
    height: 100%;
  }
  html {
    font-size: 62.5%;
  }
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  body {
    box-sizing: border-box;
    font-family: 'Roboto', 'Source Serif Pro','Source Code Pro', monospace;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: .2rem;
    // background: #2B2B2B;
    background: #F8F9FA;
  }
`

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro|Source+Serif+Pro|Bubbler+One|Nothing+You+Could+Do|Open+Sans:700|Playfair+Display|Work+Sans|Maple');
  html, body, #root {
    height: 100%;
  }
  html {
    font-size: 62.5%;
    @media only screen and (max-width: 1000px) {
      font-size: 50%;
    }
    @media only screen and (max-width: 600px) {
      font-size: 40%;
    }
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

// @media only screen and (max-width: 1200px) {
//   font-size: 50%;
// }
// @media only screen and (max-width: 950px) {
//   font-size: 40%;
// }

export const Theme = {
  blogs: {
    biggest: {
      margin: 5
    },
    big: {
      width: 100,
      padding: 1.5,
      margin: 2.5,
      unit: 'rem'
    },
    medium: {
      width: 80,
      padding: 1,
      margin: 2,
      unit: 'rem'
    },
    small: {
      width: 90,
      padding: 0.5,
      margin: 1,
      unit: 'vw'
    }
  }
}

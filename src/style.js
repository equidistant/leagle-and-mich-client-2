import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro|Source+Serif+Pro|Bubbler+One|Nothing+You+Could+Do|Open+Sans:700|Playfair+Display|Work+Sans|Maple');
  html, body, #root {
    height: 100%;
  }
  html {
    font-size: 62.5%;
    @media only screen and (max-width: 1300px) {
      font-size: 56.25%;
    }
    @media only screen and (max-width: 700px) {
      font-size: 50%;
    }
    @media only screen and (max-width: 340px) {
      font-size: 45%;
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

const general = {
  header: {
    logo: {
      width: 15 // rem
    },
    hamburger: {
      span :{
        width: 7.5, // rem
        height: 0.6 // rem
      },
      width: 12 // rem
    },
    height: 12, // rem
    fontSize: 2.5, // rem
    letterSpacing: 0.3 // rem
  }
}

export const Theme = {
  header: {
    big: {
      logo: {
        width: `${general.header.logo.width}rem`
      },
      hamburger: {
        span :{
          width: `${general.header.hamburger.span.width}rem`,
          height: `${general.header.hamburger.span.height}rem`
        },
        width: `${general.header.hamburger.width}rem`,
      },
      width: `${general.header.height}rem`,
      fontSize: `${general.header.fontSize}rem`,
      letterSpacing: `${general.header.letterSpacing}rem`,
    },
    medium: {
      logo: {
        width: `${general.header.logo.width * 0.8}rem`
      },
      hamburger: {
        span :{
          width: `${general.header.hamburger.span.width * 0.8}rem`,
          height: `${general.header.hamburger.span.height * 0.8}rem`
        },
        width: `${general.header.hamburger.width * 0.8}rem`,
      },
      height: `${general.header.height * 0.8}rem`,
      fontSize: `${general.header.fontSize * 0.75}rem`,
      letterSpacing: `${general.header.letterSpacing * 0.75}rem`,
    },
    small: {
      logo: {
        width: `${general.header.logo.width * 0.6}rem`
      },
      hamburger: {
        span :{
          width: `${general.header.hamburger.span.width * 0.6}rem`,
          height: `${general.header.hamburger.span.height * 0.6}rem`
        },
        width: `${general.header.hamburger.width * 0.6}rem`,
      },
      height: `${general.header.height * 0.6}rem`,
      fontSize: `${general.header.fontSize * 0.6}rem`,
      letterSpacing: `${general.header.letterSpacing * 0.5}rem`,
    }
  }
}

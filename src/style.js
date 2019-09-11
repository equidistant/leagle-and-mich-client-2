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
    overflow-x: hidden;
  }
`

// @media only screen and (max-width: 1000px) {
//   font-size: 50%;
// }
// @media only screen and (max-width: 600px) {
//   font-size: 40%;
// }


// @media only screen and (max-width: 1200px) {
//   font-size: 50%;
// }
// @media only screen and (max-width: 950px) {
//   font-size: 40%;
// }

const general = {
  main: {
    marginVertical: 5 // rem
  },
  header1: {
    fontSize: 5, //rem
    letterSpacing: 0.5, //rem
  },
  header2: {
    fontSize: 3.5, //rem
    letterSpacing: 0.4, //rem
  },
  header3: {
    fontSize: 2.5, //rem
    letterSpacing: 0.3, //rem
  },
  fontSize: 2, // rem
  letterSpacing: 0.2, //rem
  padding: 2,
  margin: 2 //rem,
}

export const Theme = {
  blogs: {
    big: {
      // main
      main: {
        width: '100rem',
        marginVertical: `${general.main.marginVertical}rem`
      },
      header1: {
        fontSize: `${general.header1.fontSize}rem`,
        letterSpacing: `${general.header1.letterSpacing}rem`,
      },
      header2: {
        fontSize: `${general.header2.fontSize}rem`,
        letterSpacing: `${general.header2.letterSpacing}rem`,
      },
      header3: {
        fontSize: `${general.header3.fontSize}rem`,
        letterSpacing: `${general.header3.letterSpacing}rem`,
      },
      fontSize: `${general.fontSize}rem`,
      letterSpacing: `${general.letterSpacing}rem`,
      padding: `${general.padding}rem`,
      margin: `${general.margin}rem`,
    },
    medium: {
      main: {
        width: '80rem',
        marginVertical: `${general.main.marginVertical * 0.85}rem`
      },
      header1: {
        fontSize: `${general.header1.fontSize * 0.85}rem`,
        letterSpacing: `${general.header1.letterSpacing * 0.85}rem`,
      },
      header2: {
        fontSize: `${general.header2.fontSize * 0.85}rem`,
        letterSpacing: `${general.header2.letterSpacing * 0.85}rem`,
      },
      header3: {
        fontSize: `${general.header3.fontSize * 0.85}rem`,
        letterSpacing: `${general.header3.letterSpacing * 0.85}rem`,
      },
      fontSize: `${general.fontSize * 0.85}rem`,
      letterSpacing: `${general.letterSpacing * 0.85}rem`,
      padding: `${general.padding * 0.85}rem`,
      margin: `${general.margin * 0.85}rem`,
    },
    small: {
      main: {
        width: '100%',
        marginVertical: 0
      },
      header1: {
        fontSize: `${general.header1.fontSize * 0.65}rem`,
        letterSpacing: `${general.header1.letterSpacing * 0.65}rem`,
      },
      header2: {
        fontSize: `${general.header2.fontSize * 0.65}rem`,
        letterSpacing: `${general.header2.letterSpacing * 0.65}rem`,
      },
      header3: {
        fontSize: `${general.header3.fontSize * 0.65}rem`,
        letterSpacing: `${general.header3.letterSpacing * 0.65}rem`,
      },
      fontSize: `${general.fontSize * 0.85}rem`,
      letterSpacing: `${general.letterSpacing * 0.65}rem`,
      padding: `${general.padding * 0.65}rem`,
      margin: `${general.margin * 0.65}rem`
    }
  }
}

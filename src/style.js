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
  },
  blogs: {
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
    imgOverlay: {
      padding: 0.5, // rem
      fontSize: 2, // rem,
      letterSpacing: 0.2 //rem
    },
    starBullet: {
      width: 3.5,
      height: 3.5,
      margin: 1
    },
    fontSize: 2, // rem
    letterSpacing: 0.2, //rem
    padding: 2,
    margin: 2 //rem,
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
      fontSize: `${general.header.fontSize * 0.5}rem`,
      letterSpacing: `${general.header.letterSpacing * 0.5}rem`,
    }
  },
  blogs: {
    big: {
      // main
      main: {
        width: '100rem',
        marginVertical: `${general.blogs.main.marginVertical}rem`
      },
      header1: {
        fontSize: `${general.blogs.header1.fontSize}rem`,
        letterSpacing: `${general.blogs.header1.letterSpacing}rem`,
      },
      header2: {
        fontSize: `${general.blogs.header2.fontSize}rem`,
        letterSpacing: `${general.blogs.header2.letterSpacing}rem`,
      },
      header3: {
        fontSize: `${general.blogs.header3.fontSize}rem`,
        letterSpacing: `${general.blogs.header3.letterSpacing}rem`,
      },
      imgOverlay: {
        fontSize: `${general.blogs.imgOverlay.fontSize}rem`,
        letterSpacing: `${general.blogs.imgOverlay.letterSpacing}rem`,
        padding:  `${general.blogs.imgOverlay.padding}rem`, // rem
      },
      starBullet: {
        width: `${general.blogs.starBullet.width}rem`,
        height: `${general.blogs.starBullet.height}rem`,
        margin: `${general.blogs.starBullet.margin}rem`
      },
      fontSize: `${general.blogs.fontSize}rem`,
      letterSpacing: `${general.blogs.letterSpacing}rem`,
      padding: `${general.blogs.padding}rem`,
      margin: `${general.blogs.margin}rem`,
    },
    medium: {
      main: {
        width: '80rem',
        marginVertical: `${general.blogs.main.marginVertical * 0.85}rem`
      },
      header1: {
        fontSize: `${general.blogs.header1.fontSize * 0.85}rem`,
        letterSpacing: `${general.blogs.header1.letterSpacing * 0.85}rem`,
      },
      header2: {
        fontSize: `${general.blogs.header2.fontSize * 0.85}rem`,
        letterSpacing: `${general.blogs.header2.letterSpacing * 0.85}rem`,
      },
      header3: {
        fontSize: `${general.blogs.header3.fontSize * 0.85}rem`,
        letterSpacing: `${general.blogs.header3.letterSpacing * 0.85}rem`,
      },
      imgOverlay: {
        fontSize: `${general.blogs.imgOverlay.fontSize * 0.75}rem`,
        letterSpacing: `${general.blogs.imgOverlay.letterSpacing * 0.75}rem`,
        padding:  `${general.blogs.imgOverlay.padding * 0.75}rem`, // rem
      },
      starBullet: {
        width: `${general.blogs.starBullet.width * 0.75}rem`,
        height: `${general.blogs.starBullet.height * 0.75}rem`,
        margin: `${general.blogs.starBullet.margin * 0.75}rem`
      },
      fontSize: `${general.blogs.fontSize * 0.85}rem`,
      letterSpacing: `${general.blogs.letterSpacing * 0.85}rem`,
      padding: `${general.blogs.padding * 0.85}rem`,
      margin: `${general.blogs.margin * 0.85}rem`,
    },
    small: {
      main: {
        width: '100%',
        marginVertical: 0
      },
      header1: {
        fontSize: `${general.blogs.header1.fontSize * 0.65}rem`,
        letterSpacing: `${general.blogs.header1.letterSpacing * 0.65}rem`,
      },
      header2: {
        fontSize: `${general.blogs.header2.fontSize * 0.65}rem`,
        letterSpacing: `${general.blogs.header2.letterSpacing * 0.65}rem`,
      },
      header3: {
        fontSize: `${general.blogs.header3.fontSize * 0.5}rem`,
        letterSpacing: `${general.blogs.header3.letterSpacing * 0.5}rem`,
      },
      imgOverlay: {
        fontSize: `${general.blogs.imgOverlay.fontSize * 0.5}rem`,
        letterSpacing: `${general.blogs.imgOverlay.letterSpacing * 0.5}rem`,
        padding:  `${general.blogs.imgOverlay.padding * 0.5}rem`, // rem
      },
      starBullet: {
        width: `${general.blogs.starBullet.width * 0.6}rem`,
        height: `${general.blogs.starBullet.height * 0.6}rem`,
        margin: `${general.blogs.starBullet.margin * 0.5}rem`
      },
      fontSize: `${general.blogs.fontSize * 0.85}rem`,
      letterSpacing: `${general.blogs.letterSpacing * 0.65}rem`,
      padding: `${general.blogs.padding * 0.65}rem`,
      margin: `${general.blogs.margin * 0.65}rem`
    }
  }
}

const big = {
  header1: {
    fontSize: 6, //rem
    letterSpacing: 0.5,
  },
  header2: {
    fontSize: 2.8, //rem
    letterSpacing: 0.2, //rem
  },
  header3: {
    fontSize: 1.6, //rem
    letterSpacing: 0.1, //rem
    lineHeight: 2
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
  paddingSmall: 1,
  paddingBig: 2,
  marginSmall: 2.5, //rem,
  marginBig: 5, //rem,
  fontSize: 2.4, // rem
  letterSpacing: 0.2 //rem
}

const theme = {
  big: {
    width: '100rem',
    header1: {
      fontSize: `${big.header1.fontSize}rem`,
      letterSpacing: `${big.header1.letterSpacing}rem`,
    },
    header2: {
      fontSize: `${big.header2.fontSize}rem`,
      letterSpacing: `${big.header2.letterSpacing}rem`,
    },
    header3: {
      fontSize: `${big.header3.fontSize}rem`,
      letterSpacing: `${big.header3.letterSpacing}rem`,
      lineHeight: `${big.header3.lineHeight}rem`,
    },
    imgOverlay: {
      fontSize: `${big.imgOverlay.fontSize}rem`,
      letterSpacing: `${big.imgOverlay.letterSpacing}rem`,
      padding:  `${big.imgOverlay.padding}rem`, // rem
    },
    starBullet: {
      width: `${big.starBullet.width}rem`,
      height: `${big.starBullet.height}rem`
    },
    fontSize: `${big.fontSize}rem`, // rem
    letterSpacing: `${big.letterSpacing}rem`, //rem
    paddingSmall: `${big.paddingSmall}rem`,
    paddingBig: `${big.paddingBig}rem`,
    marginSmall: `${big.marginSmall}rem`,
    marginBig: `${big.marginBig}rem`
  },
  medium: {
    width: '80rem',
    header1: {
      fontSize: `${big.header1.fontSize * 0.85}rem`,
    },
    header2: {
      fontSize: `${big.header2.fontSize * 0.8}rem`,
      letterSpacing: `${big.header2.letterSpacing * 0.8}rem`,
    },
    header3: {
      fontSize: `${big.header3.fontSize * 0.9}rem`,
      letterSpacing: `${big.header3.letterSpacing * 0.9}rem`,
      lineHeight: `${big.header3.lineHeight* 0.9}rem`,
    },
    imgOverlay: {
      fontSize: `${big.imgOverlay.fontSize * 0.75}rem`,
      letterSpacing: `${big.imgOverlay.letterSpacing * 0.75}rem`,
      padding:  `${big.imgOverlay.padding * 0.75}rem`, // rem
    },
    starBullet: {
      width: `${big.starBullet.width * 0.75}rem`,
      height: `${big.starBullet.height * 0.75}rem`,
    },
    fontSize: `${big.fontSize * 0.8}rem`, // rem
    letterSpacing: `${big.letterSpacing * 0.8}rem`,
    paddingSmall: `${big.paddingSmall * 0.75}rem`,
    paddingBig: `${big.paddingBig * 0.75}rem`,
    marginSmall: `${big.marginSmall * 0.75}rem`,
    marginBig: `${big.marginBig * 0.75}rem`,
  },
  small: {
    width: '100%',
    header1: {
      fontSize: `${big.header1.fontSize * 0.65}rem`,
      letterSpacing: `${big.header1.letterSpacing * 0.65}rem`,
    },
    header2: {
      fontSize: `${big.header2.fontSize * 0.8}rem`,
      letterSpacing: `${big.header2.letterSpacing * 0.8}rem`,
    },
    header3: {
      fontSize: `${big.header3.fontSize * 0.8}rem`,
      letterSpacing: `${big.header3.letterSpacing * 0.8}rem`,
      lineHeight: `${big.header3.lineHeight* 0.8}rem`,
    },
    imgOverlay: {
      fontSize: `${big.imgOverlay.fontSize * 0.5}rem`,
      letterSpacing: `${big.imgOverlay.letterSpacing * 0.5}rem`,
      padding:  `${big.imgOverlay.padding * 0.5}rem`, // rem
    },
    starBullet: {
      width: `${big.starBullet.width * 0.6}rem`,
      height: `${big.starBullet.height * 0.6}rem`,
    },
    fontSize: `${big.fontSize * 0.8}rem`, // rem
    letterSpacing: `${big.letterSpacing * 0.8}rem`,
    paddingSmall: `${big.paddingSmall * 0.5}rem`,
    paddingBig: `${big.paddingBig * 0.5}rem`,
    marginSmall: `${big.marginSmall * 0.5}rem`,
    marginBig: `${big.marginBig * 0.5}rem`,
  },
}

export default theme

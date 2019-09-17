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
  paddingSmall: 1,
  paddingBig: 2,
  marginSmall: 2.5, //rem,
  marginBig: 5 //rem,
}

const theme = {
  big: {
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
    paddingSmall: `${big.paddingSmall}rem`,
    paddingBig: `${big.paddingBig}rem`,
    marginSmall: `${big.marginSmall}rem`,
    marginBig: `${big.marginBig}rem`
  },
  medium: {
    header1: {
      fontSize: `${big.header1.fontSize * 0.85}rem`,
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
    paddingSmall: `${big.paddingSmall * 0.75}rem`,
    paddingBig: `${big.paddingBig * 0.75}rem`,
    marginSmall: `${big.marginSmall * 0.75}rem`,
    marginBig: `${big.marginBig * 0.75}rem`,
  },
  small: {
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
    paddingSmall: `${big.paddingSmall * 0.5}rem`,
    paddingBig: `${big.paddingBig * 0.5}rem`,
    marginSmall: `${big.marginSmall * 0.5}rem`,
    marginBig: `${big.marginBig * 0.5}rem`,
  },
}

export default theme

import React, { useRef } from 'react'
import styled, { css } from 'styled-components'
import { withRouter } from 'react-router-dom'

import { useIntersection, useWindowWidth, useTheme2 } from '../../../effects'
import { Map, Bed, SlideshowImages } from '../../../images'
import { slideUp, slideRightFixed, slideLeftFixed, slideUpLittle } from '../../../animations'
import themeSizes from '../theme'

const Blogs = ({ history }) => {
  const [theme] = useTheme2({ theme: themeSizes, boundaries: [800, 1100]})
  let refs = []
  const index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  const [visible] = useIntersection({ elements: refs, threshold: 0.2 })
  const [{ windowWidth, small }] = useWindowWidth(800)
  return (
    <Container {...theme}>
      <Header1 {...theme}>Travel Blogs</Header1>
      <CardGrid {...theme}>
        <Card ref={ref => refs.push(ref)} visible={visible[0]} id={index[0]} onClick={e => to({ history, url: '/blogs/soca'})}>
          <Img img={SlideshowImages[7]}/>
          <Header2 {...theme}>Soča Valley</Header2>
          <Line {...theme}/>
          <Text {...theme}>Soča, Slovenia</Text>
          <Tags {...theme}>#roadtrip #camping #river #kayak #rafting #sup</Tags>
        </Card>
        <Card ref={ref => refs.push(ref)} visible={visible[1]} id={index[1]}>
          <Img img={SlideshowImages[6]}/>
          <Header2 {...theme}>Cuba</Header2>
          <Line {...theme}/>
          <Text {...theme}>Havana, Trinidad, Vinales</Text>
          <Tags {...theme}>#sea #sun #salsa #beach #cubalibre #mojito</Tags>
        </Card>
        <Card ref={ref => refs.push(ref)} visible={visible[2]} id={index[2]}>
          <Img img={SlideshowImages[5]}/>
          <Header2 {...theme}>Krupa Canyon</Header2>
          <Line {...theme}/>
          <Text {...theme}>Krupa, Croatia</Text>
          <Tags {...theme}>#hike #river #canyon #whitewater #camping</Tags>
        </Card>
        <Card ref={ref => refs.push(ref)} visible={visible[3]} id={index[3]}>
          <Img img={SlideshowImages[0]}/>
          <Header2 {...theme}>London</Header2>
          <Line {...theme}/>
          <Text {...theme}>London, England</Text>
          <Tags {...theme}>#urban #rooftops #gin&tonic #rain #parks</Tags>
        </Card>
        { !small &&
          <>
            <Card ref={ref => refs.push(ref)} visible={visible[4]} id={index[4]}>
              <Img img={SlideshowImages[4]}/>
              <Header2 {...theme}>Soca Valley</Header2>
              <Line {...theme}/>
              <Text {...theme}>Soca, Slovenia</Text>
              <Tags {...theme}>#roadtrip #camping #river #kayak #rafting #sup</Tags>
            </Card>
            <Card ref={ref => refs.push(ref)} visible={visible[5]} id={index[5]}>
              <Img img={SlideshowImages[2]}/>
              <Header2 {...theme}>Cuba</Header2>
              <Line {...theme}/>
              <Text {...theme}>Havana, Trinidad, Vinales</Text>
              <Tags {...theme}>#sea #sun #salsa #beach #cubalibre #mojito</Tags>
            </Card>
          </>
        }
      </CardGrid>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-rows: min-content min-content;
  justify-items: center;
  align-items: center;
  color: #303336;
  width: 100%;
  background-image: linear-gradient(-45deg, #EEF0F3 0%, #F6F5F3 100%);
  padding: ${props => props.paddingBig};
`

// background-image: linear-gradient(-45deg, #EEF0F3 0%, #F6F5F3 100%);

const Header1 = styled.div(({ header1: { fontSize, letterSpacing }, marginBig, paddingBig }) => `
  font-size: ${fontSize};
  letter-spacing: ${letterSpacing};
  margin-top: ${marginBig};
  padding: ${paddingBig};

  line-height: 1.2;
  font-family: 'Playfair Display';
  width: 90%;
  text-align: center;
`)

const Header2 = styled.div(({ header2: { fontSize, letterSpacing }, marginSmall, paddingBig }) => `
  margin-top: ${marginSmall};
  font-size: ${fontSize};
  letter-spacing: ${letterSpacing};
  color: #303336;
  font-family: 'Playfair Display';
  padding: ${paddingBig};
`)

// const Header3 = styled.div(({ header3: { fontSize, letterSpacing }, paddingBig}) => `
//   font-size: ${fontSize};
//   letter-spacing: ${letterSpacing};
//   color: #A0A6AB;
//   text-transform: uppercase;
//   font-family: 'Open Sans';
//   font-weight: 700;
// `)

const CardGrid = styled.div(({ paddingBig, marginBig }) => `
  padding: ${paddingBig};
  margin-top: ${marginBig};
  grid-row: 2 / 3;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(27.5rem, 1fr));
  grid-auto-rows: minmax(15rem, auto);
  grid-gap: 5vw;
`)

const Img = styled.img.attrs(props => ({
  src: props.img.src
  }))`
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`
// width: 100%;
const Text = styled.p(({ header3: { fontSize, letterSpacing }, paddingSmall }) => `
  text-align: center;
  color: #A0A6AB;
  font-family: $serif;
  font-weight: 400;
  font-size: ${fontSize};
  letter-spacing: ${letterSpacing};
  line-height: 1.4rem;
  padding: ${paddingSmall};
`)

const Tags =styled.p(({ header3: { fontSize, letterSpacing, lineHeight }, paddingSmall }) => `
  width: 90%;
  text-align: center;
  color: #AC9472;
  font-family: $serif;
  font-weight: 400;
  font-size: ${fontSize};
  letter-spacing: ${letterSpacing};
  line-height: ${lineHeight};
  padding: ${paddingSmall};
  margin-bottom: 0.5rem;
`)

const Line = styled.div(({ paddingSmall, marginSmall }) => `
  margin-top: ${marginSmall};
  margin-bottom: ${marginSmall};
  width: 20%;
  border: 0;
  border-bottom: 1px solid #E6E9EC;
`)

const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  opacity: 1;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 15px 35px rgba(50, 50, 90, .1), 0 5px 15px rgba(0, 0, 0, .07);
  visibility: hidden;

  ${props => props.visible && css`
    animation: ${slideUp} 0.4s ease-out;
    visibility: visible;
    &:hover {
      transition: transform 0.1s;
      box-shadow: 0 18px 35px rgba(50, 50, 90, .1), 0 8px 15px rgba(0, 0, 0, .07);
      transform: translateY(-2px);
      cursor: pointer;
    }
  `}

`


const to = ({ history, url}) => {
  history.push(url)
  window.scrollTo(0,0)
}

export default withRouter(Blogs)

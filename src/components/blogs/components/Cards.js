import React, { useRef } from 'react'
import styled, { css } from 'styled-components'
import { withRouter } from 'react-router-dom'

import { useIntersection, useWindowWidth } from '../../../effects'
import { Map, Bed, SocaImages, SlideshowImages } from '../../../images'
import { slideUp, slideRightFixed, slideLeftFixed, slideUpLittle } from '../../../animations'

const Cards = ({ history }) => {
  let refs = []
  const index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  const [visible] = useIntersection({ elements: refs, threshold: 0.2 })
  const [{ windowWidth, small }] = useWindowWidth(800)

  return (
    <Container>
      <Header>Our Travel Blogs</Header>
      <CardGrid>
        <Card ref={ref => refs.push(ref)} visible={visible[0]} id={index[0]} onClick={e => to({ history, url: '/blogs/soca'})}>
          <Img img={SocaImages[4]}/>
          <SmallHeader>Featured</SmallHeader>
          <BigHeader>Soča Valley</BigHeader>
          <Line/>
          <P>Soca, Slovenia</P>
          <Tags>#roadtrip #camping #river #kayak #rafting #sup</Tags>
        </Card>
        <Card ref={ref => refs.push(ref)} visible={visible[1]} id={index[1]}>
          <Img img={SlideshowImages[1]}/>
          <SmallHeader>Featured</SmallHeader>
          <BigHeader>Cuba</BigHeader>
          <Line/>
          <P>Havana, Trinidad, Vinales</P>
          <Tags>#sea #sun #salsa #beach #cubalibre #mojito</Tags>
        </Card>
        <Card ref={ref => refs.push(ref)} visible={visible[2]} id={index[2]}>
          <Img img={SlideshowImages[2]}/>
          <SmallHeader>Featured</SmallHeader>
          <BigHeader>Krupa Canyon</BigHeader>
          <Line/>
          <P>Krupa, Croatia</P>
          <Tags>#hike #river #canyon #whitewater #camping</Tags>
        </Card>
        <Card ref={ref => refs.push(ref)} visible={visible[3]} id={index[3]}>
          <Img img={SlideshowImages[3]}/>
          <SmallHeader>Featured</SmallHeader>
          <BigHeader>London</BigHeader>
          <Line/>
          <P>London, England</P>
          <Tags>#urban #rooftops #gin&tonic #rain #parks</Tags>
        </Card>
        { !small &&
          <>
            <Card ref={ref => refs.push(ref)} visible={visible[4]} id={index[4]}>
              <Img img={SlideshowImages[4]}/>
              <SmallHeader>Featured</SmallHeader>
              <BigHeader>Soca Valley</BigHeader>
              <Line/>
              <P>Soca, Slovenia</P>
              <Tags>#roadtrip #camping #river #kayak #rafting #sup</Tags>
            </Card>
            <Card ref={ref => refs.push(ref)} visible={visible[5]} id={index[5]}>
              <Img img={SlideshowImages[5]}/>
              <SmallHeader>Featured</SmallHeader>
              <BigHeader>Cuba</BigHeader>
              <Line/>
              <P>Havana, Trinidad, Vinales</P>
              <Tags>#sea #sun #salsa #beach #cubalibre #mojito</Tags>
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
  padding: calc(1rem + 2.5vw) 5vw 5vw 5vw;
`

// background-image: linear-gradient(-45deg, #EEF0F3 0%, #F6F5F3 100%);

const Header = styled.div`
  font-size: calc(2rem + 1.5vw);
  letter-spacing: 0.1vw;
  line-height: 1.2;
  font-family: 'Playfair Display';
  margin-bottom: calc(1rem + 2.5vw);
`

const CardGrid = styled.div`
  grid-row: 2 / 3;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(27.5rem, 1fr));
  grid-auto-rows: minmax(15rem, auto);
  grid-gap: 5vw;
`

const Img = styled.img.attrs(props => ({
  src: props.img.src
  }))`
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

const SmallHeader = styled.div`
  font-size: .8rem;
  color: #A0A6AB;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: 'Open Sans';
  font-weight: 700;
  margin-bottom: 10px;
`

const BigHeader = styled.div`
  font-size: 2.6rem;
  color: #303336;
  letter-spacing: 1px;
  margin-top: 1vh;
  margin-bottom: 1vh;
  font-family: 'Playfair Display';
`

const P = styled.p`
  text-align: center;
  padding-bottom: 1vh;
  color: #A0A6AB;
  font-family: $serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.4rem;
`

const Tags = styled.p`
  text-align: center;
  padding-bottom: 1vh;
  color: #AC9472;
  font-family: $serif;
  font-weight: 400;
  font-size: .9rem;
  line-height: 1.25rem;
`

const Line = styled.div`
  width: 20%;
  margin-top: 3vh;
  margin-bottom: 3vh;
  border: 0;
  border-bottom: 1px solid #E6E9EC;
`

const TextGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: black;
`

const TextRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const TextRow1 = styled(TextRow)`
  font-size: calc(1rem + 0.4vw);
  font-weight: bold;
  letter-spacing: calc(0.1rem + 0.1vw);
  opacity: 0;
  ${props => props.visible && css`
    animation: ${slideRightFixed} 0.5s ease-out;
    animation-fill-mode: forwards;
    animation-delay: 0.3s;
  `}
`

const TextRow2 = styled(TextRow)`
  font-size: calc(0.8rem + 0.4vw);
  font-style: italic;
  opacity: 0;
  ${props => props.visible && css`
    animation: ${slideLeftFixed} 0.5s ease-out;
    animation-fill-mode: forwards;
    animation-delay: 0.3s;
  `}
`

const TextRow3 = styled(TextRow)`
  font-size: calc(0.8rem + 0.4vw);
  font-style: oblique;
  opacity: 0;
  ${props => props.visible && css`
    animation: ${slideRightFixed} 0.5s ease-out;
    animation-fill-mode: forwards;
    animation-delay: 0.3s;
  `}
`

const Text = styled.div`
  width: max-content;
`

const Hashtags = styled.div`
  font-size: calc(0.8rem + 0.4vw);
`

const MapIcon = styled.img.attrs(props => ({
  src: props.img
  }))`
  width: 1.6vw;
  height: 1.6vw;
`

const BedIcon = styled.img.attrs(props => ({
  src: props.img
  }))`
  width: 2vw;
  height: 2vw;
`

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


export default withRouter(Cards)

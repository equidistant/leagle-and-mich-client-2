import React, { useRef } from 'react'
import styled, { css } from 'styled-components'

import { useIntersection } from '../../../effects'
import { Map, Bed } from '../../../images'
import { slideUp, slideRightFixed, slideLeftFixed } from '../../../animations'

const Blog = () => {
  let refs = []
  const index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  const [visible] = useIntersection(refs)
  const images = [
    { id: 0, src: `${process.env.REACT_APP_SERVER}/images/slideshow/1.jpg` },
    { id: 1, src: `${process.env.REACT_APP_SERVER}/images/slideshow/2.jpg` },
    { id: 2, src: `${process.env.REACT_APP_SERVER}/images/slideshow/3.jpg` },
    { id: 3, src: `${process.env.REACT_APP_SERVER}/images/slideshow/4.jpg` },
    { id: 4, src: `${process.env.REACT_APP_SERVER}/images/slideshow/5.jpg` },
  ]
  return (
    <Container>
      <Header>Latest Travel Blogs</Header>
      <TravelGrid>
        <Travel ref={ref => refs.push(ref)} visible={visible[0]} id={index[0]}>
          <Img img={images[0]}/>
          <TextGrid>
            <TextRow1 visible={visible[0]}>
              <MapIcon img={Map}/>
              <Text>Soca, Slovenia</Text>
            </TextRow1>
            <TextRow2 visible={visible[0]}>
              <BedIcon img={Bed}/>
              <Text>6 days, 20. - 25.6.2019.</Text>
            </TextRow2>
            <TextRow3 visible={visible[0]}>
              <Hashtags>#roadtrip #camping #river #kayak #rafting #sup</Hashtags>
            </TextRow3>
          </TextGrid>
        </Travel>
        <Travel ref={ref => refs.push(ref)} visible={visible[1]} id={index[1]}>
          <Img img={images[1]}/>
          <TextGrid>
            <TextRow1 visible={visible[1]}>
              <MapIcon img={Map}/>
              <Text>Cuba</Text>
            </TextRow1>
            <TextRow2 visible={visible[1]}>
              <BedIcon img={Bed}/>
              <Text>14 days, 20. - 25.6.2019.</Text>
            </TextRow2>
            <TextRow3 visible={visible[1]}>
              <Hashtags>#sea #sun #salsa #beach #cubalibre #mojito</Hashtags>
            </TextRow3>
          </TextGrid>
        </Travel>
        <Travel ref={ref => refs.push(ref)} visible={visible[2]} id={index[2]}>
          <Img img={images[2]}/>
          <TextGrid>
            <TextRow1 visible={visible[2]}>
              <MapIcon img={Map}/>
              <Text>Krupa, Croatia</Text>
            </TextRow1>
            <TextRow2 visible={visible[2]}>
              <BedIcon img={Bed}/>
              <Text>2 days, 20. - 25.6.2019.</Text>
            </TextRow2>
            <TextRow3 visible={visible[2]}>
              <Hashtags>#hike #river #canyon #whitewater #camping</Hashtags>
            </TextRow3>
          </TextGrid>
        </Travel>
        <Travel ref={ref => refs.push(ref)} visible={visible[3]} id={index[3]}>
          <Img img={images[3]}/>
          <TextGrid>
            <TextRow1 visible={visible[3]}>
              <MapIcon img={Map}/>
              <Text>London, England</Text>
            </TextRow1>
            <TextRow2 visible={visible[3]}>
              <BedIcon img={Bed}/>
              <Text>5 days, 20. - 25.6.2019.</Text>
            </TextRow2>
            <TextRow3 visible={visible[3]}>
              <Hashtags>#urban #rooftops #gin&tonic #rain #parks</Hashtags>
            </TextRow3>
          </TextGrid>
        </Travel>
        <Travel ref={ref => refs.push(ref)} visible={visible[4]} id={index[4]}>
          <Img img={images[3]}/>
          <TextGrid>
            <TextRow1 visible={visible[4]}>
              <MapIcon img={Map}/>
              <Text>Krupa, Croatia</Text>
            </TextRow1>
            <TextRow2 visible={visible[4]}>
              <BedIcon img={Bed}/>
              <Text>2 days, 20. - 25.6.2019.</Text>
            </TextRow2>
            <TextRow3 visible={visible[4]}>
              <Hashtags>#hike #river #canyon #whitewater #camping</Hashtags>
            </TextRow3>
          </TextGrid>
        </Travel>
        <Travel ref={ref => refs.push(ref)} visible={visible[5]} id={index[5]}>
          <Img img={images[4]}/>
          <TextGrid>
            <TextRow1 visible={visible[5]}>
              <MapIcon img={Map}/>
              <Text>London, England</Text>
            </TextRow1>
            <TextRow2 visible={visible[5]}>
              <BedIcon img={Bed}/>
              <Text>5 days, 20. - 25.6.2019.</Text>
            </TextRow2>
            <TextRow3 visible={visible[5]}>
              <Hashtags>#urban #rooftops #gin&tonic #rain #parks</Hashtags>
            </TextRow3>
          </TextGrid>
        </Travel>
        <Travel ref={ref => refs.push(ref)} visible={visible[6]} id={index[6]}>
          <Img img={images[0]}/>
          <TextGrid>
            <TextRow1 visible={visible[6]}>
              <MapIcon img={Map}/>
              <Text>Soca, Slovenia</Text>
            </TextRow1>
            <TextRow2 visible={visible[6]}>
              <BedIcon img={Bed}/>
              <Text>6 days, 20. - 25.6.2019.</Text>
            </TextRow2>
            <TextRow3 visible={visible[6]}>
              <Hashtags>#roadtrip #camping #river #kayak #rafting #sup</Hashtags>
            </TextRow3>
          </TextGrid>
        </Travel>
        <Travel ref={ref => refs.push(ref)} visible={visible[7]} id={index[7]}>
          <Img img={images[1]}/>
          <TextGrid>
            <TextRow1 visible={visible[7]}>
              <MapIcon img={Map}/>
              <Text>Cuba</Text>
            </TextRow1>
            <TextRow2 visible={visible[7]}>
              <BedIcon img={Bed}/>
              <Text>14 days, 20. - 25.6.2019.</Text>
            </TextRow2>
            <TextRow3 visible={visible[7]}>
              <Hashtags>#sea #sun #salsa #beach #cubalibre #mojito</Hashtags>
            </TextRow3>
          </TextGrid>
        </Travel>
        <Travel ref={ref => refs.push(ref)} visible={visible[8]} id={index[8]}>
          <Img img={images[2]}/>
          <TextGrid>
            <TextRow1 visible={visible[8]}>
              <MapIcon img={Map}/>
              <Text>Krupa, Croatia</Text>
            </TextRow1>
            <TextRow2 visible={visible[8]}>
              <BedIcon img={Bed}/>
              <Text>2 days, 20. - 25.6.2019.</Text>
            </TextRow2>
            <TextRow3 visible={visible[8]}>
              <Hashtags>#hike #river #canyon #whitewater #camping</Hashtags>
            </TextRow3>
          </TextGrid>
        </Travel>
        <Travel ref={ref => refs.push(ref)} visible={visible[9]} id={index[9]}>
          <Img img={images[3]}/>
          <TextGrid>
            <TextRow1 visible={visible[9]}>
              <MapIcon img={Map}/>
              <Text>London, England</Text>
            </TextRow1>
            <TextRow2 visible={visible[9]}>
              <BedIcon img={Bed}/>
              <Text>5 days, 20. - 25.6.2019.</Text>
            </TextRow2>
            <TextRow3 visible={visible[9]}>
              <Hashtags>#urban #rooftops #gin&tonic #rain #parks</Hashtags>
            </TextRow3>
          </TextGrid>
        </Travel>
        <Travel ref={ref => refs.push(ref)} visible={visible[10]} id={index[10]}>
          <Img img={images[3]}/>
          <TextGrid>
            <TextRow1 visible={visible[10]}>
              <MapIcon img={Map}/>
              <Text>London, England</Text>
            </TextRow1>
            <TextRow2 visible={visible[10]}>
              <BedIcon img={Bed}/>
              <Text>5 days, 20. - 25.6.2019.</Text>
            </TextRow2>
            <TextRow3 visible={visible[10]}>
              <Hashtags>#urban #rooftops #gin&tonic #rain #parks</Hashtags>
            </TextRow3>
          </TextGrid>
        </Travel>
        <Travel ref={ref => refs.push(ref)} visible={visible[11]} id={index[11]}>
          <Img img={images[4]}/>
          <TextGrid>
            <TextRow1 visible={visible[11]}>
              <MapIcon img={Map}/>
              <Text>Krupa, Croatia</Text>
            </TextRow1>
            <TextRow2 visible={visible[11]}>
              <BedIcon img={Bed}/>
              <Text>2 days, 20. - 25.6.2019.</Text>
            </TextRow2>
            <TextRow3 visible={visible[11]}>
              <Hashtags>#hike #river #canyon #whitewater #camping</Hashtags>
            </TextRow3>
          </TextGrid>
        </Travel>
      </TravelGrid>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 15rem min-content;
  justify-items: center;
  align-items: center;
  margin-bottom: 5rem;
`

const Header = styled.div`
  font-size: 5rem;
  letter-spacing: 0.3rem;
`

const TravelGrid = styled.div`
  grid-row: 2 / 3;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-auto-rows: minmax(15rem, auto);
  grid-gap: 5vw;
`

const Img = styled.img.attrs(props => ({
  src: props.img.src
  }))`
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 1.2rem;
  border-top-right-radius: 1.2rem;
`

const TextGrid = styled.div`
  position: absolute;
  bottom: 0;
  background-color: #161826;
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 30%;
  width: 100%;
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

const Travel = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  opacity: 0;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  ${props => props.visible && css`
    animation: ${slideUp} 0.4s ease-out;
    animation-fill-mode: forwards;
  `}
  &:hover ${TextGrid} {
    cursor: pointer;
  }
`

// @media only screen and (max-width: 800px) {
//   grid-column: 2 / 19;
// }

// const Travel1 = styled(Travel)`
//   grid-column: 2 / 3;
// `
//
// const Travel2 = styled(Travel)`
//   grid-column: 4 / 5;
// `
//
// const Travel3 = styled(Travel)`
//   grid-column: 2 / 3;
// `
//
// const Travel4 = styled(Travel)`
//   grid-column: 4 / 5;
// `
//
// const Travel5 = styled(Travel)`
//   grid-column: 2 / 3;
// `
//
// const Travel6 = styled(Travel)`
//   grid-column: 4 / 5;
// `
//
// const Travel7 = styled(Travel)`
//   grid-column: 2 / 3;
// `
//
// const Travel8 = styled(Travel)`
//   grid-column: 4 / 5;
// `
//
// const Travel9 = styled(Travel)`
//   grid-column: 2 / 3;
// `
//
// const Travel10 = styled(Travel)`
//   grid-column: 4 / 5;
// `
//
// const Travel11 = styled(Travel)`
//   grid-column: 2 / 3;
// `
//
// const Travel12 = styled(Travel)`
//   grid-column: 4 / 5;
// `


export default Blog

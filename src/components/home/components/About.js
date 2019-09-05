import React, { useRef } from 'react'
import styled, { css } from 'styled-components'

import { slideAppear, appear } from '../../../animations'
import { useIntersection, useWindowWidth } from '../../../effects'
import { Mislav, Ana } from '../../../images'

const About = () => {
  const refs = [useRef(null), useRef(null)]
  const [visible] = useIntersection(refs)
  const [{ windowWidth, small }] = useWindowWidth(800)
  return (
    <Container>
      <Header>About Us</Header>
      <Circles visible={visible[0]}>
        <TextAna visible={visible[0]}><TextHeader>Mislav o Ani</TextHeader> "Voli putovanja, fotografiju i sladoled."</TextAna>
        <Circle img={Ana} visible={visible[0]} offset={-200} ref={refs[0]} id={0}/>
      </Circles>
      <Circles visible={visible[1]}>
        <Circle img={Mislav} visible={visible[1]} offset={200} ref={refs[1]} id={1}/>
        <TextMislav visible={visible[1]}><TextHeader>Ana o Mislavu</TextHeader> "Voli putovanja, fotografiju i sladoled."</TextMislav>
      </Circles>
    </Container>
  )
}

        // <Circle visible={visible[1]} offset={windowWidth / 2} ref={refs[1]} id={1}/>

const Container = styled.div`
  display: grid;
  grid-template-rows: min-content min-content;
  justify-items: center;
  align-items: center;
  color: #884307;
  width: 100%;
  background-image: linear-gradient(-45deg, #EEF0F3 0%, #F6F5F3 100%);
  padding: calc(1rem + 2.5vw) 5vw 5vw 5vw;
`

const Header = styled.div`
  font-size: calc(2rem + 1.5vw);
  letter-spacing: 0.1vw;
  line-height: 1.2;
  font-family: 'Playfair Display';
  margin-bottom: calc(1rem + 2.5vw);
`

const TextHeader = styled.div`
  font-weight: 700;
  font-size: calc(1rem + 0.4vw);
  margin: 1rem;
`

const Text = styled.div`
  visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${props => props.visible && css`
    visibility: visible;

  `}
  text-align: center;
  border-radius: 10px;
  margin: 1vw;
  padding: 1vw;
  font-size: calc(0.8rem + 0.4vw);
  font-style: italic;
  width: calc(15rem + 10vw);
`
const TextAna = styled(Text)`
`

const TextMislav = styled(Text)`
`

// animation: ${appear} 1s ease-in-out;
// animation-fill-mode: forwards;
const Circle = styled.div`
  border-radius: 50%;
  width: calc(4rem + 8vw);
  height: calc(4rem + 8vw);
  visibility: hidden;
  ${props => props.visible && css`
    visibility: visible;

  `}
  background-position: center;
  background-size: cover;
  background-image: url(${props => props.img});
  margin: 1vw;
`

    // animation: ${props => slideAppear({x1: props.offset, y1: 0, z1: 0, x2: 0, y2: 0, z2: 0})} 1s ease-in-out;
const Circles = styled.div`
  display: flex;
  margin: 1vw;
  ${props => props.visible && css`
    visibility: visible;
    animation:  ${props => slideAppear({x1: 0, y1: 100, z1: 0, x2: 0, y2: 0, z2: 0})} 0.4s ease-in-out;
  `}
`

export default About

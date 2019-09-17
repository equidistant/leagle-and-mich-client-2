import React, { useRef } from 'react'
import styled, { css } from 'styled-components'

import { slideAppear, appear } from '../../../animations'
import { useIntersection, useWindowWidth, useTheme2 } from '../../../effects'
import { Mislav, Ana } from '../../../images'
import themeSizes from '../theme'

const About = () => {
  const [theme] = useTheme2({ theme: themeSizes, boundaries: [800, 1100]})
  const refs = [useRef(null), useRef(null)]
  const [visible] = useIntersection({ elements: refs, threshold: 0.1 })
  const [{ windowWidth, small }] = useWindowWidth(800)
  return (
    <Container {...theme}>
      <Header1 {...theme}>About Us</Header1>
      <RowContainer visible={visible[0]} ref={refs[0]} id={0} {...theme}>
        <TextContainer {...theme}>
          <Header2 {...theme}>Mislav o Ani</Header2>
          <Header3 {...theme}>"Voli sunce, fotografiju i sladoled."</Header3>
        </TextContainer>
        <Circle img={Ana} {...theme}/>
      </RowContainer>
      <RowContainer visible={visible[1]} ref={refs[1]} id={1} {...theme}>
        <Circle img={Mislav} {...theme}/>
        <TextContainer {...theme}>
          <Header2 {...theme}>Ana o Mislavu</Header2>
          <Header3 {...theme}>"Voli hlad, vježbanje i čips."</Header3>
        </TextContainer>
      </RowContainer>
    </Container>
  )
}

        // <Circle visible={visible[1]} offset={windowWidth / 2} ref={refs[1]} id={1}/>

const Container = styled.div(({ paddingBig }) => `
  display: grid;
  grid-template-rows: min-content min-content;
  justify-items: center;
  align-items: center;
  width: 100%;
  background-image: linear-gradient(-45deg, #EEF0F3 0%, #F6F5F3 100%);
  padding: ${paddingBig};
`)

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
  font-weight: 700;
  padding: ${paddingBig};
`)

const Header3 = styled.div(({ header3: { fontSize, letterSpacing }, paddingBig}) => `
  font-size: ${fontSize};
  letter-spacing: ${letterSpacing};
  font-family: $serif;
  padding: ${paddingBig};
  font-style: italic;
`)

const RowContainer = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.paddingBig};
  ${props => props.visible && css`
    animation:  ${props => slideAppear({x1: 0, y1: 100, z1: 0, x2: 0, y2: 0, z2: 0})} 0.7s ease-in-out;
    animation-fill-mode: forwards;
  `}
`

const TextContainer = styled.div(({ paddingBig }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${paddingBig};
`)

const Circle = styled.div(({ img, circle: { width, height }, marginSmall }) => `
  border-radius: 50%;
  width: ${width};
  height: ${height};
  background-position: center;
  background-size: cover;
  background-image: url(${img});
  margin: ${marginSmall};
`)

export default About

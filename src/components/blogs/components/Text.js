import React from 'react'
import styled from 'styled-components'
import { Star } from '../../../images'

export const Header1 = styled.p(({ header1: { fontSize, letterSpacing }, padding }) => `
  padding: ${padding};
  font-size: ${fontSize};
  letter-spacing: ${letterSpacing};
  line-height: 2;
  font-family: 'Maple';
  width: 90%;
  text-align: center;
`)


export const Text = styled.p(({ main: { width}, fontSize, letterSpacing, padding }) => `
  padding: ${padding};
  font-size: ${fontSize};
  letter-spacing: ${letterSpacing};
  font-family: 'Maple';
  width: 100%;
  height: auto;
  text-align: justify;
  text-justify: inter-word;
`)

export const TextIntro = styled(Text)`
  font-style: oblique;
`

export const Header2 = styled.p(({ header2: { fontSize, letterSpacing}, padding, margin}) => `
  padding: ${padding};
  margin-top: ${margin};

  font-size: ${fontSize}
  letter-spacing: ${letterSpacing}
  font-family: 'Playfair Display';
  font-weight: 700;
  font-style: oblique;
  display: block;
  align-self: flex-start;
`)

export const BulletHeaderContainer = styled.div(({ padding }) => `
  display: flex;
  align-self: flex-start;
  width: max-content;
  padding: ${padding};
`)

export const Header3 = styled.span(({ header2: { fontSize, letterSpacing}, padding, margin }) => `
  padding: ${padding};
  font-size: ${fontSize}
  letter-spacing: ${letterSpacing}
  font-family: 'Playfair Display';
  font-weight: 600;
  align-self: center;
`)

export const StarBullet = styled.div(({ starBullet: { width, height, margin} }) => `
  background-position: center;
  background-size: cover;
  background-image: url(${Star});
  width: ${width};
  height: ${height};
  align-self: center;
  margin-right: ${margin};
`)

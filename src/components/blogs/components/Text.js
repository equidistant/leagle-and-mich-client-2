import React from 'react'
import styled from 'styled-components'
import { Star } from '../../../images'

export const Header1 = styled.p(({ header1: { fontSize, letterSpacing }, paddingBig, marginBig }) => `
  padding: ${paddingBig};
  margin-top: ${marginBig};
  font-size: ${fontSize};
  letter-spacing: ${letterSpacing};
  font-family: 'Playfair Display';
  width: 90%;
  text-align: center;
`)

export const Header2 = styled.p(({ header2: { fontSize, letterSpacing}, paddingBig, marginBig}) => `
  padding: ${paddingBig};
  margin-top: ${marginBig};
  font-size: ${fontSize};
  letter-spacing: ${letterSpacing};
  font-family: 'Playfair Display';
  font-weight: 700;
  font-style: oblique;
  display: block;
  align-self: flex-start;
`)

export const Header3 = styled.span(({ header2: { fontSize, letterSpacing}, paddingBig}) => `
  padding: ${paddingBig};
  font-size: ${fontSize};
  letter-spacing: ${letterSpacing};
  font-family: 'Playfair Display';
  font-weight: 600;
  align-self: center;
`)

export const BulletHeaderContainer = styled.div(({ paddingBig }) => `
  display: flex;
  align-self: flex-start;
  width: max-content;
  padding: ${paddingBig};
`)

export const StarBullet = styled.div(({ starBullet: { width, height }, marginSmall }) => `
  background-position: center;
  background-size: cover;
  background-image: url(${Star});
  width: ${width};
  height: ${height};
  align-self: center;
  margin-right: ${marginSmall};
`)

export const Text = styled.p(({ fontSize, letterSpacing, paddingBig }) => `
  padding: ${paddingBig};
  font-size: ${fontSize};
  letter-spacing: ${letterSpacing};
  font-family: 'Playfair Display';
  width: 100%;
  height: auto;
  text-align: justify;
  text-justify: inter-word;
`)

export const TextIntro = styled(Text)`
  font-style: oblique;
  margin-top: ${props => props.marginBig};
`

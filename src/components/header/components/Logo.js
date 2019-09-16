import React from 'react'
import styled, { css } from 'styled-components'
import { LogoHeader } from '../../../images'
import { slide, slideFrom } from '../../../animations'

const Logo = styled.div`
  background-position: center;
  background-size: cover;
  background-image: url(${LogoHeader});
  z-index: 5;
  width: ${props => props.logo.width};
  height: ${props => props.logo.width};
  &:hover {
    cursor: pointer;
  }
  ${props => props.show && css`
    animation: ${props => slide({x1: 0, y1: 0, z1: 0, x2: props.offset, y2: 0, z2: 0})} 0.4s ease-in-out;
    animation-fill-mode: forwards;
  `}
  ${props => !props.show && css`
    animation: ${props => slide({x1: props.offset, y1: 0, z1: 0, x2: 0, y2: 0, z2: 0})} 0.4s ease-in-out;
    animation-fill-mode: forwards;
  `}
  user-select: none;
`

export default Logo

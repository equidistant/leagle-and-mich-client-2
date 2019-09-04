import React, { useRef } from 'react'
import styled, { css } from 'styled-components'
import { useWidth } from '../../../effects'
import { slide, slideFrom } from '../../../animations'

const Link = styled.div`
  color: white;
  font-size: calc(1rem + 0.7vw);
  width: max-width;
  font-family: 'Bubbler One';
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: translateY(2px) !important;
  }
  margin: 0 0.5vw 0 0.5vw;
  ${props => props.show && css`
    animation: ${props => slide({x1: 0, y1: 0, z1: 0, x2: props.offset, y2: 0, z2: 0})} 0.4s ease-in-out;
    animation-fill-mode: forwards;
  `}
  ${props => !props.show && css`
    animation: ${props => slide({x1: props.offset, y1: 0, z1: 0, x2: 0, y2: 0, z2: 0})} 0.4s ease-in-out;
    animation-fill-mode: forwards;
  `}
`

export default Link

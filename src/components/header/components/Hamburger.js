import React from 'react'
import styled, { css } from 'styled-components'
import { spanFirstOff, spanSecondOff, spanThirdOff,
   spanFirstOn, spanSecondOn, spanThirdOn } from '../../../animations'
import { slide, slideFrom } from '../../../animations'

// background-color: #AC9472;
// background-color: #078FFF;
const Span = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5rem;
  height: 0.4rem;
  background-color: #AC9472;
  border-radius: 2px;
  overflow: hidden;
  transition: all 0.3s linear;
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    background-color: #AC9472;
    transition: all 0.3s linear;
  }
  &:nth-child(1) {
    animation: ${spanFirstOff} 0.5s ease-in-out;
    animation-fill-mode: forwards;
  }
  &:nth-child(2) {
    animation: ${spanSecondOff} 0.5s ease-in-out;
    animation-fill-mode: forwards;
  }
  &:nth-child(3) {
    animation: ${spanThirdOff} 0.5s ease-in-out;
    animation-fill-mode: forwards;
  }
  ${props => props.toggled && css`
    &:nth-child(1) {
      animation: ${spanFirstOn} 0.5s ease-in-out;
      animation-fill-mode: forwards;
    }
    &:nth-child(2) {
      animation: ${spanSecondOn} 0.5s ease-in-out;
      animation-fill-mode: forwards;
    }
    &:nth-child(3) {
      animation: ${spanThirdOn} 0.5s ease-in-out;
      animation-fill-mode: forwards;
    }
  `}
`
const Container = styled.button`
  position: absolute;
  right: -25rem;
  width: 8rem;
  height: 100%;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  outline: none;
  z-index: 5;
  margin-top: auto;
  margin-bottom: auto;
  transition: all 0.5s ease-in-out;
  &:hover ${Span}::before {
    width: 100%;
    transition: all 0.3s linear;
    background-color: #F8A206;
  }
  background-color: transparent;
  &:active {
    top: 2px;
  }
  ${props => (props.show) && css`
    opacity: 1;
    right: 0;
  `}
  ${props => props.toggled && css`
    ${Span}::before {
      background-color: #F8A206;
      width: 100%;
    }
  `}
`

const Hamburger = ({ toggled, hamburgerRef, ...rest }) =>
  <Container toggled={toggled} ref={hamburgerRef} {...rest}>
    <Span toggled={toggled}/>
    <Span toggled={toggled}/>
    <Span toggled={toggled}/>
  </Container>

export default Hamburger

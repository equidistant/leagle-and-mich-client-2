import React from 'react'
import styled from 'styled-components'

const Img = styled.img.attrs(props => ({
  src: props.img.src
  }))`
  background-size: cover;
  width: 100%;
  max-height: 100%;
  overflow: hidden;
  margin-right: ${props => props.right ? '0.5vw' : 0};
  margin-left: ${props => props.left ? '0.5vw' : 0};
  margin-top: 1vw;
  margin-bottom: 1vw;
  transition: opacity 1.5s ease-in;
`

export default Img

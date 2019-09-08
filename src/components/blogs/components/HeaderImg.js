import React from 'react'
import styled from 'styled-components'

const HeaderImg = () => {
  const img = { id: 0, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/5.jpg` }
  return (
    <Img img={img}/>
  )
}

const Img = styled.img.attrs(props => ({
  src: props.img.src
  }))`
  background-size: cover;
  width: 100%;
  height: auto;
  max-height: 100vh;
  max-width: 100%;
  overflow: hidden;
`

export default HeaderImg

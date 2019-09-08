import React from 'react'
import styled from 'styled-components'
import { Slideshow, Blog, Gallery, About } from './components'

const Home = () => {
  return (
    <Container>
      <Slideshow/>
      <Blog />
      <Gallery />
      <About />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default Home

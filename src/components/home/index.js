import React from 'react'
import styled from 'styled-components'
import { Slideshow, Cards, Gallery, About } from './components'

const Home = ({ theme }) => {
  return (
    <Container>
      <Slideshow/>
      <Cards />
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

import React from 'react'
import styled from 'styled-components'
import Cards from './Cards'
import { HeaderImg } from './Images'

const Home = ({ theme }) => {
  return (
    <Container>
      <HeaderImg img={{ id: 0, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/7.jpg` }}/>
      <Cards />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`

export default Home

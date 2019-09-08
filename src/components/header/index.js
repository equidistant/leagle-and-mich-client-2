import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { useScrolled, useWindowWidth, useWidth, useElemProp } from '../../effects'

import { Link, Logo, Hamburger, Background } from './components'

const Header = ({ history }) => {
  const logoRef = useRef(null)
  const hamburgerRef = useRef(null)
  const [scrolled] = useScrolled(1)
  const [{ windowWidth, small }] = useWindowWidth(800)
  const [toggled, setToggled] = useState(false)
  const [logoWidth] = useElemProp({ ref: logoRef, propName: 'offsetWidth'})
  const show = scrolled || toggled || small
  return (
    <Container>
      <Link show={show} offset={windowWidth} onClick={e => to({ history, url: '/blog/15'})}>Travel Blog</Link>
      <Link show={show} offset={windowWidth}>Travel Gallery</Link>
      <Logo show={show} offset={-(windowWidth/2 - logoWidth / 2)} ref={logoRef} onClick={e => to({ history, url: '/'})}/>
      <Link show={show} offset={windowWidth}>Ana's Portfolio</Link>
      <Link show={show} offset={windowWidth}>About Us</Link>
      <Hamburger show={show} toggled={toggled} hamburgerRef={hamburgerRef} onClick={e => setToggled(!toggled)}/>
      <Background show={toggled} />
    </Container>
  )
}

const to = ({ history, url}) => {
  history.push(url)
  window.scrollTo(0,0)
}

const Container = styled.div`
  height: 10vw;
  width: 100%;
  position: fixed;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`

export default withRouter(Header)

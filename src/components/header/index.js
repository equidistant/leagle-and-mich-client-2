import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { useScrolled, useWindowWidth, useWidth, useElemProp, useTheme } from '../../effects'

import { Link, Logo, Hamburger, Background } from './components'

const Header = ({ history }) => {
  const [theme] = useTheme({ name: 'header', boundaries: [800, 1100]})
  console.log(theme.hamburger)
  const logoRef = useRef(null)
  const hamburgerRef = useRef(null)
  const [scrolled] = useScrolled(1)
  const [{ windowWidth, small }] = useWindowWidth(800)
  const [toggled, setToggled] = useState(false)
  const [logoWidth] = useElemProp({ ref: logoRef, propName: 'offsetWidth'})
  const show = scrolled || toggled || small
  return (
    <Container {...theme}>
      <Link show={show} offset={windowWidth} onClick={e => to({ history, url: '/blog/15'})} {...theme}>Travel Blog</Link>
      <Link show={show} offset={windowWidth} {...theme}>Travel Gallery</Link>
      <Logo show={show} offset={-(windowWidth/2 - logoWidth / 2)} ref={logoRef} onClick={e => to({ history, url: '/'})} {...theme}/>
      <Link show={show} offset={windowWidth} {...theme}>Ana's Portfolio</Link>
      <Link show={show} offset={windowWidth} {...theme}>About Us</Link>
      <Hamburger show={show} toggled={toggled} hamburgerRef={hamburgerRef} onClick={e => setToggled(!toggled)} {...theme}/>
      <Background show={toggled} setToggled={setToggled}/>
    </Container>
  )
}

const to = ({ history, url, setToggled}) => {
  history.push(url)
  window.scrollTo(0,0)
}

const Container = styled.div(({ height }) => `
  height: ${height};
  width: 100%;
  position: fixed;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  user-select: none;
`)

export default withRouter(Header)

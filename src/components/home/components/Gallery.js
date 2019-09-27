import React, { Component } from 'react'
import axios from 'axios'
import styled, { css } from 'styled-components'
import justifiedLayout from 'justified-layout'
import $ from 'jquery'
import themeSizes from '../theme'

window.jQuery = $
window.$ = $

class Gallery extends Component {
  state = {
    images: [],
    theme: chooseSize({ window, theme: themeSizes, boundaries: [800, 1100]})
  }
  render () {
    return (
      <Container {...this.state.theme}>
        <Header1 {...this.state.theme}>Travel Gallery</Header1>
        <GalleryContainer {...this.state.theme}>
          {this.state.images && this.state.images.length !== 0 && this.renderImages(this.state.images)}
        </GalleryContainer>
      </Container>
    )
  }

  async componentDidMount() {
    const ratios = await getRatios({ url: '/gallery/front' })
    const images = getImages({ url: '/gallery/front', length: ratios.data.length })
    this.setState({ images })
    const rowHeight = window.innerWidth > 800 ? window.innerWidth / 7 : window.innerWidth / 4
    window.addEventListener('resize', this.resizeListener.bind(this))
    const theme = chooseSize({ window, theme: themeSizes, boundaries: [800, 1100]})
    this.setState({ theme })
    try {
      window.$('#gallery').justifiedGallery({ rowHeight: rowHeight })
    } catch (err) {
      await sleep(250)
      window.$('#gallery').justifiedGallery({ rowHeight: rowHeight })
    }
  }

  resizeListener () {
    const rowHeight = window.innerWidth > 800 ? window.innerWidth / 7 : window.innerWidth / 4
    const theme = chooseSize({ window, theme: themeSizes, boundaries: [800, 1100]})
    this.setState({ theme })
    window.$('#gallery').justifiedGallery({ rowHeight })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeListener)
  }

  renderImages = (images) => images.map((image, index) => {
    return (
      <A img={image} key={index}>
        <Image img={image} />
      </A>
    )
  })
}

const chooseSize = ({ window, theme, boundaries }) => {
  if (window.innerWidth <= boundaries[0]) {
    return theme.small
  } else if (window.innerWidth > boundaries[0] && window.innerWidth < boundaries[1]) {
    return theme.medium
  } else {
    return theme.big
  }
}

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const Container = styled.div(({ paddingBig }) => `
  display: grid;
  grid-template-rows: min-content min-content;
  justify-items: center;
  align-items: center;
  color: #303336;
  width: 100%;
  padding: ${paddingBig};
`)

const Header1 = styled.div(({ header1: { fontSize, letterSpacing }, marginBig, paddingBig }) => `
  font-size: ${fontSize};
  letter-spacing: ${letterSpacing};
  margin-top: ${marginBig};
  padding: ${paddingBig};

  line-height: 1.2;
  font-family: 'Playfair Display';
  width: 90%;
  text-align: center;
`)

const GalleryContainer = styled.div.attrs({
  id: 'gallery'
  })
`
  margin-top: ${props => props.marginBig};
`

const Image = styled.img.attrs(props => ({
  src: props.img.src,
  alt: props.img.alt
  }))`
`

const A = styled.a.attrs(props => ({
  href: props.img.src
}))``

const getImages = ({ url, length}) => [...Array(length)].map((img, index) => {return { id: index, alt: 'Image', src: `${process.env.REACT_APP_SERVER}/images/${url}/${index + 1}.jpg` }})

const getRatios = ({ url }) => axios({
  method: 'get',
  url: `${process.env.REACT_APP_SERVER}/sizes/${url}`
})

export default Gallery

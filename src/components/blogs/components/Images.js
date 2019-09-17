import React from 'react'
import styled from 'styled-components'

export const HeaderImg = styled.img.attrs(props => ({
  src: props.img.src
  }))`
  background-size: cover;
  width: 100%;
  height: auto;
  max-height: 100vh;
  max-width: 100%;
  overflow: hidden;
`

export const ImgRow = styled.div(({ paddingBig }) => `
  display: flex;
  padding: ${paddingBig};
`)

export const ImgWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export const ImgWrapPortrait = styled.div(() => `
  width: 50%;
  height: auto;
  position: relative;
`)

export const ImgWrapLandscape = styled.div(() => `
  width: 50%;
  height: auto;
  position: relative;
`)

export const ImgWrapPortraitLeft = styled(ImgWrapPortrait)`
  margin-right: ${props => props.margin}${props => props.unit};
`

export const ImgWrapLandscapeLeft = styled(ImgWrapLandscape)`
  margin-right: ${props => props.margin}${props => props.unit};
`

export const ImgPortraitHalf = styled.img.attrs(props => ({
  src: props.img.src
  }))`
  background-size: cover;
  overflow: hidden;
  width: 100%
  height: 100%;
  border-radius: 2px;
`

export const ImgLandscapeHalf = styled.img.attrs(props => ({
  src: props.img.src
  }))`
  background-size: cover;
  overflow: hidden;
  width: 100%
  height: 100%;
  border-radius: 2px;
`

export const Img = styled.img.attrs(props => ({
  src: props.img.src
  }))`
  background-size: cover;
  overflow: hidden;
  width: 100%
  height: 100%;
  border-radius: 2px;
`

export const ImgOverlay = styled.div(({ imgOverlay: { letterSpacing, fontSize, padding } }) => `
  position: absolute;
  bottom: 0;
  background-color: #0000007D;
  width: 100%;
  font-style: italic;
  font-size: ${fontSize};
  letter-spacing: ${letterSpacing};
  color: #B09978;
  display: flex;
  justify-content: flex-end;
  padding: ${padding};
`)

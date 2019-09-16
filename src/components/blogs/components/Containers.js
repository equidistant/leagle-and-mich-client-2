import React from 'react'
import styled from 'styled-components'

export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  max-width: 100%;
`

export const CenterContainer = styled.div(({ main: { width, marginVertical }, padding }) => `
  width: ${width};
  margin-top: ${marginVertical};
  margin-bottom: ${marginVertical};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: ${padding};
  border-radius: 1.5rem;
  background-color: white;
  box-shadow: 0 15px 35px rgba(50, 50, 90, .1), 0 5px 15px rgba(0, 0, 0, .07);
`)

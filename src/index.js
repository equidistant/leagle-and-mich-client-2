import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter, Route } from 'react-router-dom'

import { GlobalStyle } from './style'
import { Header, Home, Footer } from './components'
import { useTwoElemIntersection } from './effects'

import $ from 'jquery'
window.$ = $

const App = () => {
  return (
    <BrowserRouter>
      <>
        <GlobalStyle />
        <Header/>
        <Route exact path='/' component={Home} />
        <Footer />
      </>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()

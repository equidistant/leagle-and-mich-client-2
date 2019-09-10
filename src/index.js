import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, Theme } from './style'
import { Header, Home, Blogs, Footer } from './components'
import { useTwoElemIntersection } from './effects'

const App = () => {
  return (
      <BrowserRouter>
        <>
          <GlobalStyle />
          <Header/>
          <Route exact path='/' component={() => <Home theme={Theme}/>} />
          <Route path='/blog/:id' component={() => <Blogs theme={Theme.blogs}/>} />
          <Footer />
        </>
      </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()

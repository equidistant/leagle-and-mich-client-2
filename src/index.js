import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter, Route } from 'react-router-dom'

import { GlobalStyle } from './style'
import { Header, Home, Blogs, Footer } from './components'
import { useTwoElemIntersection } from './effects'

const App = () => {
  return (
    <BrowserRouter>
      <>
        <GlobalStyle />
        <Header/>
        <Route exact path='/' component={Home} />
        <Route path='/blog/:id' component={Blogs} />
        <Footer />
      </>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()

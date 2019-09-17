import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import { Soca } from './content'
import { Home } from './components'

const Blogs = ({ match }) => {
  return (
    <Switch>
      <Route exact path={match.path} component={Home} />
      <Route exact path={`${match.path}/soca`} component={Soca} />
    </Switch>
  )
}

export default Blogs

import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import { useTheme } from '../../effects'
import { Soca } from './content'
import { Home } from './components'

const Blogs = ({ match }) => {
  const [theme] = useTheme({ name: 'blogs', boundaries: [800, 1100]})
  return (
    <Switch>
      <Route exact path={match.path} component={Home} />
      <Route exact path={`${match.path}/soca`} component={Soca} />
    </Switch>
  )
}

// <Route exact path='/soca' component={Soca} />

export default Blogs

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { FooterContainer } from '~/containers'
import { About, Home } from '~/pages'

const Root = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
    </Switch>
    <FooterContainer />
  </Router>
)

export default Root

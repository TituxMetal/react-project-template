import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Layout } from '~/core'

const About = lazy(() => import('~/pages/about'))
const Home = lazy(() => import('~/pages/home'))

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Suspense fallback={<p>Loading Page...</p>}>
        <Layout>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </Layout>
      </Suspense>
    </Switch>
  </BrowserRouter>
)

export default Routes

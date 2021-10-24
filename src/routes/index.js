import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Layout } from '~/core'

const AboutPage = lazy(() => import('~/pages/about'))
const FormPage = lazy(() => import('~/pages/form'))
const HomePage = lazy(() => import('~/pages/home'))

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Suspense fallback={<p>Loading Page...</p>}>
        <Layout>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/form' component={FormPage} />
        </Layout>
      </Suspense>
    </Switch>
  </BrowserRouter>
)

export default Routes

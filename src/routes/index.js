import React from 'react'
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom'

import { Layout } from '~/core'
import MainRoute from './main'

const NoMatch = () => <h2>Nothing to see here!</h2>

const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path='/*' element={<MainRoute />} />
        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default Routing

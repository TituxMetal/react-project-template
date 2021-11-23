import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { AboutPage, FormPage, HomePage } from '~/pages'

const MainRoute = () => (
  <Routes>
    <Route path='about' element={<AboutPage />} />
    <Route path='form' element={<FormPage />} />
    <Route index element={<HomePage />} />
  </Routes>
)

export default MainRoute

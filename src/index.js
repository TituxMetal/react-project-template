import React from 'react'
import { render } from 'react-dom'

import { GlobalStyle } from '~/core'
import Routes from '~/routes'

const element = document.getElementById('root')
render(
  <GlobalStyle>
    <Routes />
  </GlobalStyle>,
  element
)

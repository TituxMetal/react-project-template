import React from 'react'
import { render } from 'react-dom'

import { GlobalStyle } from '~/core'
import Routing from '~/routes'

const element = document.getElementById('root')
render(
  <GlobalStyle>
    <Routing />
  </GlobalStyle>,
  element
)

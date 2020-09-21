import React from 'react'
import { render } from 'react-dom'

import { StyledContext } from '~/context'
import Routes from '~/routes'

render(
  <StyledContext>
    <Routes />
  </StyledContext>, 
  document.getElementById('root')
)

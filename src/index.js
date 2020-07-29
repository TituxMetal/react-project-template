import React from 'react'
import { render } from 'react-dom'

import Root from '~/root'
import Theme from '~/theme'

render(
  <Theme>
    <Root />
  </Theme>,
  document.getElementById('root')
)

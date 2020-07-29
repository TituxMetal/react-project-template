import React from 'react'
import { ThemeProvider } from 'styled-components'

import * as theme from './colors'
import GlobalFonts from './fonts'
import GlobalStyle from './GlobalStyle'

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalFonts />
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

export default Theme

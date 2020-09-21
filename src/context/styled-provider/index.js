import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalFonts } from './fonts'
import { GlobalStyle } from './global-style'
import { theme } from './theme'

const StyledContext = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalFonts />
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

export default StyledContext

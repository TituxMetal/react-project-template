import '@fontsource/roboto'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles } from 'twin.macro'

const BaseStyles = createGlobalStyle`
  ${tw`antialiased dark:bg-gray-700 dark:text-gray-50`};
  body {
    ${tw`text-lg font-sans`}
  }
`

const GlobalStyle = ({ children }) => (
  <>
    <GlobalStyles />
    <BaseStyles />
    {children}
  </>
)

export default GlobalStyle

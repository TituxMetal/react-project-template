import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${({theme}) => css`
    *, *:before, *:after { box-sizing: border-box; outline: none; }

    *::-moz-focus-inner { border: none; }

    html {
      box-sizing: border-box;
      font-size: 16px;
      font-family: Lato, sans-serif;
      scroll-behavior: smooth;
    }

    body {
      padding: 0;
      margin: 0;
      font-size: 1.125rem;
      line-height: 2;
      background-color: ${theme.colors.black};
      color: ${theme.colors.white};
    }

    ul { list-style-type: none; margin: 0; padding: 0; }
  `}
`

import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const BrandLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.blue['100']};
    font-size: 2rem;
    text-decoration: none;
  `}
`

export const Head = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.blue['800']};
  `}
`

export const Nav = styled.nav`
  display: flex;
  padding: 1rem;
`

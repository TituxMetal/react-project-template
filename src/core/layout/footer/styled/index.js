import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const Container = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.blue[800]};
    display: flex;
    padding: 0.5rem;
  `}
`

export const Link = styled(NavLink)`
  ${({ theme }) => css`
    color: ${theme.colors.orange[100]};
    font-weight: bold;
    margin-left: 1rem;
    text-decoration: none;
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: 'Lato Black';
    font-size: 1.4rem;
    margin: 0;
  `}
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding-left: 1rem;
`

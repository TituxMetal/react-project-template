import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.cornFlowerBlue};
  display: flex;
  padding: 2rem;
`

export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.peachOrange};
  font-weight: bold;
  text-decoration: none;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.mintGreen};
  font-family: 'Lato Black';
  font-size: 1.4rem;
  margin: 1rem 0;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
`

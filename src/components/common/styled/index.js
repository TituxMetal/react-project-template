import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const ButtonLink = styled(Link)`
  ${({ theme }) => css`
    background-color: ${theme.colors.purple[800]};
    border-radius: 8px;
    color: ${theme.colors.orange[200]};
    margin: 1rem;
    padding: 0.4rem 1.4rem;
    text-align: center;
    text-decoration: none;
    transition: 0.3s;
    width: max-content;

    &:hover {
      background-color: ${theme.colors.purple[700]};
    }
  `}
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 0 1rem;
`

export const Text = styled.p`
  margin: 0.5rem 0;
`

export const Title = styled.h1`
  font-family: serif;
  font-size: 3rem;
  line-height: 2;
  margin: 0;
`

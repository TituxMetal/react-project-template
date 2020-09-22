import React from 'react'

import { Container, Link, Title, Wrapper } from './styled'

const Footer = () => (
  <Container>
    <Wrapper>
      <Title>Footer Component</Title>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </Wrapper>
  </Container>
)

export default Footer

import React from 'react'

import { Container, Link, Title, Wrapper } from './styled'

const Footer = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
)

Footer.Link = ({ children, ...restProps }) => {
  Footer.Link.displayName = 'FooterLink'

  return <Link {...restProps}>{children}</Link>
}

Footer.Title = ({ children, ...restProps }) => {
  Footer.Title.displayName = 'FooterTitle'

  return <Title {...restProps}>{children}</Title>
}

Footer.Wrapper = ({ children, ...restProps }) => {
  Footer.Wrapper.displayName = 'FooterWrapper'

  return <Wrapper {...restProps}>{children}</Wrapper>
}

export default Footer

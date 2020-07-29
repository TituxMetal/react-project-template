import React from 'react'

import { Footer } from '~/components'

const FooterContainer = () => (
  <Footer>
    <Footer.Wrapper>
      <Footer.Title>Footer Compound Component</Footer.Title>
      <Footer.Link to='/'>Home</Footer.Link>
      <Footer.Link to='/about'>About</Footer.Link>
    </Footer.Wrapper>
  </Footer>
)

export default FooterContainer

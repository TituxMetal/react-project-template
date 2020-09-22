import React from 'react'

import Footer from './footer'
import Navigation from './navigation'
import { Main, Wrapper } from './styled'

const Layout = ({ children }) => (
  <Wrapper>
    <Navigation siteTitle='React Template' />
    <Main>{children}</Main>
    <Footer />
  </Wrapper>
)

export default Layout

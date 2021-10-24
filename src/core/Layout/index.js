import React from 'react'
import tw, { styled } from 'twin.macro'

import Footer from './Footer'
import Navigation from './Navigation'

const Main = styled.div(tw`flex m-auto px-4 w-full`)
const Wrapper = styled.main(tw`flex flex-col h-screen`)

const Layout = ({ children }) => (
  <Wrapper>
    <Navigation siteTitle='React Project Template' />
    <Main>{children}</Main>
    <Footer />
  </Wrapper>
)

export default Layout

import React from 'react'
import { Link } from 'react-router-dom'
import tw, { styled } from 'twin.macro'

const BrandLink = styled(Link)(tw`text-yellow-200 text-2xl no-underline`)
const Head = styled.header(tw`bg-orange-700`)
const Nav = styled.nav(tw`flex py-4 px-6 items-center`)

const Navigation = ({ siteTitle }) => (
  <Head>
    <Nav>
      <BrandLink to='/'>{siteTitle}</BrandLink>
    </Nav>
  </Head>
)

export default Navigation

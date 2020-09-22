import React from 'react'

import { BrandLink, Head, Nav } from './styled'

const Navigation = ({ siteTitle }) => (
  <Head>
    <Nav>
      <BrandLink to='/'>{siteTitle}</BrandLink>
    </Nav>
  </Head>
)

export default Navigation

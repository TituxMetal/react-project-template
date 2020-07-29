import React from 'react'

import { Container, Title, Splash } from './styled'

const MainPage = ({ children }) => <Container>{children}</Container>

MainPage.Title = ({ children }) => {
  MainPage.Title.displayName = 'MainPageTitle'

  return <Title>{children}</Title>
}

MainPage.Splash = ({ children }) => {
  MainPage.Splash.displayName = 'MainPageSplash'

  return <Splash>{children}</Splash>
}

export default MainPage

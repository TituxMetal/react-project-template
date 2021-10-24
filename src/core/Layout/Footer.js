import React from 'react'
import { NavLink } from 'react-router-dom'
import tw, { styled } from 'twin.macro'

const Container = styled.footer(tw`flex p-2 bg-orange-700`)
const Link = styled(NavLink)(tw`text-yellow-200 font-bold ml-4 no-underline`)
const Title = styled.h2(tw`font-bold text-blue-300 text-2xl m-0`)
const Wrapper = styled.div(tw`flex flex-col m-0 pl-4`)

const Footer = () => (
  <Container>
    <Wrapper>
      <Title>Footer Component</Title>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/form'>Form Example</Link>
    </Wrapper>
  </Container>
)

export default Footer

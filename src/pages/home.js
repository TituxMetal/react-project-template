import React from 'react'
import { Link } from 'react-router-dom'

import { Button, Container, Text, Title } from '~/components'

const HomePage = () => (
  <Container>
    <Title success>Home Page</Title>
    <Text spaced info>
      Welcome to the React Project Template
    </Text>
    <Text spaced>
      You can visit the form page to see a signup form that uses React Hook Form library and Yup for
      the validation.
    </Text>
    <Button spaced='true' as={Link} to='/form'>
      Go to form page
    </Button>
  </Container>
)

export default HomePage

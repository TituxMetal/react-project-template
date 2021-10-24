import React, { forwardRef } from 'react'
import tw, { styled } from 'twin.macro'

const Button = styled.button(() => [
  tw`py-1 px-4 mt-2 bg-gray-900 border-2 rounded-lg`,
  tw`hover:bg-green-800`,
  tw`disabled:(bg-gray-400 cursor-not-allowed)`
])
const Container = styled.form(
  tw`max-w-screen-md my-4 mx-auto p-4 bg-gray-600 border-2 border-green-400 rounded-lg shadow-inner`
)
const Control = styled.div(({ error }) => [tw`mb-4`, error && tw`text-red-300`])
const Input = styled.input(({ error }) => [
  tw`p-2 my-2 w-full rounded-md border-2 border-gray-100 bg-transparent placeholder:text-blue-200`,
  error && tw`border-red-300 text-red-300 font-bold focus:(text-orange-300 border-orange-300)`
])
const Label = styled.label(({ error }) => [tw`mr-4 font-bold`, error && tw`text-red-300`])
const Message = styled.p(({ error, info, success }) => [
  tw`py-1 font-bold`,
  error && tw`text-red-300`,
  info && tw`text-blue-300`,
  success && tw`text-green-300`
])
const Title = styled(Message)([tw`text-3xl text-center`])

const Form = forwardRef(({ children, ...rest }, ref) => {
  Form.displayName = 'Form'

  return (
    <Container {...rest} ref={ref}>
      {children}
    </Container>
  )
})

Form.Button = forwardRef(({ children, ...rest }, ref) => {
  Form.Button.displayName = 'FormButton'

  return (
    <Button {...rest} ref={ref}>
      {children}
    </Button>
  )
})

Form.Control = forwardRef(({ children, ...rest }, ref) => {
  Form.Control.displayName = 'FormControl'

  return (
    <Control {...rest} ref={ref}>
      {children}
    </Control>
  )
})

Form.Input = forwardRef(({ type, name, ...rest }, ref) => {
  Form.Input.displayName = 'FormInput'

  return <Input {...rest} type={type} name={name} id={name} ref={ref} />
})

Form.Message = ({ children, ...rest }) => {
  Form.Message.displayName = 'FormMessage'

  return <Message {...rest}>{children}</Message>
}

Form.Label = ({ name, children, ...rest }) => {
  Form.Label.displayName = 'FormLabel'

  return (
    <Label htmlFor={name} {...rest}>
      {children}
    </Label>
  )
}

Form.Title = ({ children, ...rest }) => {
  Form.Title.displayName = 'FormTitle'

  return <Title {...rest}>{children}</Title>
}

export default Form

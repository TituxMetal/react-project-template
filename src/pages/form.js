import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'

import { Form, Field, Title, Text } from '~/components'
import { formFields, formSchema } from '~/config'

const FormPage = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: { userName: '', fullName: '', email: '', password: '', passwordConfirm: '' },
    mode: 'all',
    resolver: yupResolver(formSchema)
  })

  return (
    <Form onSubmit={handleSubmit(data => console.log(data))}>
      <Title info>React Hook Form</Title>
      <Text spaced success>
        Form using react hook form library with Yup validation and custom form components
      </Text>
      {formFields.map(({ name, type, label, placeholder }, index) => (
        <Field
          key={index}
          control={control}
          name={name}
          type={type}
          label={label}
          placeholder={placeholder}
        />
      ))}
      <Form.Button type='submit'>Submit</Form.Button>
    </Form>
  )
}

export default FormPage

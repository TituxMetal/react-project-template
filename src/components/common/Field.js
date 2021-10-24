import React from 'react'
import { useController } from 'react-hook-form'

import Form from './Form'

const Field = ({ control, name, type, label, ...rest }) => {
  Field.displayName = 'Field'

  const {
    field,
    fieldState: { invalid, error }
  } = useController({ name, control })

  return (
    <Form.Control error={invalid}>
      <Form.Label error={invalid} htmlFor={name}>
        {label}
      </Form.Label>
      <Form.Input error={invalid} type={type} name={name} id={name} {...rest} {...field} />
      {error && <Form.Message error>{error.message}</Form.Message>}
    </Form.Control>
  )
}

export default Field

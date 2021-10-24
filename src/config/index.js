import * as yup from 'yup'

export const formFields = [
  {
    name: 'userName',
    type: 'text',
    label: 'User Name',
    placeholder: 'Your Username'
  },
  {
    name: 'fullName',
    type: 'text',
    label: 'Full Name',
    placeholder: 'Your full name'
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Your email'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Your password'
  },
  {
    name: 'passwordConfirm',
    type: 'password',
    label: 'Password Confirm',
    placeholder: 'Repeat password'
  }
]

export const formSchema = yup.object().shape({
  userName: yup.string().lowercase().required().label('User Name'),
  fullName: yup.string().label('Full Name'),
  email: yup.string().email().required().label('Email'),
  password: yup.string().min(8).max(96).required().label('Password'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], "Passwords don't match!")
    .required('Required')
})

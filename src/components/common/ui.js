import tw, { styled } from 'twin.macro'

export const Button = styled.button(({ spaced }) => [
  tw`rounded-md m-0 px-8 py-4 font-bold no-underline transition width[max-content]`,
  tw` text-center text-blue-300 bg-orange-700 hover:bg-orange-800`,
  spaced && tw`m-4`
])
export const Container = styled.div(tw`flex flex-col bg-gray-600 max-w-screen-md m-auto py-4`)
export const Text = styled.p(({ error, info, success, spaced }) => [
  tw`my-2 text-gray-100`,
  spaced && tw`p-4`,
  error && tw`text-red-300`,
  info && tw`text-blue-300`,
  success && tw`text-green-300`
])

export const Title = styled.h1(({ error, info, success }) => [
  tw`my-2 text-gray-100 text-center font-bold text-4xl`,
  error && tw`text-red-300`,
  info && tw`text-blue-300`,
  success && tw`text-green-300`
])

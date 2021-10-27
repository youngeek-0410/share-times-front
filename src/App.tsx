import * as React from 'react'
import AppRouter from 'AppRouter'

import { ChakraProvider } from '@chakra-ui/react'

import Header from 'common/components/Header'

function App() {
  return (
    <ChakraProvider>
      <Header />
      <AppRouter />
    </ChakraProvider>
  )
}

export default App

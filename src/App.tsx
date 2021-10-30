import * as React from 'react'
import AppRouter from 'AppRouter'

import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <AppRouter />
    </ChakraProvider>
  )
}

export default App

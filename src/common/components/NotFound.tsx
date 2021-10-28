import { VStack, Text } from '@chakra-ui/layout'

import koyoLogo from 'assets/koyo_logo.jpg'

const NotFound = () => {
  return (
    <VStack spacing="20px" padding="20px">
      <img src={koyoLogo} alt="こうよう祭の写真" width="100px" />
      <Text color="tomato">404 Not Found</Text>
    </VStack>
  )
}

export default NotFound

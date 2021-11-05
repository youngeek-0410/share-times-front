import { VStack, Heading, Text, Button } from '@chakra-ui/react'
import isAuthenticated from 'common/utils/isAuthenticated'
import {
  currentTimesPath,
  loginFormPath,
  submitWaitingTimeFormPath,
} from 'common/utils/paths'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <VStack spacing="30px" padding="30px">
      <Heading as="h1" size="2xl">
        Share Times
      </Heading>
      <Text>展示の待ち時間を報告しよう！</Text>
      {isAuthenticated() ? (
        <Button colorScheme="teal" as="a" href={submitWaitingTimeFormPath}>
          報告する
        </Button>
      ) : (
        <Button colorScheme="teal" as="a" href={loginFormPath}>
          ログイン
        </Button>
      )}
      <Button>
        <Link to={currentTimesPath}>待ち時間一覧を見る</Link>
      </Button>
    </VStack>
  )
}

export default Home

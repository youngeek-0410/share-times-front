import {
  VStack,
  Box,
  Spacer,
  Text,
  Heading,
  Button,
  Spinner,
} from '@chakra-ui/react'
import { client } from 'common/api/client'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { WaitingTimeHistory } from 'common/types/WaitingTimeHistories'
import { submitWaitingTimeFormPath } from 'common/utils/paths'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ja'
import isAuthenticated from 'common/utils/isAuthenticated'

dayjs.locale('ja')
dayjs.extend(relativeTime)

const CuurentTimes: React.FC = () => {
  const [waitingTimeHistories, setWaitingTimeHistories] = useState<
    WaitingTimeHistory[]
  >([] as WaitingTimeHistory[])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  const getWaitingTimeHistories = () => {
    client
      .get<{ string: WaitingTimeHistory }>(
        '/api/waiting_time_history?only-latest=true',
      )
      .then((res) => {
        setLoading(false)
        setWaitingTimeHistories(Object.values(res.data))
      })
      .catch(() => {
        setLoading(false)
        setError('データの読み込みに失敗しました')
      })
  }

  useEffect(() => {
    getWaitingTimeHistories()
  }, [])

  if (loading) {
    return <Spinner />
  }
  if (error) {
    return (
      <Text color="tomato" textAlign="center">
        {error}
      </Text>
    )
  }

  return (
    <VStack spacing={4} paddingY="4">
      <Heading size="md">現在の待ち時間一覧</Heading>
      {isAuthenticated() && (
        <Button>
          <Link to={submitWaitingTimeFormPath}>待ち時間を報告する</Link>
        </Button>
      )}
      {waitingTimeHistories.map((waitingTimeHistory: WaitingTimeHistory) => (
        <Box
          key={waitingTimeHistory.uuid}
          display="flex"
          alignItems="baseline"
          width="90%"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Box paddingX="6" paddingY="3">
            <Box>
              <Text fontSize="lg" fontWeight="semibold" as="h4">
                {waitingTimeHistory.organization.name}
              </Text>
            </Box>

            <Box as="span" color="gray.600" fontSize="xs">
              {waitingTimeHistory.created_at &&
                dayjs(waitingTimeHistory.created_at).fromNow() + 'に更新'}
            </Box>
          </Box>
          <Spacer></Spacer>
          <Box marginY="auto" padding="4" marginRight="2">
            {waitingTimeHistory.waiting_time ? (
              <Text fontSize="xl" fontWeight="semibold">
                {waitingTimeHistory.waiting_time}分
              </Text>
            ) : (
              <Text>報告なし</Text>
            )}
          </Box>
        </Box>
      ))}
    </VStack>
  )
}
export default CuurentTimes

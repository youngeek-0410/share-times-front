import {
  VStack,
  HStack,
  Box,
  Spacer,
  Heading,
  Text,
  Input,
  Button,
  useToast,
} from '@chakra-ui/react'
import { AxiosError } from 'axios'
import { authorizedClient } from 'common/api/client'
import { WaitingTimeHistory } from 'common/types/WaitingTimeHistories'
import { useState } from 'react'

const SubmitWaitingTimeForm = () => {
  const [waitingTime, setWaitingTime] = useState<number>(0)
  const [error, setError] = useState<string[]>([])

  const toast = useToast()

  const handleSubmit = () => {
    authorizedClient
      .post<WaitingTimeHistory>('api/waiting_time_history/', {
        waiting_time: waitingTime,
      })
      .then((res) => {
        setError([])
        const response = res.data
        toast({
          title: '送信しました！',
          description: `${response.organization.name}の待ち時間：${response.waiting_time}分`,
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      })
      .catch((e: AxiosError) => {
        e.response
          ? setError(e.response.data.waiting_time)
          : setError(['送信に失敗しました。'])
      })
  }

  return (
    <VStack spacing="15px">
      <Heading marginTop="20px" size="md">
        待ち時間を送信
      </Heading>
      <Heading size="lg">{localStorage.getItem('username')}</Heading>
      <Box width="200px">
        <HStack>
          <Spacer />
          <Text>現在</Text>
          <Input
            id="waiting_time"
            size="lg"
            width="70px"
            type="number"
            defaultValue={waitingTime}
            min={0}
            max={180}
            onChange={(e) => setWaitingTime(parseInt(e.target.value))}
          />
          <Text>分　</Text>
          <Spacer />
        </HStack>
      </Box>
      {error.length &&
        error.map((e, index) => (
          <Text key={index} fontSize="sm" color="tomato">
            {e}
          </Text>
        ))}
      <Spacer height="5px" />
      <Button colorScheme="teal" size="md" onClick={handleSubmit}>
        送信
      </Button>
    </VStack>
  )
}

export default SubmitWaitingTimeForm

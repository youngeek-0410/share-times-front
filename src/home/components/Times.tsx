import { useEffect, useState } from 'react'
import { client } from 'common/api/client'
import { WaitingTimeHistory } from 'common/types/WaitingTimeHistories'

import { Spinner } from '@chakra-ui/spinner'

import { Text } from '@chakra-ui/layout'
import SlidableContents from './SlidableContents'
import useInterval from 'common/hooks/useInterval'

const Times = () => {
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

  useInterval(() => {
    getWaitingTimeHistories()
  }, Number(process.env.REACT_APP_REFRESH_INTERVAL_SECONDS) * 1000)

  if (loading) return <Spinner />
  if (error)
    return (
      <Text color="tomato" textAlign="center" marginTop="200px">
        {error}
      </Text>
    )

  return <SlidableContents waitingTimeHistories={waitingTimeHistories} />
}

export default Times

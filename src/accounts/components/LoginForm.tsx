import { useEffect, useState } from 'react'
import {
  Heading,
  Text,
  VStack,
  Box,
  Input,
  Button,
  Select,
  useToast,
} from '@chakra-ui/react'

import { Organization } from 'common/types/WaitingTimeHistories'

import { client } from 'common/api/client'
import { AxiosError } from 'axios'
import { submitWaitingTimeFormPath } from 'common/utils/paths'
import { useHistory } from 'react-router'

const LoginForm = () => {
  const [organizationName, setOrganizationName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [organizations, setOrganizations] = useState<Organization[]>([
    {
      name: '',
      uuid: '',
      description: '',
      type: 'CLUB',
    },
  ])

  const [error, setError] = useState<string>('')
  const [organizationError, setOrganizationError] = useState<string>('')

  const history = useHistory()
  const toast = useToast()

  useEffect(() => {
    client
      .get<Organization[]>('api/organization')
      .then((res) => {
        setOrganizationError('')
        setOrganizations(res.data)
      })
      .catch(() => {
        setOrganizationError(
          '展示名を読み込めませんでした。時間をおいて再読み込みしてください。',
        )
      })
  }, [])

  const handleSubmit = () => {
    client
      .post<{ token: string }>('/api-token-auth/', {
        username: organizationName,
        password: password,
      })
      .then((res) => {
        setError('')
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('username', organizationName)
        toast({
          title: 'ログインしました！',
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        history.push(submitWaitingTimeFormPath)
      })
      .catch((e: AxiosError) => {
        setError('パスワードが間違っています')
      })
    clearInputs()
  }

  const clearInputs = () => {
    setPassword('')
  }

  return (
    <>
      <VStack spacing="20px">
        <Heading marginTop="20px" size="lg">
          ログインページ
        </Heading>
        <Box width="200px">
          <label htmlFor="organization">
            <Text fontSize="large">展示名</Text>
          </label>
          <Select
            id="organization"
            onChange={(e) => setOrganizationName(e.target.value)}
            placeholder="選択する"
          >
            {organizations.map((organization: Organization) => (
              <option key={organization.uuid} value={organization.name}>
                {organization.name}
              </option>
            ))}
          </Select>
          {organizationError && (
            <Text fontSize="sm" color="tomato">
              {organizationError}
            </Text>
          )}
        </Box>
        <Box width="200px">
          <label htmlFor="password">
            <Text fontSize="large">パスワード</Text>
          </label>
          <Input
            id="password"
            placeholder="パスワードを入力"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <Text fontSize="sm" color="tomato">
              {error}
            </Text>
          )}
        </Box>
        <Button colorScheme="teal" size="md" onClick={handleSubmit}>
          送信
        </Button>
      </VStack>
    </>
  )
}

export default LoginForm

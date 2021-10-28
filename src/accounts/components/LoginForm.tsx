import { useEffect, useState } from 'react'
import {
  Heading,
  Text,
  VStack,
  Box,
  Input,
  Button,
  Select,
} from '@chakra-ui/react'

import { Organization } from 'types/WaitingTimeHistories'

import { client } from 'services/api/client'
import { AxiosError } from 'axios'
import { LoginErrors } from 'types/LoginErrors'

const LoginForm = () => {
  const [organizationName, setOrganizationName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [organizations, setOrganizations] = useState<Organization[]>([])

  const [error, setError] = useState<string>('')
  const [organizationError, setOrganizationError] = useState<string>('')

  useEffect(() => {
    client
      .get<Organization[]>('api/organization')
      .then((res) => {
        setOrganizationError('')
        setOrganizations(res.data)
      })
      .catch((e) => {
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
      })
      .catch((e: AxiosError<LoginErrors>) => {
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

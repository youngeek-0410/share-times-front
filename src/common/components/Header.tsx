import { FC } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

import {
  Heading,
  Flex,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import isAuthenticated from 'common/utils/isAuthenticated'
import {
  currentTimesPath,
  homePath,
  loginFormPath,
  submitWaitingTimeFormPath,
} from 'common/utils/paths'

const Header: FC = () => {
  const history = useHistory()
  const handleLogin = () => {
    history.push(loginFormPath)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    window.location.href = homePath
  }

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={4}
      bg="teal.500"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={'tighter'}>
          <a href={homePath}>ShareTimes</a>
        </Heading>
      </Flex>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          colorScheme="teal"
        />
        <MenuList>
          {isAuthenticated() ? (
            <>
              <MenuItem color="black" onClick={handleLogout}>
                ログアウトする
              </MenuItem>
              <Link to={submitWaitingTimeFormPath}>
                <MenuItem bgColor="teal.400">待ち時間を送信</MenuItem>
              </Link>
            </>
          ) : (
            <MenuItem color="black" onClick={handleLogin}>
              ログインする
            </MenuItem>
          )}
          <Link to={currentTimesPath}>
            <MenuItem color="black">待ち時間一覧</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default Header

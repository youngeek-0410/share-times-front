import { FC } from 'react'
import { useHistory } from 'react-router'

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
import { loginFormPath } from 'common/utils/paths'

const Header: FC = () => {
  const history = useHistory()
  const handleLogin = () => {
    history.push(loginFormPath)
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
          ShareTimes
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
            <MenuItem color="black">ログアウトする</MenuItem>
          ) : (
            <MenuItem color="black" onClick={handleLogin}>
              ログインする
            </MenuItem>
          )}
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default Header

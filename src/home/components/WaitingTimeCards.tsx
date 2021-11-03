import { Box, Image, Badge, Spacer, Text, Center } from '@chakra-ui/react'

import koyoLogo from 'assets/koyo_logo.jpg'
import { WaitingTimeHistory } from 'common/types/WaitingTimeHistories'
import { getBgColor, getJapaneseName } from 'common/utils/dict'

const WaitingTimeCards = (props: WaitingTimeHistory) => {
  return (
    <Center
      height="100vh"
      backgroundColor={getBgColor(props.organization.type)}
    >
      <Box
        width="50%"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        backgroundColor="white"
        paddingTop="10"
      >
        <Image src={koyoLogo} alt="koyo_logo" marginX="auto" />
        <Box paddingX="16" paddingY="8">
          <Box>
            <Badge borderRadius="full" px="2" colorScheme="teal" fontSize="lg">
              {getJapaneseName(props.organization.type)}
            </Badge>
          </Box>
          <Box display="flex" alignItems="baseline">
            <Box
              mt="1"
              fontWeight="semibold"
              fontSize="6xl"
              as="h1"
              isTruncated
            >
              {props.organization.name}
            </Box>
            <Spacer />
            <Box display="flex" alignItems="baseline" fontWeight="semibold">
              <Text fontSize="8xl">{props.waiting_time}</Text>
              <Box as="span" color="gray.600" fontSize="lg" marginLeft="10px">
                分待ち
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Center>
  )
}

export default WaitingTimeCards

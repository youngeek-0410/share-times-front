import { Box, Image, Badge, Spacer, Text, Center } from '@chakra-ui/react'

import { WaitingTimeHistory } from 'common/types/WaitingTimeHistories'
import { getBgColor, getJapaneseName } from 'common/utils/dict'
import getPhotoPath from 'common/utils/photoPaths'

const WaitingTimeCards = (props: WaitingTimeHistory) => {
  return (
    <Center
      height="100vh"
      backgroundColor={getBgColor(props.organization.type)}
    >
      <Box
        height="70%"
        minWidth="50%"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        backgroundColor="white"
        marginY="auto"
        paddingTop="4rem"
      >
        <Image
          src={getPhotoPath(props.organization.name)}
          alt="logo"
          marginX="auto"
          height="60%"
        />
        <Box paddingX="16" paddingY="8">
          <Box>
            <Badge borderRadius="full" px="2" colorScheme="teal" fontSize="xl">
              {getJapaneseName(props.organization.type)}
            </Badge>
          </Box>
          <Box display="flex" alignItems="baseline">
            <Box
              mt="1"
              fontWeight="semibold"
              fontSize="7xl"
              as="h1"
              width="auto"
            >
              {props.organization.name}
            </Box>
            <Spacer minWidth="40px" />
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

import {
  WaitingTimeHistories,
  WaitingTimeHistory,
} from 'common/types/WaitingTimeHistories'
import { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import WaitingTimeCards from './WaitingTimeCards'

const AutoSwipeableViews = autoPlay(SwipeableViews)

type Props = {
  waitingTimeHistories: WaitingTimeHistories
}

const SlidableContents: React.FC<Props> = (props) => {
  const { waitingTimeHistories } = props
  const [index, setIndex] = useState<number>(0)
  const handleChangeIndex = (index: number) => setIndex(index)
  return (
    <AutoSwipeableViews index={index} onChangeIndex={handleChangeIndex}>
      {waitingTimeHistories.map((waitingTimeHistory: WaitingTimeHistory) => {
        return (
          <WaitingTimeCards
            key={waitingTimeHistory.uuid}
            {...waitingTimeHistory}
          />
        )
      })}
    </AutoSwipeableViews>
  )
}

export default SlidableContents

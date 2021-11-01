import { submitWaitingTimeFormPath } from 'common/utils/paths'
import { useEffect } from 'react'
import { useHistory } from 'react-router'

const Home = () => {
  const history = useHistory()
  useEffect(() => {
    history.push(submitWaitingTimeFormPath)
  }, [history])
  return <p>this is home.</p>
}

export default Home

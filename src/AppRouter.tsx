import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import {
  homePath,
  loginFormPath,
  submitWaitingTimeFormPath,
} from 'common/utils/paths'

import Home from 'home/components/Home'
import LoginForm from 'accounts/components/LoginForm'
import SubmitWaitingTimeForm from 'waitingTime/components/SubmitWaitingTimeForm'
import NotFound from 'common/components/NotFound'

const AppRouter: React.FC = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path={homePath} exact component={Home}></Route>
        <Route path={loginFormPath} exact component={LoginForm}></Route>
        <Route
          path={submitWaitingTimeFormPath}
          exact
          component={SubmitWaitingTimeForm}
        ></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default AppRouter

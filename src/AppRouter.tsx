import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import {
  homePath,
  timesPath,
  loginFormPath,
  submitWaitingTimeFormPath,
  currentTimesPath,
} from 'common/utils/paths'

import Header from 'common/components/Header'

import Home from 'home/components/Home'
import Times from 'home/components/Times'
import CurrentTimes from 'home/components/CurrentTimes'
import LoginForm from 'accounts/components/LoginForm'
import SubmitWaitingTimeForm from 'waitingTime/components/SubmitWaitingTimeForm'
import NotFound from 'common/components/NotFound'
import isAuthenticated from 'common/utils/isAuthenticated'

const AppRouter: React.FC = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Switch>
        <Route exact path={homePath} component={Home} />
        <Route path={timesPath} exact component={Times}></Route>
        <Route path={currentTimesPath} exact component={CurrentTimes}></Route>
        <Route path={loginFormPath} exact component={LoginForm}></Route>
        <Route
          path={submitWaitingTimeFormPath}
          exact
          render={() =>
            isAuthenticated() ? (
              <SubmitWaitingTimeForm />
            ) : (
              <Redirect to={loginFormPath} />
            )
          }
        ></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default AppRouter

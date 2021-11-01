import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import {
  homePath,
  loginFormPath,
  submitWaitingTimeFormPath,
} from 'common/utils/paths'

import Header from 'common/components/Header'

import Home from 'home/components/Home'
import LoginForm from 'accounts/components/LoginForm'
import SubmitWaitingTimeForm from 'waitingTime/components/SubmitWaitingTimeForm'
import NotFound from 'common/components/NotFound'
import isAuthenticated from 'common/utils/isAuthenticated'

const AppRouter: React.FC = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Switch>
        <Route path={homePath} exact component={Home}></Route>
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

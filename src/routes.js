import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Logon from './pages/Logon'
import NewAccount from './pages/NewAccount'
import Office from './pages/Office'
import Graphic from './pages/Graphic'

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/logon' component={Logon} />
        <Route path='/new_account' component={NewAccount} />
        <Route path='/office' component={Office} />
        <Route path='/graphic' component={Graphic} />
      </Switch>
    </BrowserRouter>
  )
}

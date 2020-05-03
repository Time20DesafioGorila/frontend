import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Logon from './pages/Logon'
import NewAccount from './pages/NewAccount'
import Office from './pages/Office'
import Graphic from './pages/Graphic'
import Matrix from './pages/Matrix'
import Suitability from './pages/Suitability'
import Question1Suitability from './pages/Question1Suitability'
import Question2Suitability from './pages/Question2Suitability'
import Question3Suitability from './pages/Question3Suitability'
import Question4Suitability from './pages/Question4Suitability'
import Question5Suitability from './pages/Question5Suitability'
import Question6Suitability from './pages/Question6Suitability'
import Question7Suitability from './pages/Question7Suitability'
import Question8Suitability from './pages/Question8Suitability'
import Question9Suitability from './pages/Question9Suitability'
import Suitabilityresult from './pages/Suitabilityresult'

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/logon' component={Logon} />
        <Route path='/new_account' component={NewAccount} />
        <Route path='/office' component={Office} />
        <Route path='/graphic' component={Graphic} />
        <Route path='/matrix' component={Matrix} />
        <Route path='/suitability' component={Suitability} />
        <Route path='/question-1-suitability' component={Question1Suitability} />
        <Route path='/question-2-suitability' component={Question2Suitability} />
        <Route path='/question-3-suitability' component={Question3Suitability} />
        <Route path='/question-4-suitability' component={Question4Suitability} />
        <Route path='/question-5-suitability' component={Question5Suitability} />
        <Route path='/question-6-suitability' component={Question6Suitability} />
        <Route path='/question-7-suitability' component={Question7Suitability} />
        <Route path='/question-8-suitability' component={Question8Suitability} />
        <Route path='/question-9-suitability' component={Question9Suitability} />
        <Route path='/suitabilityresult' component={Suitabilityresult} />
      </Switch>
    </BrowserRouter>
  )
}

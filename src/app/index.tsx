
import * as React from 'react'
import { Router, Route, Switch } from 'react-router'
import * as ReactDOM from 'react-dom'
import { useStrict } from 'mobx'
import { Provider } from 'mobx-react'

import 'normalize.css/normalize.css'
import './styles/global.scss'

import storeNames from './stores/storeNames'
import CasesStore from './stores/CasesStore'
import { createBrowserHistory } from 'history'
import ApiManager from './services/ApiManager'
import CasesPage from './containers/CasesPage'
import CasePage from './containers/CasePage'
import config from './config'
import { RouterStore } from 'app/stores/RouterStore'

// enable MobX strict mode
useStrict(true)

const history = createBrowserHistory()

const stores = {
  [storeNames.CASES_STORE]: new CasesStore(new ApiManager(config.API_URL)),
  [storeNames.ROUTER_STORE]: new RouterStore(history),
}

const App = () => {
  return (
    <Provider {...stores}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={CasesPage} />
          <Route path="/case/:id" component={CasePage} />
        </Switch>
      </Router>
    </Provider >
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

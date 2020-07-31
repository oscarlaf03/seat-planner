import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
const store = configureStore();

import HelloWorld from "./HelloWorld"
class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path ="/" render={() => ('Home Alone 2 the comeback') }/>
            <Route path ="/hello" render={() => <HelloWorld greeting=" My  Dear Friend" />}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App

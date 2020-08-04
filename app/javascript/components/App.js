import React from "react"
// import PropTypes from "prop-types"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import { Container } from 'semantic-ui-react'
const store = configureStore();

import SeatsForm from "./SeatsForm";
class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Container textAlign='center'>
                <Route exact path ="/" render={() => <SeatsForm /> }/>
            </Container>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App

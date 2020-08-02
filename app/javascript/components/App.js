import React from "react"
// import PropTypes from "prop-types"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
const store = configureStore();

import SeatsForm from "./SeatsForm";
class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <div className='ui text  center aligned container'>
              <Route exact path ="/" render={() => <SeatsForm/> }/>
            </div>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App

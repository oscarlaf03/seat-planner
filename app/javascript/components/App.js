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
            <div className='ui text  center aligned container' style={{height:'200px'}}>
              <div style={{margin:'0',position:"absolute",top:'15%'}}>
                <Route exact path ="/" render={() => <SeatsForm /> }/>
              </div>
            </div>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App

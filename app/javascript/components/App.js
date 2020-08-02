import React from "react"
// import PropTypes from "prop-types"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
const store = configureStore();

import SeatsForm from "./SeatsForm";
import SeatsList from "./SeatsList";
class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
        {/* <SeatsList/> */}
          <Switch>
            <div className='ui text  center aligned container'>
              <Route exact path ="/" render={() => <SeatsForm/> }/>
              {/* <Route path ="/hello" render={() => <HelloWorld greeting=" My  Dear Friend" />}/> */}
            </div>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App

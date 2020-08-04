import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "../configureStore";
import MainComponent from "./MainComponent";

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <MainComponent />} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';

import AuthLayout from "layouts/Auth.js";
import RtlLayout from "layouts/RTL.js";
import AdminLayout from "containers/layouts/AdminContainer";

import "assets/scss/material-dashboard-pro-react.scss?v=1.8.0";
import "assets/fonts/stylesheet.css";

const hist = createBrowserHistory();
const store = configureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={hist}>
          <Switch>
            <Route path="/rtl" component={RtlLayout} />
            <Route path="/auth" component={AuthLayout} />
            <Route path="/app" component={AdminLayout} />
            <Redirect from="/" to="/app/dashboard" />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
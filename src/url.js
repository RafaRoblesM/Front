import React, { Component } from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


import App from './App';
import getOne from './getone';



class AppRoutes extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <div>
            <Switch>
              <Route
                path="/"
                exact
                component={App}
              />
              <Route
                path="/get/:id"
                exact
                strict
                component={getOne}
              />
              <Redirect to="/" />
            </Switch>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default AppRoutes;
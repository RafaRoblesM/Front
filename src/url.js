import React, { Component } from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


import App from './App';
import more from './getone';
import Create from './components/create';
import Edit from './components/edit';



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
                component={more}
              />
              <Route
                path="/post"
                exact
                strict
                component={Create}
              />
               <Route
                path="/edit/:id"
                exact
                strict
                component={Edit}
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
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import components/containers
import NotFound from './NotFound';
import Home from './Home';
import Page from './Page';
import Redux from '../containers/Redux';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/page/:pageNumber" component={Page} />
          <Route path="/redux" component={Redux} />
          <Route path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
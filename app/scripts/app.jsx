import React from 'react/addons';
import Router from 'react-router';
import Header from './components/header';
import Facts from './components/facts';
import Home from './views/home';
import Ask from './views/ask';
import NotFound from './views/not-found';

import 'svg4everybody';
import './fonts.js';

const {
  Route,
  DefaultRoute,
  NotFoundRoute,
  RouteHandler,
  HistoryLocation
} = Router;

const App = React.createClass({
  propTypes: {},

  render() {
    return (
      <div>
        <Header />
        <RouteHandler />
        <Facts />
      </div>
    );
  }
});

const routes = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Home} />
    <Route path="/pitaj" handler={Ask} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);

Router.run(routes, HistoryLocation, Handler => {
  React.render(<Handler />, document.getElementById('content'));
});

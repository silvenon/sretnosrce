import React from 'react/addons';
import Router from 'react-router';
import Home from './views/home';

import 'svg4everybody';
import './fonts.js';

const {
  Route,
  DefaultRoute,
  RouteHandler
} = Router;

const App = React.createClass({
  propTypes: {},

  render() {
    return <RouteHandler />;
  }
});

const routes = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Home} />
  </Route>
);

Router.run(routes, Handler => {
  React.render(<Handler />, document.getElementById('content'));
});

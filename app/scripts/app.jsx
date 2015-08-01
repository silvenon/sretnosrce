import React from 'react/addons';
import Router from 'react-router';
import Header from './components/header';
import Home from './views/home';
import Ask from './views/ask';

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
    return (
      <div>
        <Header />
        <RouteHandler />
      </div>
    );
  }
});

const routes = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Home} />
    <Route path="/pitaj" handler={Ask} />
  </Route>
);

Router.run(routes, Handler => {
  React.render(<Handler />, document.getElementById('content'));
});

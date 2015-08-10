import React from 'react/addons';
import velocity from 'velocity-animate';
import uniqueRandom from 'unique-random';
import fetch from '../helpers/fetch';
import 'es6-promise';

export default React.createClass({
  getInitialState() {
    return {
      facts: [],
      hidden: true
    };
  },

  // defined when facts are fetched
  random() {
  },

  iterate() {
    const container = React.findDOMNode(this.refs.container);

    velocity(container, {opacity: 0}, 200)
      .then(() => {
        this.setState({
          fact: this.state.facts[this.random()]
        });
        return velocity(container, {opacity: 1}, 200);
      });
  },

  componentDidMount() {
    fetch('/facts.json')
      .then(res => res.json())
      .then(json => {
        this.random = uniqueRandom(0, json.data.length - 1);
        this.setState({
          facts: json.data,
          fact: json.data[this.random()]
        });
        setInterval(this.iterate, 7500);
      });
  },

  render() {
    let content = null;

    if (this.state.facts.length) {
      content = (
        <div ref="container" className="facts">
          <strong>Zanimljivost:</strong>
          <span className="facts-content">
            {this.state.fact}
          </span>
        </div>
      );
    }

    return content;
  }
});

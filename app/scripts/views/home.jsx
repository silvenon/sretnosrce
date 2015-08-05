import React from 'react/addons';
import fetch from '../helpers/fetch';

export default React.createClass({
  getInitialState() {
    return {
      content: ''
    };
  },

  componentDidMount() {
    fetch('/content/home.html')
      .then(res => res.text())
      .then(text => {
        this.setState({content: text});
      });
  },

  render() {
    return (
      <main className="main">
        <div
          className="container text"
          dangerouslySetInnerHTML={{__html: this.state.content}} />
      </main>
    );
  }
});

import React from 'react/addons';

export default React.createClass({
  getInitialState() {
    return {
      content: 'U 9 zemalja legalno je ubiti ženu zbog varanja.'
    };
  },

  render() {
    return (
      <div className="facts">
        <div className="container">
          <div className="facts-inner">
            <strong>Zanimljivost:</strong>
            <span className="facts-content">{this.state.content}</span>
          </div>
        </div>
      </div>
    );
  }
});

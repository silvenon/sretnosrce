import React from 'react/addons';
import Icon from '../components/icon';

export default React.createClass({
  render() {
    return (
      <main className="main">
        <div className="container text">
          <h2>
            <span>Stranica nije pronađena</span>
            <Icon
              symbol="heart-broken"
              role="presentation"
              width="32"
              heght="32" />
          </h2>
        </div>
      </main>
    );
  }
});

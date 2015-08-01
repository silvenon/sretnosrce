import React from 'react/addons';
import {Link} from 'react-router';
import Icon from '../components/icon';

export default React.createClass({
  render() {
    return (
      <header className="header">
        <div className="container">
          <Link to="/" className="header-title">
            <span>Sretno</span>
            <Icon
              symbol="heart"
              role="presentation"
              width="64"
              height="64" />
            <span>Srce</span>
          </Link>
          <nav className="navigation">
            <Link className="btn btn-inverse-primary navigation-item" to="/pitaj">
              <span>Pitaj me nešto</span>
              <Icon
                symbol="arrow-right"
                role="presentation"
                width="20"
                height="32" />
            </Link>
          </nav>
        </div>
      </header>
    );
  }
});

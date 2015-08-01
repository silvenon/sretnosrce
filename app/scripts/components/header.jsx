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
            <Link className="navigation-item" to="/pitaj">
              <Icon
                symbol="question"
                role="presentation"
                width="24"
                height="24" />
              <span>Pitaj</span>
            </Link>
          </nav>
        </div>
      </header>
    );
  }
});

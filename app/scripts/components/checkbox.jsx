import React from 'react/addons';
import Formsy from 'formsy-react';
import classNames from 'classnames';

export default React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    hidden: React.PropTypes.bool,
    label: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  },

  mixins: [Formsy.Mixin],

  changeValue(event) {
    this.setValue(event.target.checked);
  },

  render() {
    return (
      <div
        className={classNames('form-group', this.props.className, {
          'required': this.showRequired(),
          'error': this.showError()
        })}
        hidden={this.props.hidden}>
        <label
          className="form-label form-checkbox">
          <input
            ref="input"
            name={this.props.name}
            type="checkbox"
            value={this.getValue()}
            onChange={this.changeValue} />
          {this.props.label}
        </label>
        <div className="form-feedback">
          {this.getErrorMessage()}
        </div>
      </div>
    );
  }
});

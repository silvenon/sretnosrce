import React from 'react/addons';
import Formsy from 'formsy-react';
import classNames from 'classnames';

export default React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    hidden: React.PropTypes.bool,
    label: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    rows: React.PropTypes.number,
    type: React.PropTypes.string,
    value: React.PropTypes.string
  },

  mixins: [Formsy.Mixin],

  changeValue(event) {
    this.setValue(event.target.value);
  },

  render() {
    let field;

    if (this.props.type === 'textarea') {
      field = (
        <textarea
          ref="input"
          id={this.props.name}
          name={this.props.name}
          className="form-control"
          value={this.getValue()}
          placeholder={this.props.placeholder}
          onChange={this.changeValue}
          rows={this.props.rows} />
      );
    } else {
      field = (
        <input
          ref="input"
          id={this.props.name}
          name={this.props.name}
          className="form-control"
          type={this.props.type}
          value={this.getValue()}
          placeholder={this.props.placeholder}
          onChange={this.changeValue} />
      );
    }

    return (
      <div
        className={classNames('form-group', this.props.className, {
          'required': this.showRequired(),
          'error': this.showError()
        })}
        hidden={this.props.hidden}>
        <label
          className="form-label"
          htmlFor={this.props.name}>
          {this.props.label}
        </label>
        <div className="form-control-outer">
          {field}
          <div className="form-feedback">
            {this.getErrorMessage()}
          </div>
        </div>
      </div>
    );
  }
});

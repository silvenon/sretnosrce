import React from 'react/addons';
import {Form} from 'formsy-react';
import Field from './field';
import fetch from '../helpers/fetch';
import params from 'query-params';
import Icon from './icon';
import Loader from './loader';

export default React.createClass({
  getInitialState() {
    return {
      canSubmit: true,
      loaded: true
    };
  },

  enableSubmit() {
    this.setState({canSubmit: true});
  },

  disableSubmit() {
    this.setState({canSubmit: false});
  },

  send(model, resetForm, invalidateForm) {
    this.setState({
      loaded: false
    });

    fetch('http://formspree.io/matija.marohnic@gmail.com', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: params.encode(model)
    }).then(res => {
      this.setState({
        status: true,
        loaded: true
      });
    }).catch(res => {
      this.setState({
        status: false,
        loaded: true
      });
    });
  },

  render() {
    let status;

    if (!this.state.loaded) {
      status = (
        <div className="form-status loading">
          <Loader />
        </div>
      );
    } else if (this.state.status === true) {
      status = (
        <div className="form-status success">
          <Icon
            symbol="check"
            role="img"
            title="Uspjeh"
            width="24"
            height="32" />
        </div>
      );
    } else if (this.state.status === false) {
      status = (
        <div className="form-status error">
          <Icon
            symbol="x"
            role="img"
            title="Greška"
            width="20"
            height="32" />
        </div>
      );
    }

    return (
      <Form
        ref="form"
        className="form"
        onValid={this.enableSubmit}
        onInvalid={this.disableSubmit}
        onValidSubmit={this.send}>

        <Field
          name="_replyto"
          label="Email"
          type="email"
          validations="isEmail"
          validationError="Ovo nije validna email adresa."
          required />

        <Field
          name="_subject"
          label="Naslov"
          type="text"
          required />

        <Field
          name="message"
          label="Poruka"
          type="textarea"
          rows={7}
          required />

        {/* <Field
          label="Gotcha"
          name="_gotcha"
          hidden /> */}

        <button
          className="btn btn-primary"
          type="submit"
          disabled={!this.state.canSubmit}>
          Pošalji
        </button>

        {status}

      </Form>
    );
  }
});

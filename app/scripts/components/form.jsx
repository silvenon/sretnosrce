import React from 'react/addons';
import {Form} from 'formsy-react';
import Field from './field';
import $ from 'jquery';
import fetch from '../helpers/fetch';

export default React.createClass({
  getInitialState() {
    return {
      canSubmit: true
    };
  },

  enableSubmit() {
    this.setState({canSubmit: true});
  },

  disableSubmit() {
    this.setState({canSubmit: false});
  },

  send(model, resetForm, invalidateForm) {
    $.ajax({
      url: 'http://formspree.io/matija.marohnic@gmail.com',
      method: 'post',
      data: model,
      dataType: 'json'
    }).done(res => {
      this.setState({
        status: 'Poruka poslana!'
      });
    }).fail(res => {
      this.setState({
        status: 'Dogodila se neka greška, ali moguće je da je poruka svejedno poslana ;)'
      });
    });

    // fetch('//formspree.io/matija.marohnic@gmail.com', {
    //   method: 'post',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(model)
    // }).then(function (res) {
    //   console.log(res);
    // }).catch(function (res) {
    //   console.error(res);
    // });
  },

  render() {
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

        <Field
          label="Next"
          name="_next"
          value="/"
          readOnly
          hidden />

        <button
          className="btn btn-primary"
          type="submit"
          disabled={!this.state.canSubmit}>
          Pošalji
        </button>

        <div className="form-status">
          {this.state.status}
        </div>

      </Form>
    );
  }
});

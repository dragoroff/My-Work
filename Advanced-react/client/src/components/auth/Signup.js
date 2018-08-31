import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import * as actions from "../../actions";
import { compose } from "redux";
import { connect } from "react-redux";

class Signup extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push('/feature');
    });
  };

  render() {
    // Received from redux-form
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field name="email" type="text" component="input" />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field name="password" type="password" component="input" />
        </fieldset>
        <div>{this.props.errors}</div>
        <button>Sign up</button>
      </form>
    );
  }
}

const mapStateToProps = state => (
  {
    errors: state.auth.errorMessage
  }
)

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: "signup" })
)(Signup);

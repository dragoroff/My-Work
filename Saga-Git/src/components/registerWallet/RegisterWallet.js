import React, { Component } from "react";
import { connect } from "react-redux";
import {
  registerAction,
  clearErrorsAction
} from "../../actions/registerAction";
import TextFieldGroup from "../forms/TextFieldGroup";
import PropTypes from "prop-types";
import { isEmpty } from "../../validation/isEmpty";

class RegisterWallet extends Component {
  constructor() {
    super();
    this.state = {
      number: "",
      nickname: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!isEmpty(nextProps.wallet.wallet)) {
      this.props.clearErrorsAction();
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const data = {
      number: this.state.number,
      nickname: this.state.nickname
    };

    const token = "token";

    console.log("data", data);
    this.props.registerAction(data, token);
  };
  render() {
    const { errors } = this.state;

    return (
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 mb-4">Wallets</h1>
              <p className="lead text-center">Add a wallet</p>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  type="number"
                  placeholder="Your wallet number"
                  name="number"
                  value={this.state.number}
                  onChange={this.onChange}
                  error={errors.key}
                />
                <TextFieldGroup
                  type="text"
                  placeholder="Choose a nickname for your wallet"
                  name="nickname"
                  value={this.state.nickname}
                  onChange={this.onChange}
                  error={errors.name}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RegisterWallet.propTypes = {
  registerAction: PropTypes.func.isRequired,
  clearErrorsAction: PropTypes.func.isRequired,
  wallet: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  wallet: state.wallet,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerAction, clearErrorsAction }
)(RegisterWallet);

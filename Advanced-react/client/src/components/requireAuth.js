import React, { Component } from "react";
import { connect } from "react-redux";

export default ChildComponent => {
  class RequireAuth extends Component {
    componentDidMount() {
      this.navigateBack();
    }
    componentDidUpdate() {
      this.navigateBack();
    }

    navigateBack = () => {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    };
    render() {
      return <ChildComponent {...this.props} />;
    }
  }
  const mapStateToProps = state => ({
    auth: state.auth.authentication
  });

  return connect(mapStateToProps)(RequireAuth);
};

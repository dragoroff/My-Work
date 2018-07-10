import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class Dashboard extends Component {
  render() {
    let { wallet } = this.props.wallet;

    wallet = wallet.map(wallet => (
      <li style={{ listStyle: "none", margin: "20px" }}>
        <strong>WALLET: </strong> {wallet.number} <strong>NICKNAME:</strong>{" "}
        {wallet.nickname}
      </li>
    ));

    const limitation =
      wallet.length === 10 ? (
        <div className="alert alert-warning col-md-18 mt-2 mb-2">
          You have reached the maximum number of possible accounts
        </div>
      ) : null;

    return (
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {limitation}
              <ul>{wallet}</ul>
            </div>
            <div className="col-md-12">
              <Link
                to="register"
                className={classnames("btn btn-info mt-4", {
                  disabled: wallet.length === 10
                })}
              >
                Add new wallet
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  wallet: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  wallet: state.wallet
});

export default connect(mapStateToProps)(Dashboard);

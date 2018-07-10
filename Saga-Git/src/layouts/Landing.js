import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Wallets</h1>
                <p className="lead">
                  Welcome to the wallets section. Now that your are identified
                  as a Saga participant we can start by connecting a wallet to
                  your account.
                </p>
                <br />
                <br />
                <h1 className="display-5 mb-4">We respect your privacy.</h1>
                <p>
                  Saga will never publicly reveal participants' identities{" "}
                  <br />
                  Participant identities cannot be connected to wallets{" "}
                  <a href="/">Learn More</a>
                </p>
              </div>
              <div className="col-md-12 text-center">
                <h1 className="display-5 mt-5">Add a wallet</h1>
                <p>
                  This allows you to receive, hold and send SGA <br />
                  You will be asked to enter your wallet's public address
                </p>

                <Link to="/register" className="btn btn-lg btn-info mr-2 mt-3">
                  Add a wallet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

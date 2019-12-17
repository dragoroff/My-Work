import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";
import { withRouter } from "react-router-dom";

class NavbarComponent extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser(this.props.history);
  };
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Nav>
        <NavItem>
          <NavLink href="/feed">Post Feed</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/dashboard">Dashboard</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={this.onLogoutClick.bind(this)}>
            <img
              src={user.avatar}
              alt={user.name}
              title="You must have a Gravatar connected to your email"
              style={{
                width: "25px",
                marginRight: "15px",
                borderRadius: "50%"
              }}
            />
            Logout
          </NavLink>
        </NavItem>
      </Nav>
    );

    const guestLinks = (
      <Nav>
        <NavItem>
          <NavLink href="/register">Sign Up</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/login">Login</NavLink>
        </NavItem>
      </Nav>
    );
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/" style={{ marginLeft: "5%", color: "white" }}>
            <span>DevIn. </span>
            <span style={{ fontSize: "12px" }}>
              A social network for developers
            </span>
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/profiles" style={{ marginRight: "100px" }}>
                Developers
              </NavLink>
            </NavItem>
            {isAuthenticated ? authLinks : guestLinks}
          </Nav>
        </Navbar>
      </div>
    );
  }
}

NavbarComponent.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
  clearCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(withRouter(NavbarComponent));

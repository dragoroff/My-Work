import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

class NavbarComponent extends Component {
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/" style={{ marginLeft: "5%", color: "white" }}>
            Saga
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComponent;

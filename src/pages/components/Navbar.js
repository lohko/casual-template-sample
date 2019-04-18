import React, { Component } from "react";
import "../../styles/style.css";
import {
  MDBNavbar,
  MDBNavLink,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBIcon
} from "mdbreact";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render() {
    return (
      <MDBNavbar light transparent style={{ boxShadow: "none" }} expand="md">
        <MDBNavbarToggler onClick={this.onClick} />
        <MDBNavbarNav right>
          <h5>
            <MDBIcon icon="prescription" />
          </h5>
        </MDBNavbarNav>
        <MDBCollapse isOpen={this.state.collapse} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink
                style={{ fontFamily: "'Raleway', sans-serif" }}
                to="/"
              >
                HOME
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                style={{ fontFamily: "'Raleway', sans-serif" }}
                to="/About"
              >
                ABOUT
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                style={{ fontFamily: "'Raleway', sans-serif" }}
                to="/Services"
              >
                SERVICES
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                style={{ fontFamily: "'Raleway', sans-serif" }}
                to="/Contact"
              >
                CONTACT
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbar;

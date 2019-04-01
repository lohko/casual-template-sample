import React, { Component } from 'react';
import { MDBContainer,MDBView
        ,MDBCard
        ,MDBCardBody
        ,MDBMask, MDBRow, MDBCol,MDBBtn
        ,MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "../../styles/style.css";
import Routes from './Routes';


class Navbar extends Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
        collapse: !this.state.collapse,
      });
  }
  render() {
    const bgColor = {backgroundColor: '#353535'}
    const container = {height: 1300}
    return (
      <div>
          <Router>
          <div>
          <MDBNavbar style={bgColor} dark expand="md">
            <MDBNavbarBrand href="/">
                <strong>Casual</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={ this.onClick } />
            <MDBCollapse isOpen = { this.state.collapse } navbar>
              <MDBNavbarNav left>
                <MDBNavItem>
                    <MDBNavLink to="/">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/About">About</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/Services">Services</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/Contact">Contact</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink to="#"><MDBIcon fab icon="facebook-f" /></MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#"><MDBIcon fab icon="twitter" /></MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#"><MDBIcon fab icon="instagram" /></MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          <Routes></Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default Navbar;

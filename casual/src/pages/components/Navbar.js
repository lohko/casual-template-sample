import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "../../styles/style.css";
import Routes from './Routes';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';


class Navbar extends Component {
  constructor(props) {
       super(props);
       this.state = {
           collapse: false,
           selected:"",
           selected1:""

       };
       this.onClick = this.onClick.bind(this);
       this.updateSelected = this.updateSelected.bind(this);
   }

   onClick() {
     this.setState({
         collapse: !this.state.collapse,
       });
   }
   updateSelected = () => {
     this.setState({
       selected:"underline",
       selected1:"underline"
     });
   }
  render() {
  const container = {height: 1300}
    return (
          <Router>
          <div className ="navbartop">
          <header>
            <MDBNavbar light transparent style={{boxShadow:"none"}} expand="md">
              <MDBNavbarToggler onClick={ this.onClick } />
                <MDBNavbarNav right>
                  <h5>
                    <MDBIcon icon="prescription" />
                  </h5>
                </MDBNavbarNav>
              <MDBCollapse isOpen = { this.state.collapse } navbar>
                <MDBNavbarNav right>
                  <MDBNavItem>
                      <a onClick={this.updateSelected} style={{fontSize:"0.9em", paddingRight:"12px", color:"#181819", fontFamily:"'Raleway', sans-serif"}} href="/">HOME</a>
                  </MDBNavItem>
                  <MDBNavItem>
                    <a onClick={this.updateSelected} style={{fontSize:"0.9em", paddingRight:"12px", color:"#181819", fontFamily:"'Raleway', sans-serif"}} href="/About">ABOUT</a>
                  </MDBNavItem>
                  <MDBNavItem>
                      <a style={{fontSize:"0.9em", paddingRight:"12px", color:"#181819", fontFamily:"'Raleway', sans-serif"}} href="/Services">SERVICES</a>
                  </MDBNavItem>
                  <MDBNavItem>
                    <a style={{fontSize:"0.9em", paddingRight:"12px", color:"#181819", fontFamily:"'Raleway', sans-serif"}} href="/Contact">CONTACT</a>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
        </div>
        </Router>
    );
  }
}

export default Navbar;

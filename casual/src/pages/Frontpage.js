import React, { Component } from 'react';
import { MDBContainer
        ,MDBView
        ,MDBCard,MDBCardImage,MDBCardTitle
        ,MDBCardBody,MDBCardText
        ,MDBMask, MDBRow, MDBCol,MDBBtn
        ,MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import "../styles/style.css";
import Navbar from "./components/Navbar";

class Frontpage extends React.Component {

  render() {
    return(
      <div>
          <div className="bg" style={{zIndex:"-100"}}>
            <Navbar></Navbar>
            <MDBContainer>
              <MDBRow style={{textAlign:"left"}}>
                <MDBCol md="5" className="my-5 px-5">
                  <p style={{fontSize:"3.4em",color:"white"}}>
                    THIS IS CASUAL SAMPLE PAGE.
                  </p>
                  <MDBBtn style={{top:"-20px"}} color="info" id="btn"className="justify-content-center" rounded size="md">
                    Read more
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
              </MDBContainer>
            </div>
          <MDBCard>
            <MDBCardBody style={{fontSize:"0.8em"}}>
              <MDBRow className="justify-content-center py-5">
                <MDBIcon fab icon="autoprefixer" />
                <MDBCol lg="4" md="12" style={{textAlign:"left"}}>
                  <h4 style={{fontSize:"1.4em", fontFamily:"'Raleway', sans-serif"}}>
                    <strong>ESITTELY</strong>
                  </h4>
                  <p style={{fontFamily:"'Raleway', sans-serif"}}>
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque
                    nihil impedit quo minus id quod maxime placeat facere possimus
                    voluptas.
                  </p>
                </MDBCol>
                <MDBIcon icon="award" />
                <MDBCol lg="4" md="12" style={{textAlign:"left"}}>
                  <h4 style={{fontSize:"1.4em", fontFamily:"'Raleway', sans-serif"}}>
                    <strong>ESITTELY</strong>
                  </h4>
                  <p style={{fontFamily:"'Raleway', sans-serif"}}>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                    blanditiis voluptatum deleniti atque corrupti quos dolores possimus
                    voluptas.
                  </p>
                </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
        </div>
    );
  }
}

export default Frontpage;

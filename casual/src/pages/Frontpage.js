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
          <div className="bg">
            <MDBMask className="flex-center flex-column text-white text-center">
                <h2>Casual</h2>
                <p>This is casual sample page</p>
              </MDBMask>
          </div>
          <MDBCard className="my-5 px-5 pb-5">
        <MDBCardBody className="text-center">
          <MDBRow>
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBView hover className="rounded z-depth-2 mb-4" waves>
                <MDBMask overlay="white-slight" />
              </MDBView>
              <MDBIcon icon="cog" size="lg"/>
              <h4 className="font-weight-bold mb-3">
                <strong>Service</strong>
              </h4>
              <p className="dark-grey-text">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus
                voluptas.
              </p>
              <MDBBtn color="pink" rounded size="md">
                Read more
              </MDBBtn>
            </MDBCol>
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBView hover className="rounded z-depth-2 mb-4" waves>
                <MDBMask overlay="white-slight" />
              </MDBView>
              <MDBIcon icon="hammer" size="lg"/>
              <h4 className="font-weight-bold mb-3">
                <strong>Service</strong>
              </h4>
              <p className="dark-grey-text">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis voluptatum deleniti atque corrupti quos dolores.
              </p>
              <MDBBtn color="deep-orange" rounded size="md">
                Read more
              </MDBBtn>
            </MDBCol>
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBView hover className="rounded z-depth-2 mb-4" waves>
                <MDBMask overlay="white-slight" />
              </MDBView>
              <MDBIcon icon="toolbox" size="lg"/>
              <h4 className="font-weight-bold mb-3">
                <strong>Service</strong>
              </h4>
              <p className="dark-grey-text">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione.
              </p>
              <MDBBtn color="info" rounded size="md">
                Read more
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
        </div>
    );
  }
}

export default Frontpage;

import React, { Component } from "react";
import {
  MDBContainer,
  MDBMask,
  MDBRow,
  MDBView,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput
} from "mdbreact";
import "../styles/style.css";
import Navbar from "./components/Navbar";

class Frontpage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MDBView className="bg">
          <MDBMask className="d-flex justify-content-center align-items-center">
            <MDBContainer fluid style={{ padding: "0" }}>
              <MDBRow>
                <MDBCol
                  md="5"
                  className="white-text text-center text-md-left mt-xl-5 mb-5 offset-md-2"
                >
                  <h1 style={{ fontSize: "3.4rem", color: "white" }}>
                    THIS IS CASUAL SAMPLE PAGE.
                  </h1>
                  <MDBBtn
                    color="info"
                    id="btn"
                    className="justify-content-center"
                    rounded
                    size="md"
                  >
                    Read more
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
        <MDBContainer style={{ fontSize: "0.8em" }}>
          <MDBRow className="justify-content-center my-5">
            <MDBCol lg="4" xs="12" style={{ textAlign: "left" }}>
              <MDBRow>
                <MDBCol size="1">
                  <MDBIcon icon="user-check" size="lg" />
                </MDBCol>
                <MDBCol size="11">
                  <h5>
                    <strong>ESITTELY</strong>
                  </h5>
                  <p>
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus voluptas.
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol lg="4" xs="12" style={{ textAlign: "left" }}>
              <MDBRow>
                <MDBCol size="1">
                  <MDBIcon icon="file-contract" size="lg" />
                </MDBCol>
                <MDBCol size="11">
                  <h5>
                    <strong>ESITTELY</strong>
                  </h5>
                  <p>
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus voluptas.
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer className="my-5">
          <h2 className="text-center">Signup for our newsletter</h2>
          <p className="text-center">
            Stay updated and get our latest news right into your inbox. No spam.
          </p>
          <MDBRow className="justify-content-center">
            <MDBCol md="6">
              <MDBInput
                type="text"
                id="contact-newsletter"
                label="Order our newsletter!"
              />
            </MDBCol>
            <MDBCol md="3" className="text-center mt-3">
              <MDBBtn color="info" style={{ margin: "0", width: "100%" }}>
                Order
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Frontpage;

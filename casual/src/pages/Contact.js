import React, { Component } from 'react';
import "../styles/style.css";
import Navbar from "./components/Navbar";
import { MDBRow, MDBCol, MDBCard, MDBContainer,MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";

class Contact extends React.Component {

  render() {
    return(
      <div>
        <Navbar></Navbar>
          <MDBContainer>
            <h2 className="h1-responsive font-weight-bold text-center my-5">
              Contact us
            </h2>
            <MDBRow className="justify-content-center">
              <MDBCol md="9" className="md-0 mb-5">
                <form>
                  <MDBRow>
                    <MDBCol md="6">
                      <div className="md-form mb-0">
                        <MDBInput type="text" id="contact-name" label="Your name" />
                      </div>
                    </MDBCol>
                    <MDBCol md="6">
                      <div className="md-form mb-0">
                        <MDBInput
                          type="text"
                          id="contact-email"
                          label="Your email"
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="12">
                      <div className="md-form mb-0">
                        <MDBInput type="text" id="contact-subject" label="Subject" />
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="12">
                      <div className="md-form mb-0">
                        <MDBInput
                          type="textarea"
                          id="contact-message"
                          label="Your message"
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                </form>
                <div className="text-center">
                  <MDBBtn color="info" size="md">
                    Send
                  </MDBBtn>
                </div>
                <MDBRow className="mt-5">
                  <MDBCol><MDBIcon icon="map-marker-alt" size="2x" className="info mt-5" />
                  <p>Turku, 20100</p></MDBCol>
                  <MDBCol><MDBIcon icon="phone" size="2x" className="mt-5" />
                  <p>+358***********</p></MDBCol>
                  <MDBCol><MDBIcon icon="envelope" size="2x" className="mt-5" />
                  <p>contact@example.com</p></MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBCol md="3" className="text-center">
                <div>
                  <MDBInput
                    type="text"
                    id="contact-email"
                    label="Order our newsletter!"
                  />
                  <MDBBtn color="info" size="md">
                    Order
                  </MDBBtn>
                </div>
                <iframe
                  height="500"
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  style={{
                  marginTop:"10px",
                  border:"none",
                  overflow:"hidden",
                  scrolling:"no",
                  frameborder:"0",
                  allowTransparency:"true",
                  allow:"encrypted-media"}}></iframe>
              </MDBCol>
            </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Contact;

import React from "react";
import "../styles/style.css";
import Navbar from "./components/Navbar";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBInput
} from "mdbreact";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <MDBContainer>
          <h2 className="h1-responsive font-weight-bold text-center ">
            Contact us
          </h2>
          <MDBRow>
            <MDBCol md="9">
              <MDBRow>
                <MDBCol md="6">
                  <MDBInput type="text" id="contact-name" label="Your name" />
                </MDBCol>
                <MDBCol md="6">
                  <MDBInput type="text" id="contact-email" label="Your email" />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <MDBInput type="text" id="contact-subject" label="Subject" />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <MDBInput
                    type="textarea"
                    id="contact-message"
                    label="Your message"
                  />
                </MDBCol>
              </MDBRow>
              <MDBBtn color="info" size="md">
                Send
              </MDBBtn>
              <MDBRow className="mt-5 text-center">
                <MDBCol sm="4">
                  <MDBIcon className="mb-3" icon="map-marker-alt" size="2x" />
                  <p>Turku, 20100</p>
                </MDBCol>
                <MDBCol sm="4">
                  <MDBIcon icon="phone" size="2x" className="mb-3" />
                  <p>+358***********</p>
                </MDBCol>
                <MDBCol sm="4">
                  <MDBIcon icon="envelope" size="2x" className="mb-3" />
                  <p>contact@example.com</p>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol sm="3" className="text-center">
              <iframe
                title="facebook"
                height="500"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                style={{
                  marginTop: "10px",
                  border: "none",
                  overflow: "hidden",
                  scrolling: "no",
                  frameborder: "0",
                  allowTransparency: "true",
                  allow: "encrypted-media"
                }}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Contact;

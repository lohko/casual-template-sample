import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "../../styles/style.css";
import "../../index.css";


const Footer = () => {
  return (
    <MDBFooter style={{backgroundColor:"#353535"}} className="font-small pt-0">
        <MDBContainer>
          <MDBRow className="pt-5 mb-3 text-center d-flex justify-content-center">
            <MDBCol md="2" className="b-3">
              <h6 className="title font-weight-bold">
                <a href="/">Home</a>
              </h6>
            </MDBCol>
            <MDBCol md="2" className="b-3">
              <h6 className="title font-weight-bold">
                <a href="/About">About us</a>
              </h6>
            </MDBCol>
            <MDBCol md="2" className="b-3">
              <h6 className="title font-weight-bold">
                <a href="/Services">Services</a>
              </h6>
            </MDBCol>
            <MDBCol md="2" className="b-3">
              <h6 className="title font-weight-bold">
                <a href="/Contact">Contact</a>
              </h6>
            </MDBCol>
          </MDBRow>
          <hr className="rgba-white-light" style={{ margin: "0 15%" }} />
          <MDBRow className="d-flex text-center justify-content-center mb-md-0 mb-4">
            <MDBCol md="8" sm="12" className="mt-5">
              <p style={{ lineHeight: "1.7rem" }}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur.
              </p>
            </MDBCol>
          </MDBRow>
          <hr className="clearfix d-md-none rgba-white-light" style={{ margin: "10% 15% 5%" }} />
          <MDBRow className="pb-3">
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:
            <a href="https://www.lohkosoftware.fi"> lohkosoftware.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
  );
}

export default Footer;

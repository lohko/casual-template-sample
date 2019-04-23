import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "../../styles/style.css";
import "../../index.css";

const Footer = () => {
  return (
    <MDBFooter
      style={{ backgroundColor: "#353535" }}
      className="font-small pt-0"
    >
      <MDBContainer>
        <MDBRow className="py-4 text-center d-flex justify-content-center">
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="/">Koti</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="/About">Tietoa meistä</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="/Services">Palvelut</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="/Contact">Ota yhteyttä</a>
            </h6>
          </MDBCol>
        </MDBRow>
        <hr className="rgba-white-light" style={{ margin: "0" }} />
        <MDBRow className="d-flex text-center justify-content-center mb-md-0 mb-4">
          <MDBCol md="8" sm="12" className="mt-5">
            <p style={{ lineHeight: "1.7rem" }}>
              Lohko Software Oy on perustettu tammikuussa 2019, tavoitteenaan
              uudistaa yrityksien ja yhdistyksien kotisivuja nykypäivän
              mobiililaitteille sopiviksi. Kohtelemme jokaista projektia
              yhtäläisellä intohimolla ja rakkaudella, koska internetissä
              kädenjälkemme säilyy todennäköisesti vielä meitäkin pidempään.
            </p>
          </MDBCol>
        </MDBRow>
        <hr
          className="clearfix d-md-none rgba-white-light"
          style={{ margin: "10% 15% 5%" }}
        />
        <MDBRow className="pb-3" />
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:
          <a href="https://www.lohkosoftware.fi"> lohkosoftware.fi </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;

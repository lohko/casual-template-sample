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
                  <h1 style={{ fontSize: "3.6rem", color: "white" }}>
                    TÄMÄ ON CASUAL TEMPLATE
                  </h1>
                  <MDBBtn
                    color="info"
                    id="btn"
                    className="justify-content-center"
                    rounded
                    size="md"
                  >
                    Lue lisää
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
                    <strong>Mikä on Casual?</strong>
                  </h5>
                  <p>
                    Casual-sivupohjamme tarjoaa perinteisen sivukokonaisuuden.
                    Kokonaisuus sisältää scrollattavan etusivun lisäksi useamman
                    välilehden, joten pohja sopii hyvin yrityksille, joilla on
                    paljon sisältöä sivuillaan.
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
                    <strong>Miksi valita Casual?</strong>
                  </h5>
                  <p>
                    Casual on oiva tapa esitellä yrityksen erilaisia palveluja
                    jaettuna eri sivuille selkeästi. Sivupohjalle on erittäin
                    helppoa myös lisätä asiakkaalle kustomoituja plugineja
                    parhaan käytäjäkokemuksen takaamiseksi.
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer className="my-5">
          <h2 className="text-center">Tilaa uutiskirjeemme!</h2>
          <p className="text-center">
            Pysy kartalla tapahtumistamme ja tarjouksistamme tilaamalla
            uutiskirjeemme.
          </p>
          <MDBRow className="justify-content-center">
            <MDBCol md="6">
              <MDBInput
                type="text"
                id="contact-newsletter"
                label="Täytä sähköpostiosoitteesi"
              />
            </MDBCol>
            <MDBCol md="3" className="text-center mt-3">
              <MDBBtn color="info" style={{ margin: "0", width: "100%" }}>
                Tilaa
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Frontpage;

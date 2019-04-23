import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBtn
} from "mdbreact";
import Navbar from "./components/Navbar";

import "../styles/style.css";

class Services extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <MDBContainer className="text-center mb-5">
          <h2 className="h1-responsive font-weight-bold text-center ">
            Palvelut
          </h2>
          <p className="grey-text text-center w-responsive mx-auto mb-5">
            Palvelunne voimme esitellä lukuisilla tavoilla ja sivumme esillepano
            räätälöidään aina tarpeen mukaan. Samoin sivujen lukumäärä, sisältö
            ja komponentit on mahdollista sovittaa sisällön vaatimalla tavalla.
          </p>
          <MDBRow>
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBCard
                className="card-image"
                style={{
                  backgroundImage:
                    'url("https://mdbootstrap.com/img/Photos/Others/pricing-table%20(6).jpg")'
                }}
              >
                <div className="text-white text-center pricing-card d-flex align-items-center rgba-stylish-strong py-3 px-3 rounded">
                  <MDBCardBody>
                    <h5>Perus</h5>
                    <div className="price pt-0">
                      <h2 className="number mb-0">10€/kk</h2>
                    </div>
                    <ul
                      className="mb-0"
                      style={{ listStyleType: "none", padding: "0" }}
                    >
                      <li>
                        <p>
                          <strong>1</strong> projekti
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>100</strong> komponenttia
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>150</strong> ominaisuudet
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>200</strong> jäsentä
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>250</strong> viestiä
                        </p>
                      </li>
                    </ul>
                    <MDBBtn outline color="white">
                      Osta heti
                    </MDBBtn>
                  </MDBCardBody>
                </div>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBCard
                className="card-image"
                style={{
                  backgroundImage:
                    'url("https://mdbootstrap.com/img/Photos/Others/pricing-table%20(6).jpg")'
                }}
              >
                <div className="text-white text-center pricing-card d-flex align-items-center rgba-teal-strong py-3 px-3 rounded">
                  <MDBCardBody>
                    <h5>Hyvä</h5>
                    <div className="price pt-0">
                      <h2 className="number mb-0">20€/kk</h2>
                    </div>
                    <ul
                      className="mb-0"
                      style={{ listStyleType: "none", padding: "0" }}
                    >
                      <li>
                        <p>
                          <strong>3</strong> projektia
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>200</strong> komponenttia
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>250</strong> ominaisuudet
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>300</strong> jäsentä
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>350</strong> viestiä
                        </p>
                      </li>
                    </ul>
                    <MDBBtn outline color="white">
                      Osta heti
                    </MDBBtn>
                  </MDBCardBody>
                </div>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBCard
                className="card-image"
                style={{
                  backgroundImage:
                    'url("https://mdbootstrap.com/img/Photos/Others/pricing-table%20(6).jpg")'
                }}
              >
                <div className="text-white text-center pricing-card d-flex align-items-center rgba-stylish-strong py-3 px-3 rounded">
                  <MDBCardBody>
                    <h5>Tosi hyvä</h5>
                    <div className="price pt-0">
                      <h2 className="number mb-0">30€/kk</h2>
                    </div>
                    <ul
                      className="mb-0"
                      style={{ listStyleType: "none", padding: "0" }}
                    >
                      <li>
                        <p>
                          <strong>5</strong> projektia
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>300</strong> komponenttia
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>350</strong> ominaisuudet
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>400</strong> jäsentä
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>450</strong> viestiä
                        </p>
                      </li>
                    </ul>
                    <MDBBtn outline color="white">
                      Osta heti
                    </MDBBtn>
                  </MDBCardBody>
                </div>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Services;

import React from 'react';
import { MDBRow, MDBCol,MDBCardText, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";

const Services1 = () => (
  <div>
      <h2 className="h1-responsive font-weight-bold text-center py-20">
        Palvelut 1
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        Tarvitsetko yrityksellesi hintaluettelon tarjoamistanne palveluista?
      </p>
      <MDBRow className="justify-content-center my-5" >
        <MDBCol lg="4" md="8" className="mb-lg-0 mb-4">
          <MDBCard style={{boxShadow:"none"}} wide ecommerce>
            <MDBIcon fab icon="autoprefixer" />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="text-muted">
                <h5>Service</h5>
              </a>
              <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipisicing minima
                veniam elit.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="4" md="8" className="mb-lg-0 mb-4">
          <MDBCard style={{boxShadow:"none"}}>
            <MDBIcon fab icon="autoprefixer" />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="text-muted">
                <h5>Service</h5>
              </a>
              <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipisicing minima
                veniam elit.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol  lg="4" md="8" className="mb-lg-0 mb-4">
          <MDBCard style={{boxShadow:"none"}}>
            <MDBIcon fab icon="autoprefixer" />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="text-muted">
                <h5>Service</h5>
              </a>
              <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipisicing minima
                veniam elit.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
</div>)

export default Services1;

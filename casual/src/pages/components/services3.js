import React from 'react';
import { MDBContainer,MDBCollapse, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } from "mdbreact";
import img1 from '../../styles/a.jpg'
import img2 from '../../styles/b.jpg'
import img3 from '../../styles/c.jpg'
import img4 from '../../styles/d.jpg'
import img5 from '../../styles/e.jpg'
import img6 from '../../styles/f.jpg'

const Services3 = () => (
  <section className="text-center">
      <h2 className="h1-responsive font-weight-bold text-center py-20">
        Palvelut 3
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        Tarvitsetko yrityksellesi hintaluettelon tarjoamistanne palveluista?
      </p>
      <MDBRow className="justify-content-center">
        <MDBCol lg="4" md="8" className="mb-lg-0 mb-4">
          <MDBCard wide ecommerce>
            <MDBCardImage
              cascade
              src={img1}
              top
              alt="sample photo"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="text-muted">
                <h5>Service</h5>
              </a>
              <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipisicing minima
                veniam elit.
              </MDBCardText>
              <MDBCardFooter className="px-1">
                  <strong>€</strong>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="4" md="8" className="mb-lg-0 mb-4">
          <MDBCard wide ecommerce>
            <MDBCardImage
              cascade
              src={img2}
              top
              alt="sample photo"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="text-muted">
                <h5>Service</h5>
              </a>
              <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipisicing minima
                veniam elit.
              </MDBCardText>
              <MDBCardFooter className="px-1">
                  <strong>€</strong>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="4" md="8" className="mb-lg-0 mb-4">
          <MDBCard wide ecommerce>
            <MDBCardImage
              cascade
              src={img4}
              top
              alt="sample photo"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="text-muted">
                <h5>Service</h5>
              </a>
              <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipisicing minima
                veniam elit.
              </MDBCardText>
              <MDBCardFooter className="px-1">
                  <strong>€</strong>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow className="justify-content-center my-5" >
        <MDBCol lg="4" md="8" className="mb-lg-0 mb-4">
          <MDBCard wide ecommerce>
            <MDBCardImage
              cascade
              src={img1}
              top
              alt="sample photo"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="text-muted">
                <h5>Service</h5>
              </a>
              <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipisicing minima
                veniam elit.
              </MDBCardText>
              <MDBCardFooter className="px-1">
                  <strong>€</strong>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="4" md="8" className="mb-lg-0 mb-4">
          <MDBCard wide ecommerce>
            <MDBCardImage
              cascade
              src={img5}
              top
              alt="sample photo"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="text-muted">
                <h5>Service</h5>
              </a>
              <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipisicing minima
                veniam elit.
              </MDBCardText>
              <MDBCardFooter className="px-1">
                  <strong>€</strong>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="4" md="8" className="mb-lg-0 mb-4">
          <MDBCard wide ecommerce>
            <MDBCardImage
              cascade
              src={img6}
              top
              alt="sample photo"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="text-muted">
                <h5>Service</h5>
              </a>
              <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipisicing minima
                veniam elit.
              </MDBCardText>
              <MDBCardFooter className="px-1">
                  <strong>€</strong>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
)

export default Services3;

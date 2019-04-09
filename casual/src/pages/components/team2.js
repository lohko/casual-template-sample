import React from 'react';
import profilepic1 from '../../styles/profilepic1.jpg'
import profilepic2 from '../../styles/profilepic2.jpg'
import batman from '../../styles/l.jpg'
import {MDBView,MDBMask,  MDBBtn,MDBRow,MDBMedia, MDBCardImage,MDBCol,MDBContainer, MDBCard, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";

const team2 = () => (
    <MDBCol lg="3" md="6" className="mb-5 my-5 py-3">
      <MDBView hover className="flex-center">
      <img
        tag="img"
        src={profilepic1}
        className="img-fluid"
        alt="Sample avatar"
      />
      <MDBMask className="flex-center">
        <img
          tag="img"
          src={batman}
          className="img-fluid"
          alt="Sample avatar"
        />
      </MDBMask>
    </MDBView>
      <h5 className="font-weight-bold mb-3">Example employee</h5>
      <p className="text-uppercase blue-text">Position</p>
      <ul className="list-unstyled mb-0">
        <a href="#!" className="p-2 fa-lg">
          <MDBIcon fab icon="facebook-f" className="blue-text" />
        </a>
        <a href="#!" className="p-2 fa-lg">
          <MDBIcon fab icon="twitter" className="blue-text" />
        </a>
        <a href="#!" className="p-2 fa-lg">
          <MDBIcon fab icon="instagram" className="blue-text" />
        </a>
      </ul>
    </MDBCol>
);
export default team2;

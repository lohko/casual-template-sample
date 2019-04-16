import React from 'react';
import profilepic1 from '../../styles/profilepic1.jpg'
import batman from '../../styles/batman.jpg'
import {MDBView,MDBMask, MDBCol } from "mdbreact";

const team1 = () => (
  <MDBCol lg="3" md="6" className="mb-lg-0 mb-5 pt-3">
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
  </MDBCol>
);
export default team1;

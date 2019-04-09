import React, { Component } from 'react';
import "../styles/style.css";
import Navbar from "./components/Navbar";
import {MDBView,MDBMask,  MDBBtn,MDBRow,MDBMedia, MDBCardImage,MDBCol,MDBContainer, MDBCard, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";
import profilepic1 from '../styles/profilepic1.jpg'
import profilepic2 from '../styles/profilepic2.jpg'
import batman from '../styles/l.jpg'
import Team1 from "./components/team1";
import Team2 from "./components/team2";

class About extends React.Component {
  render() {
    return(
      <div>
        <Navbar></Navbar>
        <MDBContainer>
          <section className="text-center">
              <h2 className="h1-responsive font-weight-bold text-center">
                Our team
              </h2>
              <p>Tietoa yrityksestä</p>
          </section>
          <MDBCard style={{boxShadow:"none"}} className=" px-5 pb-5 text-center">
            <MDBCardBody>
              <MDBRow>
                <Team1></Team1>
                <Team1></Team1>
                <Team1></Team1>
                <Team1></Team1>
              </MDBRow>
              <MDBRow>
                <Team2></Team2>
                <Team2></Team2>
                <Team2></Team2>
                <Team2></Team2>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
          </MDBContainer>
          </div>
    );
  }
}

export default About;

import React, { Component } from "react";
import "../styles/style.css";
import Navbar from "./components/Navbar";
import { MDBRow, MDBContainer, MDBCard, MDBCardBody } from "mdbreact";
import Team1 from "./components/team1";
import Team2 from "./components/team2";

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MDBContainer className="text-center mb-5">
          <h2 className="h1-responsive font-weight-bold text-center ">
            Our team
          </h2>
          <p>Tietoa yrityksestä</p>
          <MDBCard
            style={{ boxShadow: "none" }}
            className=" px-5 pb-5 text-center"
          >
            <MDBCardBody>
              <MDBRow>
                <Team1 />
                <Team1 />
                <Team1 />
                <Team1 />
              </MDBRow>
              <MDBRow>
                <Team2 />
                <Team2 />
                <Team2 />
                <Team2 />
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </div>
    );
  }
}

export default About;

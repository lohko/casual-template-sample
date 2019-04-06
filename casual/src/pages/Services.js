import React, {Component} from "react";
import { MDBContainer,MDBCollapse, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } from "mdbreact";
import Navbar from "./components/Navbar";
import Services1 from "./components/services1";
import Services2 from "./components/services2";
import Services3 from "./components/services3";
import "../styles/style.css";

class Services extends React.Component {
  constructor(props) {
       super(props);
       this.state = {
           services1: true,
           services2:false
       };
       this.onclick = this.onclick.bind(this);

   }
onclick(e){
  console.log(e);
  if(e == "btn1")
  {
    this.setState({
      services1:true,
      services2:false,
      services3:false
    });
  }
  else if(e == "btn2")
  {
    this.setState({
      services1:false,
      services2:true,
      Services3:false
    });
  }
  else if(e == "btn3")
  {
    this.setState({
      services1:false,
      services2:false,
      Services3:true
    });
  }
}

  render(){
  if(this.state.services1 == true)
  {
    return (
      <div>
          <Navbar></Navbar>
          <MDBContainer fluid>
            <MDBRow mt="0">
              <MDBCol md="2" my="5">
                    <MDBBtn id ="btn1"onClick={e => this.onclick(e.target.id)} color="dark" >Palveluni 1</MDBBtn><br></br>
                    <MDBBtn id ="btn2"onClick={e => this.onclick(e.target.id)}color="dark" >Palveluni 2</MDBBtn><br></br>
                    <MDBBtn id ="btn3"onClick={e => this.onclick(e.target.id)}color="dark" >Palveluni 3</MDBBtn><br></br>
              </MDBCol>
              <MDBCol sm="8">
                <Services1></Services1>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
      </div>
    );
  }
  else if (this.state.services2 == true){
    return (
      <div>
          <Navbar></Navbar>
          <MDBContainer fluid>
            <MDBRow mt="0">
              <MDBCol md="2" my="5">
                    <MDBBtn id ="btn1"onClick={e => this.onclick(e.target.id)} color="dark" >Palveluni 1</MDBBtn><br></br>
                    <MDBBtn id ="btn2"onClick={e => this.onclick(e.target.id)}color="dark" >Palveluni 2</MDBBtn><br></br>
                    <MDBBtn id ="btn3"onClick={e => this.onclick(e.target.id)}color="dark" >Palveluni 3</MDBBtn><br></br>
              </MDBCol>
              <MDBCol sm="8">
                <Services2></Services2>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
      </div>
    );
  }
  else{
    return (
      <div>
          <Navbar></Navbar>
          <MDBContainer fluid>
            <MDBRow mt="0">
              <MDBCol md="2" my="5">
                    <MDBBtn id ="btn1"onClick={e => this.onclick(e.target.id)} color="dark" >Palveluni 1</MDBBtn><br></br>
                    <MDBBtn id ="btn2"onClick={e => this.onclick(e.target.id)}color="dark" >Palveluni 2</MDBBtn><br></br>
                    <MDBBtn id ="btn3"onClick={e => this.onclick(e.target.id)}color="dark" >Palveluni 3</MDBBtn><br></br>
              </MDBCol>
              <MDBCol sm="8">
                <Services3></Services3>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
      </div>
    );
  }

}
}

export default Services;

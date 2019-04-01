import React, { Component } from 'react';
import './App.css';
import Navbar from "./pages/components/Navbar";
import Footer from "./pages/components/Footer";
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Footer/>
      </div>
    );
  }
}

export default App;

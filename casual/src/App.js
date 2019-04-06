import React, { Component } from 'react';
import './App.css';
import Navbar from "./pages/components/Navbar";
import Footer from "./pages/components/Footer";
import Frontpage from "./pages/Frontpage";
import Routes from './pages/components/Routes';

import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
<Router>
  <div>
        <Routes></Routes>
        <Footer/>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;

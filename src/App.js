import React, { Component } from 'react';
import './App.css';
import Footer from "./pages/components/Footer";
import Routes from './pages/components/Routes';

import { BrowserRouter as Router} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
          <div>
          <Routes></Routes>
          <Footer/>
          </div>
        </Router>
    );
  }
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Frontpage from '../Frontpage';
import About from '../About';
import Contact from '../Contact';
import Services from '../Services';




const Routes = () => (
    <Switch>
      <Route exact path="/" component={Frontpage} />
      <Route path="/About" component={About} />
      <Route path="/Services" component={Services} />
      <Route path="/Contact" component={Contact} />
    </Switch>
)

export default Routes;

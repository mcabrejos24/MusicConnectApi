import React, {useEffect} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assets/styles/App.scss';

import Navbar from './components/Navbar';

import Home from './scenes/HomeSPA/Home';
import OnHere from './scenes/HomeSPA/OnHere';
import Email from './scenes/HomeSPA/Email';
import Texting from './scenes/HomeSPA/Texting';

import Donate from './scenes/Donate';
import ContactUs from './scenes/ContactUs';
import AboutUs from'./scenes/AboutUs';
import Redirect from'./scenes/Redirect';


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/" component={ Home } exact={ true } />
          <Route path="/on-here" component={ OnHere } />
          <Route path="/email" component={ Email } />
          <Route path="/texting" component={ Texting } />
          <Route path="/donate" component={ Donate } />
          <Route path="/contact-us" component={ ContactUs } />
          <Route path="/about-us" component={ AboutUs } />
          <Route path="/redirect" component={ Redirect } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

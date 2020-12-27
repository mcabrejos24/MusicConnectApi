import React from 'react'
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import './assets/styles/App.scss';

import Navbar from './components/Navbar';

import Home from './scenes/Home/';
import OnHere from './scenes/OnHere';
import Email from './scenes/Email';
import Texting from './scenes/Texting';

import Donate from './scenes/Donate';
import ContactUs from './scenes/ContactUs';
import LearnMore from'./scenes/LearnMore';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Switch>
            <Route path="/" component={ Home } exact={ true } />
            <Route path="/onhere" component={ OnHere } />
            <Route path="/email" component={ Email } />
            <Route path="/text" component={ Texting } />
            <Route path="/donate" component={ Donate } />
            <Route path="/contact-us" component={ ContactUs } />
            <Route path="/learn-more" component={ LearnMore } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

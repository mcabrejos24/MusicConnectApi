import './assets/styles/App.scss';
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './scenes/Home/';
import Redirect from './scenes/Redirect';
import Navbar from './components/Navbar';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/redirect" component={Redirect} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

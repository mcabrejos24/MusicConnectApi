// import 'assets/styles/App.scss';
import './assets/styles/App.scss';
import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './scenes/Home/';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <Switch>
            <Route path="/" component={Home} exact={true}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }


}

export default App;

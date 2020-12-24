// import 'assets/styles/App.scss';
import './assets/styles/App.scss';
import React from 'react'
import Authorizer from './components/Authorizer';
import Authorizer_Spotify from './components/Authorizer_Spotify';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
        <div className="App">
          <h1>Music Connect</h1>
          <Authorizer />
          <Authorizer_Spotify />

        </div>
    );
  }


}

export default App;

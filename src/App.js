// import 'assets/styles/App.scss';
import './assets/styles/App.scss';
import React from 'react'
import Authorizer from './components/Authorizer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Music Connect</h1>
        <Authorizer />
      </div>
    );
  }


}

export default App;

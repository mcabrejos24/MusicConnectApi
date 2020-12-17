import logo from './logo.svg';
import './App.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Navbar, Button, Heading, Container } from 'react-bulma-components';
import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar color="light">
          <Container>
            <Heading>Music Api</Heading>
          </Container>
        </Navbar>



      </div>
    );
  }
}

export default App;

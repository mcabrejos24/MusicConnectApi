import React from 'react';
import Authorizer from './../../components/Authorizer';
import Authorizer_Spotify from './../../components/Authorizer_Spotify';
import Navbar from './components/Navbar';

export default function Home() {


    return (
        <div className="App">
            <Navbar />
            <h1>Music Connect</h1>
            <br></br>
            <Authorizer />
            <br></br>
            <Authorizer_Spotify />
        </div>
    );
}


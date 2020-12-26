import React from 'react';
// import Authorizer from './../../components/Authorizer';
// import Authorizer_Spotify from './../../components/Authorizer_Spotify';
import ConnectOptions from './components/ConnectOptions';
import cool_guitar from './../../assets/img/cool_guitar.jpg';
import cool_piano from './../../assets/img/cool_piano.jpg';
import cool_drum from './../../assets/img/cool_drum.jpg';


export default function Home() {


    return (
        <div className="content">

            {/* <h1>Music Connect</h1>
            <Authorizer />
            <Authorizer_Spotify /> */}

            {/* <h1>CONNECT YOUR MUSIC!</h1> */}

            <div class="text-center">
                <div class="mt-24 text-6xl font-semibold">Playlist Connect</div>
                <div class="mt-10 mb-14 text-2xl font-light">Collaborate instantly with peers on Apple Music and Spotify</div>
            </div>

            <div className="options-wrapper">
                <ConnectOptions description="Already have a Spotify and Apple Music playlist available" image={cool_guitar} imageAlt="Cool Guitar" url=""/>
                <ConnectOptions description="Only have a Spotify or Apple Music playlist available" image={cool_piano} imageAlt="Cool Piano" url=""/>
                <ConnectOptions description="Have neither Spotify nor Apple Music playlist available" image={cool_drum} imageAlt="Cool Drum" url=""/>
            </div>
        </div>
    );
}


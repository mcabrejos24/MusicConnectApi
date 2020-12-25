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

            <div class="mt-48 mr-32 ml-16 text-center">
            <div class="text-6xl font-semibold text-gray-900 leading-none">Playlist Connect</div>
            <div class="mt-10 text-2xl font-light text-true-gray-500 antialiased">Collaborate instantly with peers on Apple Music and Spotify</div>
                <button class="mt-24 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out">
                    Get Started
                </button>
            </div>

            <div className="options-wrapper" >
                <ConnectOptions description="Already have a Spotify and Apple Music playlist available" image={cool_guitar} imageAlt="Cool Guitar" url="https://www.google.com"/>
                <ConnectOptions description="Only have a Spotify or Apple Music playlist available" image={cool_piano} imageAlt="Cool Piano" url="https://www.google.com"/>
                <ConnectOptions description="Have neither Spotify or Apple Music playlist available" image={cool_drum} imageAlt="Cool Drum" url="https://www.google.com"/>
            </div>
        </div>
    );
}


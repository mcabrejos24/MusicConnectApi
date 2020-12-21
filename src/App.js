// import 'assets/styles/App.scss';
import './assets/styles/App.scss';
import React from 'react'
import Authorizer from './components/Authorizer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
          <header className="top-0 lef-0 w-full z-40 bg-black fixed border-b border-gray-200">
            <div class="container mx-auto h-16 flex justify-between items-center">
              <div className="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
                <a href="#" className="no-underline py-1"><h1 className="font-bold text-white text-xl">Playlist Connect</h1></a>
                <button id="menuBtn" className="hamburger block sm:hidden focus:outline-none" type="button" onclick="navToggle();">
                  <span className="hamburger__top-bun"></span><span className="hamburger__bottom-bun"></span>
                </button>
              </div>
              <div id="menu" className="font-light w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden">
                <a className=" hover:text-red text-gray-100 text-lg w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2" href="#P3L" target="_blank">Learn more</a>
                <a className="hover:text-red text-gray-100 text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2" href="#P3L">Donate</a>
                <a className="hover:text-red text-gray-100 text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2" href="#P3L">Contact Us</a>
              </div>
            </div>
          </header>
          <div class="lg:2/6 xl:w-4/4 lg:mt-40 text-center">
            <div class="text-6xl font-semibold text-gray-900 leading-none">Playlist Connect</div>
            <div class="mt-10 text-2xl font-light text-true-gray-500 antialiased">Collaborate instantly with peers on Apple Music and Spotify</div>
            <button class="mt-20 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out">
              Get Started
            </button>
          </div>
      </div>
    );
  }


}

export default App;

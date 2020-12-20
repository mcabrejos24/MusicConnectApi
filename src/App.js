// import 'assets/styles/App.scss';
import './assets/styles/App.scss';
import React from 'react'
import Authorizer from './components/Authorizer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
          <header id="top" className="w-full flex flex-col bg-gray-800 fixed sm:relative pin-t pin-r pin-l">
            <nav id="site-menu" className="flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-dark shadow sm:shadow-none border-b-4 border-teal-500">
              <div className="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
                <a href="#" className="no-underline py-1"><h1 className="font-bold text-gray-100 text-lg">Playlist Connect</h1></a>
                <button id="menuBtn" className="hamburger block sm:hidden focus:outline-none" type="button" onclick="navToggle();">
                  <span className="hamburger__top-bun"></span><span className="hamburger__bottom-bun"></span>
                </button>
              </div>
              <div id="menu" className="w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden">
                <a className="text-dark font-bold hover:text-red text-gray-100 text-lg w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2" href="#P3L" target="_blank">About Us</a>
                <a className="text-dark font-bold hover:text-red text-gray-100 text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2" href="#P3L">Donate</a>
                
              </div>
            </nav>
          </header>


      </div>
    );
  }


}

export default App;

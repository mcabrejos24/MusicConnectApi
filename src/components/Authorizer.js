import '../assets/styles/App.scss';
import React from 'react'

class Authorizer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          music: null
        }
        this.handleAuthorize = this.handleAuthorize.bind(this);
    }

    componentDidMount () {
        // Adding a didMount function to load a script tag into the dom in order to access the Music Kit JS lib
        document.addEventListener('musickitloaded', () => {
            this.setState({music: window.MusicKit.configure({
                developerToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6IjI4TURDWTcyVFAifQ.eyJpc3MiOiI0Q1JDNEdGUVpXIiwiZXhwIjoxNjA4Mjg0MzU0LCJpYXQiOjE2MDgyNDExNTR9.nnv23e9I7dr8Yz1dmLvy1koQZhwE0Pe83GZuJ5Ne_LJWx85TAaLibHIhs8PDZujBxt6mQ_POmFqnjd-7e06HeA',
                app: {
                  name: 'Playlist Connect',
                  build: '0.0.1'
                }
              })
            }); 
        });
    }

    // Click handler that prompts user for authorization upon clicking it
    handleAuthorize() {
        this.state.music.authorize().then(musicUserToken => {
            console.log(`Authorized, music-user-token: ${musicUserToken}`);
        });
    }

    render() {
        return(
            <div>
                <button onClick={this.handleAuthorize}>
                    Authorize me!
                </button>
            </div>
        )
    }
}

export default Authorizer;

import '../assets/styles/App.scss';
import React from 'react'

class AuthorizerAppleMusic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          music: null
        }
        this.handleAuthorize = this.handleAuthorize.bind(this);
    }

    componentDidMount () {
        const {
            DEVELOPER_TOKEN
        } = process.env;
        // Adding a didMount function to load a script tag into the dom in order to access the Music Kit JS lib
        document.addEventListener('musickitloaded', () => {
            window.MusicKit.configure({
                developerToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6IjI4TURDWTcyVFAifQ.eyJpc3MiOiI0Q1JDNEdGUVpXIiwiZXhwIjoxNjExMDg0NDE2LCJpYXQiOjE2MDg2NjUyMTZ9.Hxy_XRE1zhgTqRD57u-OSua6T7FoCPOm8ONqKrheoGHw_GUwehiIXEvebpb3II7fXOqGQxDAlL7w61tPZmLLeQ',
                app: {
                  name: 'Playlist Connect',
                  build: '0.0.1'
                }
            });
        });
        
        // console.log(window.MusicKit.getInstance());
        // this.setState({music: window.MusicKit.getInstance()});

        
    }

    // Click handler that prompts user for authorization upon clicking it
    handleAuthorize() {
        this.state.music.authorize().then(musicUserToken => {
            console.log(`Authorized, music-user-token: ${musicUserToken}`);
        });
    }

    render() {
        return(
            <div className="text-xl">
                <button onClick={this.handleAuthorize} className="authorizer authorizer-applemusic">
                    Authorize with Apple Music
                </button>
            </div>
        )
    }
}

export default AuthorizerAppleMusic;

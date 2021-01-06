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
            REACT_APP_DEVELOPER_TOKEN
        } = process.env;
        // Adding a didMount function to load a script tag into the dom in order to access the Music Kit JS lib
        
        window.MusicKit.configure({
            developerToken: REACT_APP_DEVELOPER_TOKEN,
            app: {
              name: 'Playlist Connect',
              build: '0.0.1'
            }
        });

        this.setState({music: window.MusicKit.getInstance()});

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

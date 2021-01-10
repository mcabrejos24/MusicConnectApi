import '../assets/styles/App.scss';
import React, { useEffect } from 'react';

export default function AuthorizerAppleMusic(props) {
    const { setter } = props;

    useEffect(() => {
        const { REACT_APP_DEVELOPER_TOKEN } = process.env;
            window.MusicKit.configure({
                developerToken: REACT_APP_DEVELOPER_TOKEN,
                app: {
                    name: 'Playlist Connect',
                    build: '0.0.1',
                }
            });
    }, []);

    function handleAuthorize() {
        window.MusicKit.getInstance().authorize()
            .then(musicUserToken => {
                console.log(`Authorized, music-user-token: ${musicUserToken}`);
                setter(true);
        });
    }

    return(
        <div className="text-xl">
            <button onClick={handleAuthorize} className="authorizer authorizer-applemusic">
                Authorize with Apple Music
            </button>
        </div>
    );
}

import '../assets/styles/App.scss';
import React, { useEffect, useState } from 'react'

export default function AuthorizerAppleMusic(props) {
    const [music, setMusic] = useState(null);

    useEffect(() => {
        const { REACT_APP_DEVELOPER_TOKEN } = process.env;

        try {
            window.MusicKit.configure({
                developerToken: REACT_APP_DEVELOPER_TOKEN,
                app: {
                name: 'Playlist Connect',
                build: '0.0.1',
                }
            });
            setMusic(window.MusicKit.getInstance());
        } catch(e) {
            console.warn(e);
        }
    },[]);

    function handleAuthorize() {
        music.authorize()
            .then(musicUserToken => {
                console.log(`Authorized, music-user-token: ${musicUserToken}`);
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

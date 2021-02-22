import '../assets/styles/App.scss';
import React, { useEffect } from 'react';
import { setAuthValue } from '../variables/authValues';

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
                setter("apple");
                let successSettingPayload = setAuthValue('apple', musicUserToken);
                if(!successSettingPayload) console.error('Failed to set Auth Value');
                window.localStorage.clear();
        });
        document.getElementById("apple-music-player").remove();
    }

    return(
        <button onClick={handleAuthorize} className="authorizer authorizer-applemusic text-xl">
            Authorize with Apple Music
        </button>
    );
}

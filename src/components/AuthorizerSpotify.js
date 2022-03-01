import { useEffect } from 'react';
import { setAuthValue, getAuthValue } from '../variables/authValues';
import { generateCodeChallenge } from '../variables/codeChallenge';

export default function AuthorizerSpotify(props) {
    const {
        REACT_APP_CLIENT_ID,
        REACT_APP_AUTHORIZE_URL,
        REACT_APP_REDIRECT_URL,
        REACT_APP_URL_STATE
    } = process.env;
    const codeChallange = generateCodeChallenge();
    const scopes = 'playlist-modify-private%20playlist-read-collaborative%20playlist-read-private%20playlist-modify-public'
    const url = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${REACT_APP_REDIRECT_URL}&state=${REACT_APP_URL_STATE}&scope=${scopes}&show_dialog=true&code_challenge_method=S256&code_challenge=${codeChallange}`;

    useEffect(() => {
        const { setter } = props;

        window.spotifyCallback = (payload) => { // called if spotify successfully redirects
            window.$popup.close();
            if (payload === 'failedParams') {
                console.error('Failed to parse Spotify API response and get values');
                return;
            } else if (payload === 'failedState') {
                console.error('Request and response url state params failed to match. UI shows no change.');
                return;
            } else if (payload === 'access_denied') {
                console.error('User denied access');
                return;
            }
            setter("spotify"); // maybe instead of setter that passes setShowInput to MusicCard, we can change the styles right here, making the input hidden or not
            let successSettingPayload = setAuthValue('spotify', payload);
            if(!successSettingPayload) console.error('Failed to set Authenticated Code Value');
        }

    },[]);

    function login() {
        // opens window in a different window (diff tab if in full screen)
        window.$popup = window.open(
            url,
            'Login with Spotify',
            'width=400,height=650,left=-250'
        )
    }
    
    return (
        <button variant="info" type="submit" onClick={login} className="authorizer authorizer-spotify text-xl">
            Authorize with Spotify
        </button>
    );
}

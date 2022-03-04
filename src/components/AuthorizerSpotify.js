// import axios from 'axios';
import { useEffect } from 'react';
import { setAuthValue, getSpotifyRefreshToken, setSpotifyRefreshToken } from '../variables/authValues';
import { generateChallenge } from '../variables/codeChallenge';
var axios = require('axios');
var qs = require('qs');
var verify;

export default function AuthorizerSpotify(props) {
    const {
        REACT_APP_CLIENT_ID,
        REACT_APP_CLIENT_SECRET,
        REACT_APP_AUTHORIZE_URL,
        REACT_APP_REDIRECT_URL,
        REACT_APP_URL_STATE
    } = process.env;
    const scopes = 'playlist-modify-private%20playlist-read-collaborative%20playlist-read-private%20playlist-modify-public'
    const { setter } = props;

    async function login() {
        let codeChallenge = await generateChallenge();
        verify = codeChallenge.code_verifier;
        
        const url = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${REACT_APP_REDIRECT_URL}&state=${REACT_APP_URL_STATE}&scope=${scopes}&show_dialog=true&code_challenge_method=S256&code_challenge=${codeChallenge.code_challenge}`;

        window.$popup = window.open( // opens window in a different window (diff tab if in full screen)
            url,
            'Login with Spotify',
            'width=400,height=650,left=-250'
        )
    }

    window.spotifyCallback = async (payload) => { // called if spotify successfully redirects
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
        let auth_token = await requestAccesToken(payload);
        if (auth_token && auth_token.access_token) {
            setSpotifyRefreshToken(auth_token.refresh_token);
            setter("spotify"); // maybe instead of setter that passes setShowInput to MusicCard, we can change the styles right here, making the input hidden or not
            let successSettingPayload = setAuthValue('spotify', auth_token.access_token);
            if(!successSettingPayload) console.error('Failed to set Authenticated Code Value');
        }
    }
    
    function requestAccesToken(code) {
        let authorization = window.btoa(`${REACT_APP_CLIENT_ID}:${REACT_APP_CLIENT_SECRET}`);
        let data = qs.stringify({
            'code': code,
            'redirect_uri': REACT_APP_REDIRECT_URL,
            'grant_type': 'authorization_code',
            'client_id': REACT_APP_CLIENT_ID,
            'code_verifier': verify 
        });
        return axios(
            {
                method: 'post',
                url: 'https://accounts.spotify.com/api/token',
                headers: { 
                'Authorization': `Basic ${authorization}`, 
                'Content-Type': 'application/x-www-form-urlencoded', 
                },
                data : data
            }
        )
        .then(function (response) {
            return response.data;

        })
        .catch(function (error) {
            return error;
        });
        
    }
    
    return (
        <button variant="info" type="submit" onClick={login} className="authorizer authorizer-spotify text-xl">
            Authorize with Spotify
        </button>
    );
}

// import axios from "axios";
// import { useEffect, useState } from "react";
import { useEffect } from 'react';
import '../assets/styles/components/authorizer.scss'
// import './../assets/styles/App.scss';
// import './styles.scss';



export default function Authorizer_Spotify(props) {

    const {
        REACT_APP_CLIENT_ID,
        REACT_APP_AUTHORIZE_URL,
        REACT_APP_REDIRECT_URL
    } = process.env;

    const url = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&response_type=token&redirect_uri=${REACT_APP_REDIRECT_URL}&scope=user-top-read&show_dialog=true`;

    useEffect(() => {
        const { setter } = props;

        window.spotifyCallback = (payload) => {
            window.$popup.close();
            console.log('token: '+payload);
            setter(true);
            // fetch('https://api.spotify.com/v1/me', {
            //   headers: {
            //     'Authorization': `Bearer ${payload}`
            //   }
            // }).then(response => {
            //   return response.json()
            // }).then(data => {
            //   // do something with data
            //   console.warn(data);
            // })
        }
    },[props]);

    function login() {
        window.$popup = window.open(
            url,
            'Login with Spotify',
            'width=800,height=600'
        )
    }
    
    return (
        <div className="text-xl">
            <button variant="info" type="submit" onClick={login} className="authorizer authorizer-spotify">
                Authorize with Spotify
            </button>
        </div>
    );
}

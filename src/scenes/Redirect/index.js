import React from 'react';

export default function Redirect(props) {

    const { testSpotifyCallback, testHref, testState } = props;

    const spotifyCallback = testSpotifyCallback || ((window && window.opener && window.opener.spotifyCallback) ? window.opener.spotifyCallback : () => {return 'Failed to get spotify callback';});     
    const url = testHref || ((window && window.location && window.location.href) ? window.location.href : 'Failed to get href');      

    if (spotifyCallback() == 'Failed to get spotify callback' || url == 'Failed to get href') {
        return <div testData="no-href-or-callback"></div>
    }

    const { REACT_APP_URL_STATE } = process.env;

    const state = testState || REACT_APP_URL_STATE;

    if (url.indexOf('redirect') === -1) {
        spotifyCallback('failedParams');
        return <div testData="no-redirect-in-url"></div>
    }

    const params = url.slice(url.indexOf('redirect')+9, url.length).split('&'); // extracts code and state from query params in the redirect from the spotify api

    if (!params || !params[0] || !params[1] || !params[0].split('=') || !params[1].split('=') || !params[0].split('=')[1] || !params[1].split('=')[1] ) {
        spotifyCallback('failedParams'); //failed to get param values, send message to parent window
        return <div testData="no-code-and-or-state-in-url"></div>
    }
    if (params[1].split('=')[1] !== state) {
        spotifyCallback('failedState'); //state failed to match, cancel authentication
        return <div testData="state-failed-to-match"></div>
    }

    const code = params[0].split('=')[1];
    spotifyCallback(code); // send code to parent window function
    
    return (
        <div className="content redirect-page" testData="render-successful">
            <p>Redirect Page</p>
        </div>
    );
}

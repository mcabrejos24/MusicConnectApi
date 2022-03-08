import React from 'react';

export default function Redirect() {
    const { REACT_APP_URL_STATE } = process.env;
    if (window.location.href.indexOf('redirect') == -1) {
        window.opener.spotifyCallback('failedParams');
        return <div></div>
    }

    const params = window.location.href.slice(window.location.href.indexOf('redirect')+9,window.location.href.length).split('&'); // extracts code and state from query params in the redirect from the spotify api

    if (!params || !params[0] || !params[1] || !params[0].split('=') || !params[1].split('=') || !params[0].split('=')[1] || !params[1].split('=')[1] ) {
        window.opener.spotifyCallback('failedParams'); //failed to get param values, send message to parent window
        return <div></div>
    }
    if (params[1].split('=')[1] !== REACT_APP_URL_STATE) {
        window.opener.spotifyCallback('failedState'); //state failed to match, cancel authentication
        return <div></div>
    }

    const code = params[0].split('=')[1];
    window.opener.spotifyCallback(code); // send code to parent window function
    
    return (
        <div className="content">
            <p>Redirect Page</p>
        </div>
    );
}

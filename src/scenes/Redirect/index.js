import React from 'react';

export default function Redirect() {

    const token = window.location.hash.substr(1).split('&')[0].split("=")[1];

    if (token) {
        window.opener.spotifyCallback(token);
    } else {
        console.log('User cancelled authorization');
        window.opener.$popup.close();
    }

    return (
        <div className="content">
            <p>Redirect Page</p>
        </div>
    );
}

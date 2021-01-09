import React from 'react';

export default function Redirect() {

    const token = window.location.hash.substr(1).split('&')[0].split("=")[1];

    if (token) {
        console.log('vijay');
        window.opener.spotifyCallback(token)
    } 

    return (
        <div className="content">
            <p>Redirect Page</p>
        </div>
    );
}

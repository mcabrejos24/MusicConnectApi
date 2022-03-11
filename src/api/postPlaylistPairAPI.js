import axios from 'axios';

export function playlistPOST(appleAuthValue, spotifyAuthValue, spotifyRefreshValue, applePlaylistid, spotifyPlaylistid)  { 
    const {
        REACT_APP_DATSBASE_URL,
    } = process.env;
    const path = 'playlist-pairs/';
    
    return axios.post(`${REACT_APP_DATSBASE_URL}/api/${path}`,
        {
                "apple_token_1": appleAuthValue[0],
                "apple_token_2": appleAuthValue[1],
                "apple_token_3": appleAuthValue[2],
                "spotify_token_1": spotifyAuthValue[0],
                "spotify_token_2": spotifyAuthValue[1],
                "spotify_token_3": spotifyAuthValue[2],
                "spotify_refresh_1": spotifyRefreshValue[0],
                "spotify_refresh_2": spotifyRefreshValue[1],
                "apple_playlist_id": applePlaylistid,
                "spotify_playlist_id": spotifyPlaylistid
        },
        {
            headers: {
                'content-type': 'application/json'
            }
        }
    )
    .then(function (response) {
        return response;
    })
    .catch(function (error) {
        console.log(error);
        return false;
    });
}

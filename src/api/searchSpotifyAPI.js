import axios from "axios";
import { getAuthValue } from "../variables/authValues";

export function containsPlaylistSpotify(playlistName) {
    let returnValue = false;

    return axios.get('https://api.spotify.com/v1/me/playlists', { // need to write functionality to search for more playlists if they have more than 50 playlists
        headers: {
            'Authorization': `Bearer ${getAuthValue('spotify')}`
        },
        params: {
            'limit': 50,
        },
    })
    .then((response) => {
        console.log(response.data.items);
        response.data.items.forEach(playlist => {
            if(playlistName.toLowerCase() === playlist.name.toLowerCase()) {
                returnValue = true; //success in finding the playlist;
                return;
            }
        })
        return returnValue;
    })
}
// maybe should add a catch

export function createPlaylistSpotify(playlistName) {
    console.log(playlistName);


    return true;
}
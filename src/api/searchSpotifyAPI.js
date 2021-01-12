import axios from "axios";
import { getAuthValue } from "../variables/authValues";

export default function containsPlaylistSpotify(playlistName) {
    let returnValue = false;

    return axios.get('https://api.spotify.com/v1/me/playlists', {
        headers: {
            'Authorization': `Bearer ${getAuthValue('spotify')}`
        }
    })
    .then((response) => {
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
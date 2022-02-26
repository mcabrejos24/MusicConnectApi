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
        response.data.items.forEach(playlist => {
            if(playlistName.toLowerCase() === playlist.name.toLowerCase()) {
                window.spotifyPlaylistID = playlist.id;
                returnValue = true; //success in finding the playlist;
                return;
            }
        })
        return returnValue;
    })
    .catch((e) => {
        console.error(e);
    })
}

// maybe add a check here to make sure  that the playlist name contains something or else return false
export async function createPlaylistSpotify(playlistName) {
    let userID = await getUserId();
    return axios.post(`https://api.spotify.com/v1/users/${userID}/playlists`, 
        {
            'name': playlistName,
            'description': 'Playlist created through Playlist Connect',
            'public':true,
        },
        {
            headers: {
                'Authorization': `Bearer ${getAuthValue('spotify')}`
            },
        }
    )
    .then((response) => {
        console.log(response);
        return true;
    })
    .catch((e) => {
        console.error(e);
        return false;
    })
}

export function getUserId() {
    return axios.get('https://api.spotify.com/v1/me', {
        headers: {
            'Authorization': `Bearer ${getAuthValue('spotify')}`
        }
    })
    .then((response) => {
        console.log(response.data.id);
        return response.data.id;
    })
    .catch((e) => {
        console.error(e);
    })

}

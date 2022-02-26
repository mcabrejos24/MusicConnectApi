
import axios from "axios";
import { getAuthValue } from "../variables/authValues";

const { REACT_APP_DEVELOPER_TOKEN } = process.env;

export function containsPlaylistApple(playlistName) {
    let returnValue = false;

    return axios.get('https://api.music.apple.com/v1/me/library/playlists', {
        headers: {
            'music-user-token': `${getAuthValue('apple')}`,
            'Authorization': `Bearer ${REACT_APP_DEVELOPER_TOKEN}`
        }
    })
    .then((response) => {
        response.data.data.forEach(playlist => {
            if(playlistName.toLowerCase() === playlist.attributes.name.toLowerCase()) {
                window.applePlaylistID = playlist.attributes.playParams.id;
                returnValue = true;
                return;
            }
        })
        return returnValue;
    });
}

export function createPlaylistApple(playlistName) {
    return axios.post('https://api.music.apple.com/v1/me/library/playlists', 
        {
            "attributes": {
                "name":playlistName,
                "description":"Playlist created through Playlist Connect"
            }
        }, 
        {
            headers: {
                'music-user-token': `${getAuthValue('apple')}`,
                'Authorization': `Bearer ${REACT_APP_DEVELOPER_TOKEN}`
            }
        }
    )
    .then((response) => {
        return true;
    })
    .catch((e) => {
        console.error(e);
        return false;
    })
}

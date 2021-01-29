
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
        console.log(response);
        response.data.data.forEach(playlist => {
            if(playlistName.toLowerCase() === playlist.attributes.name.toLowerCase()) {
                returnValue = true; //success in finding the playlist;
                return;
            }
        })
        return returnValue;
    });
}

export function createPlaylistApple(playlistName) {
    console.log(playlistName);



}
import axios from "axios";
import { getAuthValue } from "../variables/authValues";

export default function containsPlaylistApple(playlistName) {

    const { REACT_APP_DEVELOPER_TOKEN } = process.env;

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
    })

    // let returnValue = false;
    // let mk = window.MusicKit.getInstance();

    // return mk.api.library.playlists().then(function(data) {
    //     data.forEach(playlist => {
    //       if (playlist.attributes.name.toLowerCase() === playlistName.toLowerCase()) {
    //           returnValue = true
    //           return;
    //       }
    //     });
    //     return returnValue;
    // });
}

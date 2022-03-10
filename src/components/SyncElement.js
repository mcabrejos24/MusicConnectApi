import axios from 'axios';
import { useEffect } from 'react';
import { getAuthValue, getSpotifyRefreshToken } from "../variables/authValues";

export default function SyncElement(props) {
    let { spotifyConfirmed } = props;
    let { appleConfirmed } = props;
    const {
        REACT_APP_DATSBASE_URL,
    } = process.env;

    useEffect(() => {
        let progressBar = document.querySelector('.sync-progress-bar');
        let syncButton = document.querySelector('.sync-button');

        if(spotifyConfirmed && appleConfirmed) {
            if(!progressBar.children[1].classList.contains('active')) progressBar.children[1].classList.add('active');
            if(!progressBar.children[2].classList.contains('active')) progressBar.children[2].classList.add('active');
            syncButton.disabled = false;
        }
        else if(spotifyConfirmed || appleConfirmed) {
            if(progressBar.children[2].classList.contains('active')) progressBar.children[2].classList.remove('active');
            if(!progressBar.children[1].classList.contains('active')) progressBar.children[1].classList.add('active');
            syncButton.disabled = true;
        } else {
            if(progressBar.children[1].classList.contains('active')) progressBar.children[1].classList.remove('active');
            if(progressBar.children[2].classList.contains('active')) progressBar.children[2].classList.remove('active');
            syncButton.disabled = true;
        }
    },[spotifyConfirmed, appleConfirmed]);

    async function syncPlaylists() {
        const hasValue = window.applePlaylistID && window.spotifyPlaylistID;
        if (!hasValue) return; //maybe do some error log
        
        let appleHash = window.btoa(getAuthValue('apple'));         // length 328
        let spotifyHash = window.btoa(getAuthValue('spotify'));     // length 312
        let spotifyRefreshHash = window.btoa(getSpotifyRefreshToken());


        let appleAuthValue = [appleHash.slice(0, 128), appleHash.slice(128, 256), appleHash.slice(256, appleHash.length)];
        let spotifyAuthValue = [spotifyHash.slice(0, 128), spotifyHash.slice(128, 256), spotifyHash.slice(256, spotifyHash.length)];
        let spotifyRefreshValue = [spotifyRefreshHash.slice(0, 128), spotifyRefreshHash.slice(128, spotifyRefreshHash.length)];

        let syncStatus = await playlistPOST(appleAuthValue, spotifyAuthValue, spotifyRefreshValue, window.applePlaylistID, window.spotifyPlaylistID);

        if(syncStatus) {
            console.log('SUCCESS in posting to backend!');
        } else {
            console.log('FAILED in posting to backend!');
        }
    }

    // THIS function will be moved under the api folder but for now lets keep it here for ease of access
    function playlistPOST(appleAuthValue, spotifyAuthValue, spotifyRefreshValue, applePlaylistid, spotifyPlaylistid)  { 
        let path = 'playlist-pairs/';

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
            console.log(response);
            return true;
        })
        .catch(function (error) {
            console.log(error);
            return false;
        });
    }

    return (
            <div className="sync-container">
                <ul className="sync-progress-bar">
                    <li className="active">1st Playlist</li>
                    <li>2nd Playlist</li>
                    <li>Sync</li>
                </ul>
                <button className="sync-button" onClick={ syncPlaylists }>
                    Sync Playlists
                </button>
            </div>
    )
}

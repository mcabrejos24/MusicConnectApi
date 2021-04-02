import axios from 'axios';
import { useEffect } from 'react';
import { getAuthValue } from "../variables/authValues";

export default function SyncElement(props) {
    let { spotifyConfirmed } = props;
    let { appleConfirmed } = props;

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
        const appleValue = document.querySelector('.input-bar[name=apple]')?.value;
        const spotifyValue = document.querySelector('.input-bar[name=spotify]')?.value;
        const hasValue = appleValue && spotifyValue;
        if (!hasValue) return; //maybe do some error log
        
        let spotifyObject = {'service': 'spotify', 'playlist': spotifyValue, 'auth': getAuthValue('spotify')};
        let appleObject = {'service': 'apple', 'playlist': appleValue, 'auth': getAuthValue('apple')};

        let spotifyStringified = JSON.stringify(spotifyObject);
        let appleStringified = JSON.stringify(appleObject);

        console.log(spotifyStringified);
        console.log(appleStringified);

        let syncStatus = await playlistPOST(spotifyStringified, appleStringified);

        if(syncStatus) {
            console.log('SUCCESS in posting to backend!');
        } else {
            console.log('FAILED in posting to backend!');
        }
    }

    // THIS function will be moved under the api folder but for now lets keep it here for ease of access
    function playlistPOST(spotifyObject, appleObejct)  { 
        let path = 'pairing';

        return axios.post(`http://127.0.0.1:8000/api/${path}`,
            {
                "attributes": {
                    "spotifyObject": spotifyObject,
                    "appleObject": appleObejct
                }
            }, 
            // SOMETHING LIKE THIS IS WHAT WE WILL USE TO AUTHORIZE AND KEEP THE BACKEND SECURE, WE CAN LOOK INTO THIS LATER, JUST KEEPING IT HERE SO WE CAN REFERENCE IT
            // { 
            //     headers: {
            //         'music-user-token': `${getAuthValue('apple')}`,
            //         'Authorization': `Bearer ${REACT_APP_DEVELOPER_TOKEN}`
            //     }
            // }
        )
        .then((response) => {
            console.log(response);
            return true;
        })
        .catch((e) => {
            console.error(e + 'playlist sync failing!');
            return false;
        })
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

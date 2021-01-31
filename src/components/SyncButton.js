import { useEffect } from 'react';
import '../assets/styles/components/sync-button.scss';
import { getAuthValue } from "../variables/authValues";


export default function SyncButton(props) {
    let { spotifyConfirmed } = props;
    let { appleConfirmed } = props;

    useEffect(() => {
        let syncButton = document.querySelector('.sync');
        let progressBar = document.querySelector('.progress-bar');
        console.log();

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

    function syncPlaylists() {
        const appleValue = document.querySelector('.input-bar[name=apple]')?.value;
        const spotifyValue = document.querySelector('.input-bar[name=spotify]')?.value;
        const hasValue = appleValue && spotifyValue;
        if (!hasValue) return; //maybe do some error log
        console.log('sync');
        //appleValue, spotifyValue, getAuthValue('apple'), getAuthValue('spotify')
    }

    return (
            <div className="sync-container">
                <ul className="progress-bar">
                    <li className="active">1st Playlist</li>
                    <li>2nd Playlist</li>
                    <li>Sync</li>
                </ul>
                <button className="sync" onClick={ syncPlaylists }>
                    Sync Playlists
                </button>
            </div>
    )
}

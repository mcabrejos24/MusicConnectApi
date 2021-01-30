import { doc } from 'prettier';
import { useEffect } from 'react';
import '../assets/styles/components/sync-button.scss';
import { getAuthValue } from "../variables/authValues";


export default function SyncButton(props) {
    const { spotifyConfirmed } = props;
    const { appleConfirmed } = props;

    useEffect(() => {
        let syncButton = document.querySelector(".sync");
        let syncText = syncButton.firstChild;
        if(spotifyConfirmed && appleConfirmed) {
            syncButton.classList.add('sync--marquee');
            syncButton.classList.add('sync--slidemation');
            syncButton.disabled = false;
            syncText.classList.add('sync--progress-100');
            syncText.classList.remove('sync--progress-50');
        }
        else if(spotifyConfirmed || appleConfirmed) {
            syncButton.classList.remove('sync--marquee');
            syncButton.classList.remove('sync--slidemation');
            syncButton.disabled = true;
            syncText.classList.add('sync--progress-50');
            syncText.classList.remove('sync--progress-100');
        } else {
            syncButton.classList.remove('sync--marquee');
            syncButton.classList.remove('sync--slidemation');
            syncButton.disabled = true;
            syncText.classList.remove('sync--progress-50');
            syncText.classList.remove('sync--progress-100');
        }
    },[spotifyConfirmed, appleConfirmed]);

    function syncPlaylists() {
        const appleValue = document.querySelector('.input-bar[name=apple]')?.value;
        const spotifyValue = document.querySelector('.input-bar[name=spotify]')?.value;
        const hasValue = appleValue && spotifyValue;
        if (!hasValue) return; //maybe do some error log
        
        //appleValue, spotifyValue, getAuthValue('apple'), getAuthValue('spotify')

    }

    return (
            <div className="sync-wrapper">
                <button className="sync" data-marquee="Sync Playlists" disabled>
                    <div className="sync--text-wrapper" onClick = { syncPlaylists } >Sync Playlists</div>
                </button>
            </div>
    )
}

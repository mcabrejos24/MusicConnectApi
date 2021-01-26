import { useEffect, useState } from 'react';
import '../assets/styles/components/sync-button.scss';

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

    return (
            <div className="sync-wrapper">
                <button className="sync" data-marquee="Sync Playlists" disabled>
                    <div className="sync--text-wrapper">Sync Playlists</div>
                </button>
            </div>
    )
}

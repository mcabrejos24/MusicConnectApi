import { useEffect } from 'react';
import '../assets/styles/components/sync-button.scss';

export default function SyncButton(props) {
    const { spotifyConfirmed } = props;
    const { appleConfirmed } = props;

    useEffect(() => {
        let syncButton = document.querySelector(".sync");
        if(spotifyConfirmed && appleConfirmed) {
            syncButton.classList.add('sync--marquee');
            syncButton.classList.add('sync--slidemation');
            syncButton.disabled = false;
        } else {
            syncButton.classList.remove('sync--marquee');
            syncButton.classList.remove('sync--slidemation');
            syncButton.disabled = true;
        }
    },[spotifyConfirmed, appleConfirmed]);

    return (
            <button class="sync" data-marquee="Sync Playlists" disabled>
                Sync Playlists
            </button>
    )
}

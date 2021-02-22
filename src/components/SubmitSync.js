import { useEffect } from 'react';
import '../assets/styles/components/submit-sync.scss';

export default function SyncElement(props) {
    const { playlistReady } = props;

    useEffect(() => {
        let submitButton = document.querySelector('.submit-sync-button');

        if(playlistReady) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }, [playlistReady]);

    function submitSyncPlaylist() {
        const playlistValue = document.querySelector('.input-bar')?.value.trim();

        if (!playlistValue) return; //maybe do some error log

        // send the playlist value, the auth token, and the appropriate syncID maybe? If sync ID with it then we need to make sure submitSync has from the syncIDbutton somehow
    }

    return(

        <div className="submit-container">
            <button className="submit-sync-button" onClick={ submitSyncPlaylist }>
                Submit
            </button>
        </div>

    )


}
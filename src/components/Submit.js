import '../assets/styles/components/submit.scss';
import { useEffect } from 'react';


export default function SyncElement(props) {

    const { playlistReady } = props;
    const { contactReady } = props;

    useEffect(() => {
        let submitButton = document.querySelector('.submit-button');

        if(playlistReady && contactReady) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }, [playlistReady, contactReady]);


    function submitPlaylist() {
        const playlistValue = document.querySelector('.input-bar')?.value;
        const playlistType = document.querySelector('.input-bar')?.name;
        const contactValue = document.querySelector('.contactInput')?.value;
        const hasValue = playlistValue && playlistType && contactValue;
        if (!hasValue) return; //maybe do some error log
        console.log('Playlist value is:' + playlistValue);
        console.log('Playlist type is:' + playlistType);
        console.log('Contact value is:' + contactValue);
    }

    return (
        <div className="submit-container">
            <button className="submit-button" onClick={ submitPlaylist }>
                Sync Playlists
            </button>
        </div>
    )

}
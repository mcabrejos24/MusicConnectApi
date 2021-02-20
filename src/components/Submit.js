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
        const playlistValue = document.querySelector('.input-bar')?.value.trim();
        const playlistType = document.querySelector('.input-bar')?.name.trim();
        const contactValue = document.querySelector('.contactInput')?.value.replace('(','').replace(')', '').replace('-','').replace(' ','').trim();
        const contactType = document.querySelector('.contactInput')?.type.trim();

        const hasValue = playlistValue && playlistType && contactValue;
        if (!hasValue) return; //maybe do some error log

        if(contactType === 'tel') {
            const provider = document.querySelector('#providers')?.value;
            if(!provider || provider === 'select') return;
            console.log('Playlist value is:' + playlistValue);
            console.log('Playlist type is:' + playlistType);
            console.log('Contact type is:' + contactType);
            console.log('Contact value is:' + contactValue);
            console.log('Phone provider value is:' + provider);
        } else { // type phone
            console.log('Playlist value is:' + playlistValue);
            console.log('Playlist type is:' + playlistType);
            console.log('Contact type is:' + contactType);
            console.log('Contact value is:' + contactValue);
        } 
    }

    return (
        <div className="submit-container">
            <button className="submit-button" onClick={ submitPlaylist }>
                Submit
            </button>
        </div>
    )
}

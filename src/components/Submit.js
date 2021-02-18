import userEvent from '@testing-library/user-event';
import '../assets/styles/components/submit.scss';
import { useEffect, useState } from 'react';


export default function SyncElement(props) {

    const { playlistReady } = props;
    const { contactReady } = props;


    // let contactValue = document.querySelector('.modish-input-bar--wrapper');

    // console.log(contactValue.classList);


    useEffect(() => {
    

    }, [playlistReady, contactReady]);


    function submitPlaylist() {
        const playlistValue = document.querySelector('.input-bar')?.value;
        const playlistType = document.querySelector('.input-bar')?.name;
        const contactValue = document.querySelector('.contactInput')?.value;
        const hasValue = playlistValue && playlistType && contactValue;
        if (!hasValue) return; //maybe do some error log
        // console.log('submit');
    }

    return (
        <div className="submit-container">
            <button className="submit-button" onClick={ submitPlaylist }>
                Sync Playlists
            </button>
        </div>
    )

}
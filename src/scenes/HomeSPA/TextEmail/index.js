import './style.scss';
import { useState } from 'react';
import BackButton from '../components/BackButton';
import MusicCard2 from '../../../components/MusicCard2';
import AuthorizerAppleMusic from '../../../components/AuthorizerAppleMusic';
import AuthorizerSpotify from '../../../components/AuthorizerSpotify';
import Submit from '../../../components/Submit';


export default function TextEmail() {

    const [playlistReady, setPlaylistReady] = useState(false);
    const [contactReady, setContactReady] = useState(false);
    // console.log(playlistReady); pass this into submit button 

    return (
        <div className="content">
            <BackButton></BackButton>
            <div className="double-authorizer-wrapper">
                <MusicCard2 confirmPlaylist={setPlaylistReady} setContactReady={setContactReady}>
                        <AuthorizerAppleMusic />
                        <AuthorizerSpotify />
                </MusicCard2>
            </div>
            <Submit playlistReady={playlistReady} contactReady={contactReady}/>
        </div>
    );
}

import './style.scss';
import { useState } from 'react';
import BackButton from '../components/BackButton';
import MusicCard2 from '../../../components/MusicCard2';
import AuthorizerAppleMusic from '../../../components/AuthorizerAppleMusic';
import AuthorizerSpotify from '../../../components/AuthorizerSpotify';

export default function TextEmail() {

    const [playlistReady, setPlaylistReady] = useState(false);
    // console.log(playlistReady); pass this into submit button 

    return (
        <div className="content">
            <BackButton></BackButton>
            <div className="double-authorizer-wrapper">
                <MusicCard2 confirmPlaylist={setPlaylistReady}>
                        <AuthorizerAppleMusic />
                        <AuthorizerSpotify />
                </MusicCard2>
            </div>
        </div>
    );
}

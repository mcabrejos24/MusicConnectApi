import './style.scss';
import { useState } from 'react';
import AuthorizerAppleMusic from '../../../components/AuthorizerAppleMusic';
import AuthorizerSpotify from '../../../components/AuthorizerSpotify';
import MusicCard from '../../../components/MusicCard';
import SyncElement from '../../../components/SyncElement';
import BackButton from '../../../components/BackButton';

export default function OnHere() {
    const [appleReady, setAppleReady] = useState(false);
    const [spotifyReady, setSpotifyReady] = useState(false);

    return (
        <div className="content">
            <BackButton></BackButton>
            <div className="authorization-wrapper">
                {/* Apple Music */}
                <MusicCard service={'apple'} link={'https://music.apple.com/us/browse'} linkName={'Apple'} confirmPlaylist={setAppleReady}>
                    <AuthorizerAppleMusic></AuthorizerAppleMusic>
                </MusicCard>

                {/* Spotify */}
                <MusicCard service={'spotify'} link={'https://www.spotify.com'} linkName={'Spotify'} confirmPlaylist={setSpotifyReady}>
                    <AuthorizerSpotify></AuthorizerSpotify>
                </MusicCard>
            </div>
            <SyncElement spotifyConfirmed={spotifyReady} appleConfirmed={appleReady}></SyncElement>
        </div>
    );
}

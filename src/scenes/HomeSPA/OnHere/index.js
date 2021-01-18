import './styles.scss';
import AuthorizerAppleMusic from '../../../components/AuthorizerAppleMusic';
import AuthorizerSpotify from '../../../components/AuthorizerSpotify';
import MusicCard from '../../../components/MusicCard';
import SyncButton from '../../../components/SyncButton';
import { useState } from 'react';

export default function OnHere() {
    const [appleReady, setAppleReady] = useState(false);
    const [spotifyReady, setSpotifyReady] = useState(false);

    return (
        <div className="content">
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
            <div className="sync-button-wrapper">
                <SyncButton spotifyConfirmed={spotifyReady} appleConfirmed={appleReady}></SyncButton>
            </div>
        </div>
    );
}

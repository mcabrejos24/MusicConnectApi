import './style.scss';
import { useState } from 'react';
import AuthorizerAppleMusic from '../../../components/AuthorizerAppleMusic';
import AuthorizerSpotify from '../../../components/AuthorizerSpotify';
import MusicCard from '../../../components/MusicCard';
import SyncElement from '../../../components/SyncElement';
import BackButton from '../components/BackButton';

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

            <div className="how-it-works">
                <h1 className="how-it-works-title">How to use this sync option</h1>

                <div className="point need">
                    <h2 className="point-title">Cards</h2>
                    <div className="point-description">
                        <p>This one is made for when both you and your peer are together in the same room.
                            <br /><br />
                            Simply, one of you logs into your Apple Music and the other into your Spotify.
                            <br /><br />
                            You both then choose the playlist you would like to sync.
                            <br /><br />
                            If you want to make a new playlist, then enter the name of the new playlist and press the button below it to create it.
                            <br /><br />
                            Then just press the Sync button and your playlists will be synced!
                            <br /><br />
                            The progress bar helps tell you what step you are on.
                        </p>
                    </div>
                </div>
            </div>



        </div>
    );
}

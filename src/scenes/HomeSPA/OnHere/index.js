import './styles.scss';
import AuthorizerAppleMusic from '../../../components/AuthorizerAppleMusic';
import AuthorizerSpotify from '../../../components/AuthorizerSpotify';
import MusicCard from '../../../components/MusicCard';
import SyncButton from '../../../components/SyncButton';

export default function OnHere() {

    return (
        <div className="content">
            <div className="authorization-wrapper">
                {/* Apple Music */}
                <MusicCard service={'apple'} link={'https://music.apple.com/us/browse'} linkName={'Apple'} >
                    <AuthorizerAppleMusic></AuthorizerAppleMusic>
                </MusicCard>

                {/* Spotify */}
                <MusicCard service={'spotify'} link={'https://www.spotify.com'} linkName={'Spotify'} >
                    <AuthorizerSpotify></AuthorizerSpotify>
                </MusicCard>
            </div>
            <div className="sync-button-wrapper">
                <SyncButton></SyncButton>
            </div>
        </div>
    );
}

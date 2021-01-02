import './styles.scss';
import AuthorizerAppleMusic from '../../../components/AuthorizerAppleMusic';
import AuthorizerSpotify from '../../../components/AuthorizerSpotify';
import CustomInputBar from '../../../components/CustomInputBar';

export default function OnHere() {

    return (
        <div className="content">

            <div className="authorization-wrapper">

                {/* Apple Music */}
                <div className="applemusic-wrapper">
                    <div className="music-header text-5xl">
                        <a href="https://www.applemusic.com">Apple Music</a>
                    </div>
                    <div className="authorizer-button-wrapper">
                        <AuthorizerAppleMusic></AuthorizerAppleMusic>
                    </div>
                    <div className="playlist-checker">
                        <p>Enter the playlist you want to link, if empty then we will create a default one for you.</p>
                        <CustomInputBar service="apple"/>
                    </div>
                </div>

                {/* Spotify */}
                <div className="spotify-wrapper">
                    <div className="music-header text-5xl">
                        <a href="https://www.spotify.com">
                            Spotify
                        </a>
                    </div>
                    <div className="authorizer-button-wrapper">
                        <AuthorizerSpotify></AuthorizerSpotify>
                    </div>
                    <div className="playlist-checker">
                        <p>Enter the playlist you want to link, if empty then we will create a default one for you.</p>
                        <CustomInputBar service="spotify"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
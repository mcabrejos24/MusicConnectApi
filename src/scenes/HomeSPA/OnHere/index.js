import './styles.scss'
import Authorizer_AppleMusic from './../../../components/Authorizer_AppleMusic';
import Authorizer_Spotify from './../../../components/Authorizer_Spotify';


export default function OnHere() {

    return (
        <div className="content">

        <div class="music-header">
            <a href="https://www.spotify.com">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Apple_Music_logo.svg/500px-Apple_Music_logo.svg.png" alt="Apple Music Logo"/>
            </a>
            <a href="https://www.spotify.com">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/500px-Spotify_logo_with_text.svg.png" alt="Spotify Logo"/>
            </a>
        </div>

        <div class="authorizer-grid">
            <Authorizer_AppleMusic></Authorizer_AppleMusic>
            <Authorizer_Spotify></Authorizer_Spotify>
        </div>

        </div>
    );
}
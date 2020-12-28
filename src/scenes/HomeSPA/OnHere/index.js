import './styles.scss'
import Authorizer_AppleMusic from './../../../components/Authorizer_AppleMusic';
import Authorizer_Spotify from './../../../components/Authorizer_Spotify';


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
                        <Authorizer_AppleMusic></Authorizer_AppleMusic>
                    </div>
                    <div className="playlist-checker">
                        <p>Enter the playlist you want to link, if empty then we will create a default one for you.</p>
                        <label for="inp" class="inp playlist-input">
                            <input type="text" id="inp" placeholder="&nbsp;"/>
                            <span class="label">Playlist Name</span>
                            <span class="focus-bg"></span>
                        </label>
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
                        <Authorizer_Spotify></Authorizer_Spotify>
                    </div>
                    <div className="playlist-checker">
                        <p>Enter the playlist you want to link, if empty then we will create a default one for you.</p>
                        <label for="inp" class="inp playlist-input">
                            <input type="text" id="inp" placeholder="&nbsp;"/>
                            <span class="label">Playlist Name</span>
                            <span class="focus-bg"></span>
                        </label>
                    </div>
                </div>
                




            </div>

        </div>
    );
}
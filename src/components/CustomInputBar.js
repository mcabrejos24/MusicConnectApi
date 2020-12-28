
import '../assets/styles/components/custom-input-bar.scss';
import containsPlaylistApple from '../api/searchAppleAPI';
import containsPlaylistSpotify from '../api/searchSpotifyAPI';
// import '../api/spotify/playlistSearchSpotifyAPI.js';


export default function Authorizer_Spotify(props) {
    const { service } = props;

    function checkApplePlaylist({ target }) {
        let inputElementWrapper = document.querySelector('.playlist-input-apple');
        if (!target.value) {
            if (inputElementWrapper.classList.contains('input-contains') || inputElementWrapper.classList.contains('input-does-not-contain')) {
                inputElementWrapper.classList.remove('input-contains');
                inputElementWrapper.classList.remove('input-does-not-contain');
            }
            return;
        }
        if(containsPlaylistApple(target.value)) {
            inputElementWrapper.classList.add('input-contains');
        } else {
            inputElementWrapper.classList.add('input-does-not-contain');
        }
    }

    function checkSpotifyPlaylist({ target }) {
        let inputElementWrapper = document.querySelector('.playlist-input-spotify');
        if (!target.value) {
            if (inputElementWrapper.classList.contains('input-contains') || inputElementWrapper.classList.contains('input-does-not-contain')) {
                inputElementWrapper.classList.remove('input-contains');
                inputElementWrapper.classList.remove('input-does-not-contain');
            }
            return;
        }
        if(containsPlaylistSpotify(target.value)) {
            inputElementWrapper.classList.add('input-contains');
        } else {
            inputElementWrapper.classList.add('input-does-not-contain');
        }
    }

   
    

    return (
        <label 
            htmlFor = { service === 'apple' ? 'input-box-apple' : 'input-box-spotify'}
            className = { service === 'apple' ? 'playlist-input playlist-input-apple' : 'playlist-input playlist-input-spotify'}
        >
            <input 
                id = { service === 'apple' ? 'input-box-apple' : 'input-box-spotify' }
                onInput={ service === 'apple' ? checkApplePlaylist : checkSpotifyPlaylist }
                className="input-box" 
                type="text" 
                placeholder=" " 
            />
            <span className="label">Playlist Name</span>
            <span className="focus-bg"></span>
        </label>
    );


}
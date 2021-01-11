
import '../assets/styles/components/custom-input-bar.scss';
import containsPlaylistApple from './../api/searchAppleAPI';
import containsPlaylistSpotify from './../api/searchSpotifyAPI';

export default function CustomInputBar(props) {
    const { service } = props;

    function checkPlaylist({ target }) {
        let inputElementWrapper = document.querySelector(`.playlist-input-${ target.name }`);
        let createButton = inputElementWrapper.nextSibling;
        let contains = (target.name === 'apple' ? containsPlaylistApple(target.value) : containsPlaylistSpotify(target.value));
        
        if (!target.value) {
            inputElementWrapper.classList.remove('input-contains');
            inputElementWrapper.classList.remove('input-does-not-contain');
            if (!createButton.classList.contains('hidden')) createButton.classList.add('hidden');
            return;
        }

        if (contains) {
            inputElementWrapper.classList.add('input-contains');
            if (!createButton.classList.contains('hidden')) createButton.classList.add('hidden');
        } else {
            inputElementWrapper.classList.add('input-does-not-contain');
            createButton.classList.remove('hidden');
        }
    }
    
    return (
        <div className = {`playlist-input-wrapper playlist-input-wrapper-${service}`}>
            <label 
                htmlFor = {`input-box-${service}`}
                className = {`playlist-input playlist-input-${service}`}
            >
                <input
                    id = {`input-box-${service}`}
                    onInput = { checkPlaylist }
                    className="input-box" 
                    type="text" 
                    name = { service }
                    placeholder=" " 
                />
                <span className="label">Playlist Name</span>
                <span className="focus-bg"></span>
            </label>
            <button className="create-playlist hidden">Playlist not found, would you like us to create and sync one for you with this name?</button>
        </div>
    );
}

import '../assets/styles/components/modish-input-bar.scss';
import containsPlaylistApple from '../api/searchAppleAPI';
import containsPlaylistSpotify from '../api/searchSpotifyAPI';
import debounce from 'lodash/debounce';
import { useCallback } from 'react';

export default function ModishInputBar(props) {
    const { service } = props;
    const { confirmPlaylist } = props;

    async function checkPlaylist(target) {
        let inputElementWrapper = document.querySelector(`.modish-input-bar--wrapper-${ target.name }`);
        let createButton = inputElementWrapper.nextSibling;
        if (!target.value) {
            inputElementWrapper.classList.remove('input-contains');
            inputElementWrapper.classList.remove('input-does-not-contain');
            if (!createButton.classList.contains('hidden')) createButton.classList.add('hidden');
            return;
        }
        let contains = await (target.name === 'apple' ? containsPlaylistApple(target.value) : containsPlaylistSpotify(target.value)); // TRIM WHITE SPACES FOR JUST ONE SPACE
        if (contains) {
            confirmPlaylist(true);
            inputElementWrapper.classList.add('input-contains');
            if (inputElementWrapper.classList.contains('input-does-not-contain')) inputElementWrapper.classList.remove('input-does-not-contain');
            if (!createButton.classList.contains('hidden')) createButton.classList.add('hidden');
        } else {
            confirmPlaylist(false);
            inputElementWrapper.classList.add('input-does-not-contain');
            if (inputElementWrapper.classList.contains('input-contains')) inputElementWrapper.classList.remove('input-contains');
            createButton.classList.remove('hidden');
        }
    }

    const debouncedSave = useCallback(
		debounce(nextTarget => {
            checkPlaylist(nextTarget); 
        }, 1000),
		[], 
	);

    const handleChange = event => {
        const {target: nextTarget} = event;
        let inputElementWrapper = document.querySelector(`.modish-input-bar--wrapper-${ nextTarget.name }`);
        let createButton = inputElementWrapper.nextSibling;
        inputElementWrapper.classList.remove('input-contains');
        inputElementWrapper.classList.remove('input-does-not-contain');
        if (!createButton.classList.contains('hidden')) createButton.classList.add('hidden');
        if (nextTarget.value.length === 0) return;
        confirmPlaylist(false);
		debouncedSave(nextTarget);
	};


    return (
            <div className = {`modish-input-bar`}>
                <div className={`modish-input-bar--wrapper modish-input-bar--wrapper-${ service }`}>
                    <input 
                        onChange = { handleChange }
                        name = { service }
                        type = "text" 
                        // className = {`input-bar input-bar-${ service }`} 
                        className = "input-bar" 
                        placeholder = "Playlist Name" 
                    />
                    <div className={`input-tab`}></div>
                </div>
                <button className="create-playlist hidden">Playlist not found, would you like us to create and sync one for you with this name?</button>
            </div>
    );
}

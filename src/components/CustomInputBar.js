
import '../assets/styles/components/custom-input-bar.scss';
import containsPlaylistApple from './../api/searchAppleAPI';
import containsPlaylistSpotify from './../api/searchSpotifyAPI';
import debounce from 'lodash/debounce';
import { useCallback } from 'react';

export default function CustomInputBar(props) {
    const { service } = props;

    async function checkPlaylist(target) {
        let inputElementWrapper = document.querySelector(`.playlist-input-${ target.name }`);
        let createButton = inputElementWrapper.nextSibling;
        if (!target.value) {
            inputElementWrapper.classList.remove('input-contains');
            inputElementWrapper.classList.remove('input-does-not-contain');
            if (!createButton.classList.contains('hidden')) createButton.classList.add('hidden');
            return;
        }
        let contains = await (target.name === 'apple' ? containsPlaylistApple(target.value) : containsPlaylistSpotify(target.value));
        // maybe add a conditional in case contains fails (will need to check what happens with promise fails)
        if (contains) {
            inputElementWrapper.classList.add('input-contains');
            if (inputElementWrapper.classList.contains('input-does-not-contain')) inputElementWrapper.classList.remove('input-does-not-contain');
            if (!createButton.classList.contains('hidden')) createButton.classList.add('hidden');
        } else {
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
		debouncedSave(nextTarget);
	};


    return (
        <div className = {`playlist-input-wrapper playlist-input-wrapper-${service}`}>
            <label 
                htmlFor = {`input-box-${service}`}
                className = {`playlist-input playlist-input-${service}`}
            >
                <input
                    id = {`input-box-${service}`}
                    onChange = { handleChange }
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
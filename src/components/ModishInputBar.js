import '../assets/styles/components/modish-input-bar.scss';
import { containsPlaylistApple, createPlaylistApple }  from '../api/searchAppleAPI';
import { containsPlaylistSpotify, createPlaylistSpotify } from '../api/searchSpotifyAPI';
import debounce from 'lodash/debounce';
import { useCallback, useState } from 'react';

export default function ModishInputBar(props) {
    const { service } = props;
    const { confirmPlaylist } = props;
    const [playlistValue, setPlaylistValue] = useState("");

    async function checkPlaylist(target) {
        let inputElementWrapper = document.querySelector(`.modish-input-bar--wrapper-${ target.name }`);
        let createButton = inputElementWrapper.nextSibling;
        if (!target.value) { // need this so that the api doesn't get called if the value is empty
            inputElementWrapper.classList.remove('input-contains');
            inputElementWrapper.classList.remove('input-does-not-contain');
            if (!createButton.classList.contains('hidden')) createButton.classList.add('hidden');
            if(inputElementWrapper.classList.contains('loading')) inputElementWrapper.classList.remove('loading');
            setPlaylistValue("");
            return;
        }
        let contains = await (target.name === 'apple' ? containsPlaylistApple(target.value) : containsPlaylistSpotify(target.value));
        if(inputElementWrapper.classList.contains('loading')) inputElementWrapper.classList.remove('loading');
        setPlaylistValue(target.value);
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
        let createPlaylistButton = document.querySelector(`.create-playlist[name=${ nextTarget.name }]`);
        if (createPlaylistButton.classList.contains('created') || createPlaylistButton.classList.contains('failed-to-create')) { // if create playlist button has already created something
            createPlaylistButton.innerHTML = "Playlist not found: click here to create and sync one with this name (created as public)";
            createPlaylistButton.classList.remove("created");
            createPlaylistButton.classList.remove("failed-to-create");
            createPlaylistButton.disabled = false;
        }
        inputElementWrapper.classList.remove('input-contains');
        inputElementWrapper.classList.remove('input-does-not-contain');
        if (!createButton.classList.contains('hidden')) createButton.classList.add('hidden');
        if (nextTarget.value.length === 0 || nextTarget.value.trim() === "") {
            if(inputElementWrapper.classList.contains('loading')) inputElementWrapper.classList.remove('loading');
            setPlaylistValue("");
            return; 
        }
        confirmPlaylist(false);
        if(!inputElementWrapper.classList.contains('loading')) inputElementWrapper.classList.add('loading');
        debouncedSave(nextTarget);
	};

    async function createPlaylist({target}) { // make this also update the input on success of playlist creation
        if(!playlistValue) return;
        let creationSuccessful = await (target.name === 'apple' ? createPlaylistApple(playlistValue) : createPlaylistSpotify(playlistValue));
        let createPlaylistButton = document.querySelector(`.create-playlist[name=${ target.name }]`);

        if (creationSuccessful) {
            // updates input bar to green
            let inputElementWrapper = document.querySelector(`.modish-input-bar--wrapper-${ target.name }`);
            confirmPlaylist(true);
            inputElementWrapper.classList.add('input-contains');
            if (inputElementWrapper.classList.contains('input-does-not-contain')) inputElementWrapper.classList.remove('input-does-not-contain');
            // updates create button text
            createPlaylistButton.innerHTML = "Playlist creation successful!";
            createPlaylistButton.classList.add("created");
            createPlaylistButton.disabled = true;
        } else {
            createPlaylistButton.innerHTML = "Failed to create playlist, please check your connection and try again.";
            createPlaylistButton.classList.add("failed-to-create");
            createPlaylistButton.disabled = true;
            console.error('Error: playlist creation failed. Developer please check for issue.');
        }
    }

    return (
            <div className = {`modish-input-bar`}>
                <div className={`modish-input-bar--wrapper modish-input-bar--wrapper-${ service ? service : "" }`}>
                    <input 
                        onChange = { handleChange }
                        name = { service ? service : "" }
                        type = "text" 
                        className = "input-bar" 
                        placeholder = "Playlist Name" 
                    />
                    <div className={`input-tab`}></div>
                </div>
                <button className="create-playlist hidden" name={ service ? service : "" } onClick={ createPlaylist }> 
                Playlist not found: click here to create and sync one with this name 
                {service === 'spotify' && ' (created as public)' }
                </button>
            </div>
    );
}

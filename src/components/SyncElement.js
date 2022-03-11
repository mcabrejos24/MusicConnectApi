import { useEffect } from 'react';
import { playlistPOST }  from '../api/postPlaylistPairAPI';
import { getAuthValue, getSpotifyRefreshToken } from "../variables/authValues";

export default function SyncElement(props) {
    let { spotifyConfirmed } = props;
    let { appleConfirmed } = props;

    useEffect(() => {
        let progressBar = document.querySelector('.sync-progress-bar');
        let syncButton = document.querySelector('.sync-button');

        if(spotifyConfirmed && appleConfirmed) {
            if(!progressBar.children[1].classList.contains('active')) progressBar.children[1].classList.add('active');
            if(!progressBar.children[2].classList.contains('active')) progressBar.children[2].classList.add('active');
            syncButton.disabled = false;
        }
        else if(spotifyConfirmed || appleConfirmed) {
            if(progressBar.children[2].classList.contains('active')) progressBar.children[2].classList.remove('active');
            if(!progressBar.children[1].classList.contains('active')) progressBar.children[1].classList.add('active');
            syncButton.disabled = true;
        } else {
            if(progressBar.children[1].classList.contains('active')) progressBar.children[1].classList.remove('active');
            if(progressBar.children[2].classList.contains('active')) progressBar.children[2].classList.remove('active');
            syncButton.disabled = true;
        }
    },[spotifyConfirmed, appleConfirmed]);

    function openSyncPopUp() {
        const popup = document.getElementById("popup-sync");
        popup.style.visibility = "visible";
        popup.style.opacity = "1";
      }

    function closeSyncPopUp() {
        const popup = document.getElementById("popup-sync");
        popup.style.visibility = "hidden";
        popup.style.opacity = "0";
    }

    async function syncPlaylists() {
        const hasValue = window.applePlaylistID && window.spotifyPlaylistID;
        if (!hasValue) {
            console.error('Could not grab apple playlist ID or spotify playlist ID');
            return;
        }
        
        let appleHash = window.btoa(getAuthValue('apple'));         // length 328
        let spotifyHash = window.btoa(getAuthValue('spotify'));     // length 312
        let spotifyRefreshHash = window.btoa(getSpotifyRefreshToken());


        let appleAuthValue = [appleHash.slice(0, 128), appleHash.slice(128, 256), appleHash.slice(256, appleHash.length)];
        let spotifyAuthValue = [spotifyHash.slice(0, 128), spotifyHash.slice(128, 256), spotifyHash.slice(256, spotifyHash.length)];
        let spotifyRefreshValue = [spotifyRefreshHash.slice(0, 128), spotifyRefreshHash.slice(128, spotifyRefreshHash.length)];

        let syncStatus = await playlistPOST(appleAuthValue, spotifyAuthValue, spotifyRefreshValue, window.applePlaylistID, window.spotifyPlaylistID);

        if(syncStatus) {
            // SUCCESS in posting to backend!
            return syncStatus;
        } else {
            console.error('FAILED in posting to backend!');
            return false;
        }
    }

    async function startSyncProcess() {
        const popup = document.getElementById("popup-sync");
        const title = popup.querySelector("#popup-title");
        const content = popup.querySelector("#popup-content");
        const loadingSvg = popup.querySelector("#loading-icon");

        loadingSvg.style.display = "block";
        title.innerText = "Syncing..."
        title.style.color = "#000"
        content.innerText = "";
            
        openSyncPopUp();

        let response = await syncPlaylists();

        if (!response) {
            console.error('Error: failed to get a response');
            loadingSvg.style.display = "none";
            title.innerText = "Sorry..."
            title.style.color = "#fd5b5b"
            content.innerText = "Well this is embarassing lol, it seems we failed to link your playlists. Please make sure you are connected to the wifi and that you've followed all instructions on this page. If everything looks good please try again later.";
            return;
        } else if (response.status && response.status !== 200) {
            console.error('Error: response code not 200');
            loadingSvg.style.display = "none";
            title.innerText = "Sorry..."
            title.style.color = "#fd5b5b"
            content.innerText = "Well this is embarassing lol, it seems we failed to link your playlists. Please make sure you are connected to the wifi and that you've followed all instructions on this page. If everything looks good please try again later.";
            return;
        } else {
            loadingSvg.style.display = "none";
            title.innerText = "Success!"
            title.style.color = "#44ff82"
            content.innerText = "Sweet! We have successfully synced your playlists. Feel free to close this message and sync another playlist or reload the page if you would like to use another account!";
        }
    }

    return (
            <div className="sync-container">
                <div className="syncing-pop-up">
                    <div id="popup-sync" className="popup">
                    <div className="popup-card">
                        <h2 id="popup-title">Syncing...</h2>
                        <button id="close" className="close" onClick={closeSyncPopUp}>&times;</button>
                        <p id="popup-content" className="popup-card--content"></p>
                        <svg id="loading-icon" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle fill="none" stroke="#7f8ff4" strokeWidth="14" cx="50" cy="50" r="42" opacity=".5"/><circle fill="#7f8ff4" stroke="#7f8ff4" strokeWidth="3" cx="8" cy="54" r="4"><animateTransform attributeName="transform" dur="0.5s" type="rotate" from="0 50 50" to="360 50 50" repeatCount="indefinite"/></circle></svg>                    </div>
                    </div>
                </div>
                <ul className="sync-progress-bar">
                    <li className="active">1st Playlist</li>
                    <li>2nd Playlist</li>
                    <li>Sync</li>
                </ul>
                <button className="sync-button" onClick={ startSyncProcess }>
                    Sync Playlists
                </button>
            </div>
    )
}

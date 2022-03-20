import { useState, useEffect } from "react";
import BackButton from "../../../components/BackButton";
import MusicCard2 from "../../../components/MusicCard2";
import AuthorizerAppleMusic from "../../../components/AuthorizerAppleMusic";
import AuthorizerSpotify from "../../../components/AuthorizerSpotify";
import Submit from "../../../components/Submit";

export default function TextEmail(props) {
  const [playlistReady, setPlaylistReady] = useState(false);
  const [contactReady, setContactReady] = useState(false);
  const [popUpStatus, setPopUpStatus] = useState('popup-hide');
  const { isTest } = props;

  function openPopUp() {
    setPopUpStatus("popup-show");
  }

  function closePopUp() {
    setPopUpStatus("popup-hide");
  }

  useEffect(() => {
    setTimeout(openPopUp,500);
  }, []);

  return (
    <div className="content page-text-email">
      {isTest &&
        <div className="test-element hidden">
          <button id="testOpenPopUp" onClick={openPopUp}></button>  
        </div>
      }
      <div className="coming-soon">
        <div id="popup" className={`popup ${popUpStatus}`}>
          <div className="popup-card">
            <h2>Coming Soon!</h2>
            <button id="close" className="close" onClick={closePopUp}>&times;</button>
            <p className="popup-card--content">This page is still in development so submitting won't actually do anything. But feel free to mess around!</p>
          </div>
        </div>
      </div>

      <BackButton></BackButton>
      <div className="double-authorizer-wrapper">
        <MusicCard2
          confirmPlaylist={setPlaylistReady}
          setContactReady={setContactReady}
        >
          <AuthorizerAppleMusic />
          <AuthorizerSpotify />
        </MusicCard2>
      </div>
      <Submit playlistReady={playlistReady} contactReady={contactReady} />

      <div className="how-it-works text-email">
          <h1 className="how-it-works-title">How to use this sync card</h1>
          <div className="point need">
              <h2 className="point-title">Choose</h2>
              <div className="point-description">
                  <p>This one is for when you peer is not with you.
                      <br /><br />
                      Simply, you log in with youe Apple Music or Spotify account, whichever you use and want to sync.
                      <br /><br />
                      You then choose the playlist you would like to sync and provide your peers email or phone number, whichever method they prefer to receive a link to pair with you.
                      <br /><br />
                      If you want to make a new playlist, then enter the name of the new playlist and press the button below it to create it.
                      <br /><br />
                      Then just press the Submit button and we'll send a link to your peer, so that they can submit their information.
                      <br /><br />
                      Once your peer submits their information to sync, then your playlist will sync ahead and be good to go!.
                      <br/><br/>
                  </p>
              </div>
          </div>
      </div>
    </div>
  );
}

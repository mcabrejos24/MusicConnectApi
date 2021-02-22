import "./style.scss";
import { useState } from "react";
import BackButton from "../components/BackButton";
import MusicCard3 from "../../../components/MusicCard3";
import AuthorizerAppleMusic from "../../../components/AuthorizerAppleMusic";
import AuthorizerSpotify from "../../../components/AuthorizerSpotify";
import SubmitSync from "../../../components/SubmitSync";

export default function SyncID() {
  const [playlistReady, setPlaylistReady] = useState(false);

  return (
    <div className="content">
      <BackButton></BackButton>
      <div className="double-authorizer-wrapper">
        <MusicCard3 confirmPlaylist={setPlaylistReady}>
          <AuthorizerAppleMusic />
          <AuthorizerSpotify />
        </MusicCard3>
      </div>
      <SubmitSync playlistReady={playlistReady} />
    </div>
  );
}

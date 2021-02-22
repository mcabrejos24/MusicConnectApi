import "../assets/styles/components/music-card-3.scss";
import React, { useEffect } from "react";
import { useState } from "react";
import ModishInputBar from "./ModishInputBar";
import SyncID from "./SyncID";

export default function MusicCard2(props) {
  const { confirmPlaylist } = props;

  const [service, setService] = useState(false); // to show next step

  const [auth, setAuth] = useState(false);

  const [linkName, setLinkName] = useState("");
  const [link, setLink] = useState("");


  useEffect(() => {
      if(service) {
        console.log('has sync ID: '+service);
        document.querySelector('.sync-id-container').classList.add('hidden');
        document.querySelector(`.authorizer-button-wrapper-${service}`).classList.remove("hidden");
        setLinkName(service);
        if(service === "spotify") {
            setLink('https://www.spotify.com');
          } else if (service === 'apple') {
            setLink('https://music.apple.com/us/browse');
        }

        if(auth) {
            document.querySelector(`.authorizer-button-wrapper-${service}`).classList.add("hidden");
            document.querySelector(`.playlist-checker-${service}`).classList.remove("hidden");
        }
      }
}, [auth, service]);

  return (
    <div className={`music-wrapper music-wrapper-${service ? service : ""}`}>
      <div className={`music-header text-5xl`}>
        <a className={`header-title-${service ? service : ""}`} href={link}>
          {linkName}
        </a>
      </div>
      
      <div className="sync-id-container">
        <SyncID syncReady={ setService }/>
      </div>


      <div
        className={`hidden authorizer-choose-auth authorizer-button-wrapper-apple`}
      >
        {React.cloneElement(props.children[0], { setter: setAuth })}
      </div>

      <div
        className={`hidden  authorizer-choose-auth authorizer-button-wrapper-spotify`}
      >
        {React.cloneElement(props.children[1], { setter: setAuth })}
      </div>

      
      <div
        className={`playlist-checker playlist-checker-${
          service ? service : ""
        } hidden`}
      >
        <p className="music-card-description">
          Enter the name of the playlist you want to link
        </p>
        <p className="music-card-note">
          {service === "apple"
            ? "Note: In order for us to successfuly FIND your APPLE playlist of choice, you must have at least one song already in it."
            : "Note: In order for us to successfuly LINK your SPOTIFY playlist of choice, you must be the owner of this playlist."}
        </p>
        <ModishInputBar service={service} confirmPlaylist={confirmPlaylist} />
      </div>
    </div>
  );
}

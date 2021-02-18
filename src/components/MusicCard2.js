import React, { useEffect } from "react";
import { useState } from "react";
import "../assets/styles/components/music-card-2.scss";
import ModishInputBar from "./ModishInputBar";
import ContactInputBar from "./ContactInputBar";

export default function MusicCard2(props) {
    const { confirmPlaylist } = props;
    const { setContactReady } = props;

    const [service, setService] = useState(false);
    const [linkName, setLinkName] = useState("");    
    const [link, setLink] = useState("");

    useEffect(() => {
        if (service) {
            document.querySelector(`.authorizer-button-wrapper-${service}`).classList.add("hidden");
            document.querySelector(`.playlist-checker-${service}`).classList.remove("hidden");
            setLinkName(service);
            if(service === "spotify") {
              setLink('https://www.spotify.com');
            } else if (service === 'apple') {
              setLink('https://music.apple.com/us/browse');
            }
        }
    }, [service]);

    if (!confirmPlaylist && !setContactReady) {
      console.error("No confirmPlaylist passed.");
      return;
    }

  return (
    <div className={`music-wrapper music-wrapper-${service ? service : ""}`}>
      <div className={`music-header text-5xl`}>
        <a className={`header-title-${service ? service : ""}`} href={link}>
          {linkName}
        </a>
      </div>
      <div
        className={`authorizer-choose-auth authorizer-button-wrapper-${service ? service : ""}`}
      > 
        Choose how you would like to authorize: <br/><br/>
        {React.cloneElement(props.children[0], { setter: setService })}
        <br/>
        OR
        <br/><br/>
        {React.cloneElement(props.children[1], { setter: setService })}
      </div>
      <div className={`playlist-checker playlist-checker-${service ? service : ""} hidden`}>
        <p className="music-card-description">
          Enter the name of the playlist you want to link
        </p>
        <p className="music-card-note">
          {service === "apple"
            ? "Note: In order for us to successfuly FIND your APPLE playlist of choice, you must have at least one song already in it."
            : "Note: In order for us to successfuly LINK your SPOTIFY playlist of choice, you must be the owner of this playlist."}
        </p>
        <ModishInputBar service={service} confirmPlaylist={ confirmPlaylist } />

        <p className="music-card-description">
          Enter the email address/phone number of your peer who will be syncing their playlist with yours.
        </p>
        <p className="music-card-note">
          Note: This information is used so your peer receives an invitation to sync their playlist. We do not save this information.
        </p>
        <ContactInputBar service={service} setContactReady={setContactReady}/>

      </div>
    </div>
  );
}

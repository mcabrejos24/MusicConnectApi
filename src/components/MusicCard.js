import React from "react";
import { useState } from "react";
import "../assets/styles/components/music-card.scss";
import ModishInputBar from "./ModishInputBar";

export default function MusicCard(props) {
  const { service } = props;
  const { link } = props;
  const { linkName } = props;
  const { confirmPlaylist } = props;

  const authorized = false; // variable used to check if user has authorized previously
  const [showInput, setShowInput] = useState(authorized ? true : false);

  if (!service || !link || !linkName) {
    console.error("No service, link or linkName was given. Check MusicCard.js");
    return;
  }

  if (showInput) {
    document
      .querySelector(`.authorizer-button-wrapper-${service}`)
      .classList.add("hidden");
    document
      .querySelector(`.playlist-checker-${service}`)
      .classList.remove("hidden");
  }

  return (
    <div className={`music-wrapper music-wrapper-${service}`}>
      <div className={`music-header text-5xl`}>
        <a className={`header-title-${service}`} href={link}>
          {linkName}
        </a>
      </div>
      <div
        className={`authorizer-button-wrapper authorizer-button-wrapper-${service}`}
      >
        {React.cloneElement(props.children, { setter: setShowInput })}
      </div>
      <div className={`playlist-checker playlist-checker-${service} hidden`}>
        <p className="music-card-description">
          Enter the name of the playlist you want to link
        </p>
        <p className="music-card-note">
          {service == "apple"
            ? "Note: In order for us to successfuly FIND your APPLE playlist of choice, you must have at least one song already in it."
            : "Note: In order for us to successfuly LINK your SPOTIFY playlist of choice, you must be the owner of this playlist."}
        </p>
        <ModishInputBar service={service} confirmPlaylist={ confirmPlaylist } />
      </div>
    </div>
  );
}

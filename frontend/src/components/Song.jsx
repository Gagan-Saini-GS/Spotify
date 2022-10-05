import React from "react";
import Image from "./Image";

function Song(props) {
  return (
    <div className="song">
      <audio src={props.songSrc}></audio>
      <img src={props.imgSrc} className="songImage" />
      <div className="song-details">
        <p>{props.singer}</p>
        <p>{props.songName}</p>
      </div>
    </div>
  );
}

export default Song;

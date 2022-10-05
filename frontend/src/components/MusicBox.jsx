import React from "react";
import { useState } from "react";
import Image from "./Image";

function MusicBox(props) {
  const [playingSong, setPlayingSong] = useState(true);

  function handlePlay() {
    const currentSong = document.querySelector(".currentSong");
    // currentSong.volume = 0.1;

    if (playingSong === false) {
      currentSong.play();
      setPlayingSong(true);
    } else {
      currentSong.pause();
      setPlayingSong(false);
    }
  }

  function controlVolume() {
    const currentSong = document.querySelector(".currentSong");
    const volume = document.querySelector(".volume-controler").value;

    // console.log(volume);
    currentSong.volume = volume / 100;
  }

  return (
    <div className="music-box">
      <Image src={props.imgSrc} />
      <div className="playing-song-details">
        <p>{props.singer}</p>
        <p>{props.songName}</p>
        <audio className="currentSong" src={props.songSrc} autoPlay></audio>
      </div>
      <div>
        <input
          onChange={controlVolume}
          className="volume-controler"
          type="range"
          name="volume"
          min="0"
          max="100"
        />
      </div>
      <div className="controls">
        {/* Backward */}
        <i
          onClick={() => {
            props.playBackward();
          }}
          class="fas fa-backward"
        ></i>

        {/* Play/Pause */}
        {playingSong ? (
          <i onClick={handlePlay} class="fas fa-pause"></i>
        ) : (
          <i onClick={handlePlay} class="fas fa-play"></i>
        )}

        {/* Forward */}
        <i
          onClick={() => {
            props.playForward();
          }}
          class="fas fa-forward"
        ></i>
      </div>
    </div>
  );
}

export default MusicBox;

import React from "react";
import Song from "./Song";
import songArr from "../songsDetails";

function Library(props) {
  return (
    <div className="library-box">
      <h1>Likded Songs</h1>
      <div className="songList">
        {songArr.map((item, index) => {
          return (
            <div
              onClick={() => {
                props.getSongDetails(index);
              }}
            >
              <Song
                key={item.id}
                id={item.id}
                songSrc={item.songSrc}
                imgSrc={item.imgSrc}
                singer={item.singer}
                songName={item.songName}
              />
            </div>
          );
        })}
      </div>
      <div className="addSongBtn">
        <button
          onClick={() => {
            props.addSong();
          }}
        >
          Add Song
        </button>
      </div>
    </div>
  );
}

export default Library;

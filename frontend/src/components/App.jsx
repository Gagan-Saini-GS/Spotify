import React, { useState } from "react";
import Navbar from "./Navbar";
import MusicBox from "./MusicBox";
import Library from "./Library";
import songsArr from "../songsDetails";
import AddSong from "./AddSong";
import About from "./About";
import { useEffect } from "react";

function App() {
  const [songInfo, setSongInfo] = useState({
    songSrc: "songs/On My Way.mp3",
    imgSrc: "images/singers/alan-walker.png",
    singer: "Alan Walker",
    songName: "On My Way",
  });

  const [currSongIndex, setCurrSongIndex] = useState(0);

  function getSongDetails(index) {
    setSongInfo(() => {
      setCurrSongIndex(index);
      return songsArr[index];
    });
  }

  function playForward() {
    setSongInfo((prev) => {
      if (currSongIndex < songsArr.length - 1) {
        setCurrSongIndex(currSongIndex + 1);
        return songsArr[currSongIndex + 1];
      } else {
        return prev;
      }
    });
  }

  function playBackward() {
    setSongInfo((prev) => {
      if (currSongIndex > 0) {
        setCurrSongIndex(currSongIndex - 1);
        return songsArr[currSongIndex - 1];
      } else {
        return prev;
      }
    });
  }

  // Add song
  const [isAddedSongClicked, setAddedSongClicked] = useState(false);

  function addSong() {
    console.log("hello");
    setAddedSongClicked(true);
  }

  function goToHome() {
    setAddedSongClicked(false);
  }

  return (
    <div>
      <Navbar goToHome={goToHome} getSongDetails={getSongDetails} />
      {!isAddedSongClicked ? (
        <div className="main-container">
          <MusicBox
            playForward={playForward}
            playBackward={playBackward}
            songSrc={songInfo.songSrc}
            imgSrc={songInfo.imgSrc}
            singer={songInfo.singer}
            songName={songInfo.songName}
          />
          <Library getSongDetails={getSongDetails} addSong={addSong} />
        </div>
      ) : (
        <div className="main-container">
          <AddSong />
          <About />
        </div>
      )}
    </div>
  );
}

export default App;

import React, { useState } from "react";
import songs from "../songsDetails";

function AddSong() {
  const [newSong, setNewSong] = useState({
    id: "",
    singer: "",
    songName: "",
    imgSrc: "",
    songSrc: "",
  });

  function handleInputs(event) {
    const { name, value } = event.target;

    setNewSong((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleAddSong(event) {
    // console.log(event.target);
    newSong.id = songs.length + 1;
    songs.push(newSong);
    console.log(songs);
    event.preventDefault();

    setNewSong(() => {
      return {
        singer: "",
        songName: "",
        imgSrc: "",
        songSrc: "",
      };
    });
  }

  return (
    <div className="add-song-container">
      <h1>Add New Song</h1>
      <form>
        <div className="song-item">
          <p>Singer</p>
          <input
            onChange={handleInputs}
            type="text"
            name="singer"
            placeholder="Name of singer..."
            value={newSong.singer}
          />
        </div>
        <div className="song-item">
          <p>Song Name</p>
          <input
            onChange={handleInputs}
            type="text"
            name="songName"
            placeholder="Name of song..."
            value={newSong.songName}
          />
        </div>
        <div className="song-item">
          <p>Image Source</p>
          <input
            onChange={handleInputs}
            type="text"
            name="imgSrc"
            placeholder="Location of Image..."
            value={newSong.imgSrc}
          />
        </div>
        <div className="song-item">
          <p>Song Source</p>
          <input
            onChange={handleInputs}
            type="text"
            name="songSrc"
            placeholder="Location of song..."
            value={newSong.songSrc}
          />
        </div>
        <button className="addBtn" onClick={handleAddSong}>
          Add Song
        </button>
      </form>
    </div>
  );
}

export default AddSong;

import React from "react";
import songs from "../songsDetails";

function SearchBox(props) {
  // function search() {
  //   const searchedSong = document.querySelector(".searchInput").value;
  //   // console.log(search.value);
  //   let id = 0;

  //   for (var i = 0; i < songs.length; i++) {
  //     if (songs[i].songName === searchedSong) {
  //       id = songs[i].id;
  //       break;
  //     }
  //   }

  //   console.log(id);
  // }

  return (
    <div className="input-container">
      <i
        className="fa fa-search"
        onClick={() => {
          let searchedSong = document.querySelector(".searchInput").value;

          let first = searchedSong[0].toUpperCase();
          searchedSong = first + searchedSong.substring(1, searchedSong.lenght);
          let id = 0;

          for (var i = 0; i < songs.length; i++) {
            if (songs[i].songName === searchedSong) {
              id = songs[i].id;
              break;
            }
          }
          console.log(id);
          props.getSongDetails(id - 1);
        }}
      ></i>
      <input className="searchInput" type="search" placeholder="Search" />
    </div>
  );
}

export default SearchBox;

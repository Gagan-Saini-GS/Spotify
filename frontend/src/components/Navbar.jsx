import React from "react";
import SearchBox from "./SearchBox";

function Navbar(props) {
  return (
    <div className="navbar-container">
      <p className="nav-item">Spotify</p>
      <p
        className="nav-item"
        onClick={() => {
          props.goToHome();
        }}
      >
        Home
      </p>
      <p className="nav-item">Library</p>
      <SearchBox getSongDetails={props.getSongDetails} />
      <i className="fas fa-user user-icon"></i>
    </div>
  );
}

export default Navbar;

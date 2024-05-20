import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        Netflix Clone
      </div>
      <div className="navbar__links">
        <a href="#" className="navbar__link">Home</a>
        <a href="#" className="navbar__link">TV Shows</a>
        <a href="#" className="navbar__link">Movies</a>
        <a href="#" className="navbar__link">New & Popular</a>
        <a href="#" className="navbar__link">My List</a>
      </div>
      <div className="navbar__profile">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Profile"
          className="navbar__avatar"
        />
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img className="logo-img" src="assets/logo.svg" alt=""></img>
      </div>
      <div className="dark-theme">
        <button
          className="btn-theme" /* onClick={toggleTheme} defaultChecked={selectedTheme === "dark"} */
        >
          <img className="icon-sun" src="assets/icon-sun.svg" alt="sun" />
          <img className="icon-moon" src="assets/icon-moon.svg" alt="moon" />
        </button>
      </div>
      <div className="div-border"></div>
      <img className="avatar" src="assets/image-avatar.jpg"></img>
    </div>
  );
};

export default Header;

import React, { useEffect, useState } from "react";

const Header = () => {
  const [checked, setChecked] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("light");

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  useEffect(() => {
    const themeFromLocalStorage = localStorage.getItem("selectedTheme");
    setSelectedTheme(themeFromLocalStorage || "light");
  }, []);

  useEffect(() => {
    if (selectedTheme === "dark") {
      setChecked(true);
      setDarkMode();
    } else {
      setChecked(false);
      setLightMode();
    }
  }, [selectedTheme]);

  const toggleTheme = () => {
    if (!checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
    setChecked((prev) => !prev);
  };

  return (
    <div className="header">
      <div className="logo">
        <img className="logo-img" src="assets/logo.svg" alt=""></img>
      </div>
      <div className="dark-theme">
        <button
          className="btn-theme"
          id="toggle"
          onClick={toggleTheme}
          defaultChecked={selectedTheme === "dark"}
          checked={checked}
        >
          {checked ? (
            <img className="icon-sun" src="assets/icon-sun.svg" alt="sun" />
          ) : (
            <img className="icon-moon" src="assets/icon-moon.svg" alt="moon" />
          )}
        </button>
      </div>
      <div className="div-border"></div>
      <img className="avatar" src="assets/image-avatar.jpg"></img>
    </div>
  );
};

export default Header;

import React, { useEffect, useState } from 'react';
import Lightbutton from "../assets/light-mode-button.png";
import Darkbutton from "../assets/Dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    // Apply the theme based on the saved preference
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]); // Add theme as a dependency

  return (
    <div className="relative">
      <img
        src={Lightbutton}
        alt="Light button"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
        className={`w-12 cursor-pointer drop-shadow-[1px-1px-1px-rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
      />
      <img
        src={Darkbutton}
        alt="Dark button"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
        className="w-12 cursor-pointer drop-shadow-[1px-1px-1px-rgba(0,0,0,0.1)] transition-all duration-300"
      />
    </div>
  );
};

export default DarkMode;

import { useEffect, useState } from "react";
import React from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light-theme");

  const handleChangeTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      console.log("dark-theme");
    } else {
      setTheme("light-theme");
      console.log("light-theme");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="m-t-5 m-r-10">
      <label className="switch">
        <input
          type="checkbox"
          name="checkbox"
          onChange={handleChangeTheme}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ThemeToggle;

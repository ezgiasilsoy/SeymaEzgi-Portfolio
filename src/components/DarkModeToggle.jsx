import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"; 

function DarkModeToggle() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const sunIcon = "/assets/icons8-sun-32.png";
const moonIcon = "/assets/icons8-moon-24.png";


  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={toggleTheme}
        className={`relative w-20 h-9 flex items-center rounded-full transition-all duration-300 ${
          darkMode ? "bg-[#3A3A3A]" : "bg-[#4731D3]"
        }`}
      >
        <div
          className={`absolute w-6 h-6 rounded-full shadow-md flex items-center justify-center transform transition-all duration-300 ${
            darkMode ? "translate-x-1" : "translate-x-12"
          }`}
        >
          <img
            src={darkMode ? moonIcon : sunIcon}
            alt="theme icon"
            className="w-5 h-5"
          />
        </div>
      </button>

      <span className="font-bold text-l dark:text-[#D9D9D9] text-[#777777] select-none">
        {darkMode ? "LIGHT MODE" : "DARK MODE"}
      </span>
    </div>
  );
}

export default DarkModeToggle;

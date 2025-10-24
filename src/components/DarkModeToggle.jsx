import { useState, useEffect } from "react";
import sunIcon from "../../public/assets/icons8-sun-32.png";
import moonIcon from "../../public/assets/icons8-moon-24.png";

function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleToggle = () => {
    setDark((prev) => !prev);
    document.documentElement.classList.toggle("dark");

    localStorage.setItem("theme", !dark ? "dark" : "light");
  };

  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={handleToggle}
        className={`relative w-20 h-9 flex items-center rounded-full transition-all duration-300 ${
          dark ? "bg-[#3A3A3A]" : "bg-[#4731D3]"
        }`}
      >
        <div
          className={`absolute w-6 h-6 rounded-full shadow-md flex items-center justify-center transform transition-all duration-300 ${
            dark ?   "translate-x-1" :"translate-x-12"
          }`}
        >
          <img
            src={dark ?   moonIcon: sunIcon}
            alt="theme icon"
            className="w-5 h-5"
          />
        </div>
      </button>

      <span className="font-bold  text-l dark:text-[#D9D9D9] text-[#777777] select-none">
        {dark ? "LIGHT MODE" : "DARK MODE"}
      </span>
    </div>
  );
}

export default DarkModeToggle;

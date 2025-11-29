import React from 'react';
import DarkModeToggle from "./DarkModeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from '../context/LanguageContext'; 
import { useScroll } from '../context/ScrollContext'; 

const Header = ({ darkMode, setDarkMode }) => {
  const { language } = useLanguage(); 
  const { skillsRef, projectsRef, scrollToSection } = useScroll(); 

  const navTexts = {
    skills: language === 'tr' ? 'Yetenekler' : 'Skills',
    projects: language === 'tr' ? 'Projeler' : 'Projects',
    cta: language === 'tr' ? 'Birlikte Çalışalım' : 'Hire Me',
  };

  return (
    <header className="flex flex-row items-center justify-between container mx-auto px-4 md:px-16 py-6 
                       bg-white dark:bg-[#252128] overflow-hidden">

      {/* Logo */}
      <div className="flex items-center">
        <div className="w-12 h-12 flex items-center justify-center rounded-full 
                        dark:text-[#8F88FF] dark:bg-[#4731D3] bg-[#EEEBFF] text-[#7B61FF] 
                        text-3xl font-ariel shadow-lg transition-transform duration-300 cursor-pointer select-none">
          Ş
        </div>
      </div>

      {/* Sağ taraf */}
      <div className="flex flex-col items-end gap-4">

        {/* Tema ve Dil toggle */}
        <div className="flex flex-row items-center gap-4 whitespace-nowrap">
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <LanguageToggle />
        </div>

        {/* Navigation */}
        <nav className="flex flex-row gap-4 sm:gap-6 items-center text-gray-800 dark:text-[#6B7280] whitespace-nowrap">

          <button onClick={() => scrollToSection(skillsRef)} className="hover:underline">
            {navTexts.skills}
          </button>

          <button onClick={() => scrollToSection(projectsRef)} className="hover:underline">
            {navTexts.projects}
          </button>

          <button className="border border-[#3730A3] dark:border-white dark:bg-white dark:text-[#3730A3]
                             px-3 py-1 sm:px-4 sm:py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-200 
                             transition font-semibold text-sm sm:text-base">
            {navTexts.cta}
          </button>
        </nav>
      </div>

    </header>
  );
};

export default Header;

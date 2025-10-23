import React from 'react';
import DarkModeToggle from "./DarkModeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from '../context/LanguageContext'; 
import { useScroll } from '../context/ScrollContext'; 

const Header = ({ darkMode, setDarkMode }) => {
  const { content, language } = useLanguage(); 
  const { skillsRef, projectsRef, scrollToSection } = useScroll(); 

  const navTexts = {
    skills: language === 'tr' ? 'Yetenekler' : 'Skills',
    projects: language === 'tr' ? 'Projeler' : 'Projects',
    cta: language === 'tr' ? 'Birlikte Çalışalım' : 'Hire Me',
  };

  return (
    <header className="flex flex-row items-center justify-between mx-auto container px-6 md:px-20 py-16 bg-white dark:bg-gray-900">
      
      <div className="flex items-center">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#EEEBFF] text-[#7B61FF] text-3xl italic font-bold shadow-lg hover:rotate-12 transition-transform duration-300 cursor-pointer select-none">
          Ş
        </div>
      </div>

      <div className="flex flex-col items-end gap-6">
        <div className="flex flex-row gap-10 items-center">
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <LanguageToggle/>
        </div>

        <nav className="flex flex-row gap-15 items-center text-gray-800 dark:text-white">
          
          <button 
            onClick={() => scrollToSection(skillsRef)}
            className="hover:underline"
          >
            {navTexts.skills}
          </button>
          
          <button 
            onClick={() => scrollToSection(projectsRef)}
            className="hover:underline"
          >
            {navTexts.projects}
          </button>
          
          <button className="border outline-1 border-[#3730A3] dark:border-white px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            {navTexts.cta}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
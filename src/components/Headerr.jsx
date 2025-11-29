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
    <header className="flex flex-wrap md:flex-nowrap items-center justify-between 
                    mx-auto container px-4 sm:px-6 md:px-20 py-10 
                    bg-white dark:bg-[#252128] gap-6">

  <div className="flex items-center flex-shrink-0">
    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full 
                    dark:text-[#8F88FF] dark:bg-[#4731D3] 
                    bg-[#EEEBFF] text-[#7B61FF] text-2xl sm:text-3xl rotate-25 
                    shadow-lg hover:rotate-12 transition-transform duration-300 
                    cursor-pointer select-none">
      Ş
    </div>
  </div>

  <div className="flex flex-col items-end gap-4 w-full md:w-auto">
    <div className="flex flex-row gap-4 sm:gap-6 items-center flex-wrap justify-end">
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <LanguageToggle />
    </div>

    <nav className="flex flex-wrap gap-4 sm:gap-10 items-center 
                    text-gray-800 dark:text-[#6B7280] justify-end w-full">
      
      <button onClick={() => scrollToSection(skillsRef)} className="hover:underline">
        {navTexts.skills}
      </button>

      <button onClick={() => scrollToSection(projectsRef)} className="hover:underline">
        {navTexts.projects}
      </button>

      <button className="border border-[#3730A3] dark:border-white 
                         dark:bg-white dark:text-[#3730A3]
                         px-3 sm:px-4 py-2 rounded">
        {navTexts.cta}
      </button>

    </nav>
  </div>
</header>

  );
};

export default Header;
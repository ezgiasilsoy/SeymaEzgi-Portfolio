import React from "react";
import { useLanguage } from '../context/LanguageContext'; 

const Footer = () => {
  const { language, globalFooter } = useLanguage(); 
  
  const githubLink = globalFooter.github;
  const linkedinLink = globalFooter.linkedin;
  
  const callToAction = language === 'tr' ? "Hadi birlikte çalışalım." : "Let's work together.";
  const personalBlogText = language === 'tr' ? "Kişisel Blog" : "Personal Blog";
  const emailAddress = "ezgiseyma@gmail.com";

  return (
    <footer className="mx-auto container px-6 md:px-20 py-16 bg-white dark:bg-[#141414]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-gray-200 dark:border-gray-700 pt-10">
        
        <div className="mb-8 md:mb-0 max-w-xl">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-[#AEBCCF] mb-6 leading-snug">
            {callToAction}
          </h2>
          <a
            href={`mailto:${emailAddress}`}
            className="text-lg font-medium text-[#AF0C48] dark:text-[#BAB2E7] dark:[#AF0C48] hover:underline flex items-center"
          >
            <span className="inline-block w-3 h-3 bg-[#BAB2E7] rounded-full mr-2"></span> 
            {emailAddress}
          </a>
        </div>

        <div className="flex gap-6 text-gray-900 dark:text-white">
          <span className="font-semibold text-m">{personalBlogText}</span>
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-semibold text-m text-[#00AB6B] hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Github
          </a>
          <a 
            href={linkedinLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-semibold text-m text-[#0077B5] hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Linkedin
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
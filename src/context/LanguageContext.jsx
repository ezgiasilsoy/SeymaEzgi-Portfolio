

import { createContext, useState, useContext } from "react"; 
import data from "../test"; 

export const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext); 

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const toggleLanguage = () => {
    setLanguage(prev => (prev === "en" ? "tr" : "en"));
  };
  
  
  const content = data[language]; 

 
  const value = { language, toggleLanguage, setLanguage, content, globalFooter: data.footer };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
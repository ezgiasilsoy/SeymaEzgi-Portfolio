
import React from 'react';
import { useLanguage } from '../context/LanguageContext'; 

function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage();

    let switchLangText, switchSuffix;

    if (language === 'tr') {
        switchLangText = "FOR";
        switchSuffix = " ENGLISH"; 
    } else {
        switchLangText = "TÜRKÇE";
        switchSuffix = "'YE GEÇ";
    }

    return (
        <div 
            onClick={toggleLanguage} 
            className='text-l font-bold  text-[#777777] cursor-pointer dark:text-[#D9D9D9]'
        >
            <span className='text-[#4731D3] dark:text-[#BAB2E7] '>{switchLangText}</span>
            {switchSuffix}
        </div>
    );
}

export default LanguageToggle;
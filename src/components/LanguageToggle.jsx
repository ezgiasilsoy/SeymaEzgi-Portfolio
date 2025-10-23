
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
            className='text-l font-[Inter] font-extrabold text-[#777777] cursor-pointer'
        >
            <span className='text-[#4731D3] font-bold'>{switchLangText}</span>
            {switchSuffix}
        </div>
    );
}

export default LanguageToggle;
import React, { useState } from "react";
import axios from "axios";
import { useLanguage } from '../context/LanguageContext'; 

export default function Hero() {
  const { content, language } = useLanguage(); 
  const { heroSection } = content; 
  const [message, setMessage] = useState(""); 

  const hireMeText = language === 'tr' ? 'Bana Ulaş' : 'Hire me';

  const handleHireMeClick = () => {
    axios.post("https://reqres.in/api/workintech", {
      name: heroSection.name,
      message: "İletişim isteği gönderildi"
    })
    .then(() => {
      setMessage(language === 'tr' 
        ? "İstek başarıyla gönderildi!" 
        : "Request sent successfully!");
    })
    .catch(() => {
      setMessage(language === 'tr' 
        ? "Bir hata oluştu." 
        : "An error occurred.");
    });
  };

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between 
                    container mx-auto px-4 sm:px-6 md:px-20 py-12 
                    bg-white dark:bg-[#252128] gap-10">

  
  <div className="md:w-1/2 w-full space-y-4 sm:space-y-6 text-center md:text-left">

    <p className="text-indigo-700 font-semibold text-base sm:text-lg dark:text-[#BAB2E7]">
      {heroSection.name}
    </p>

    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight 
                   text-gray-800 dark:text-[#AEBCCF] break-words">
      {heroSection.text1}
    </h1>

    <p className="text-[#6B7280] dark:text-white max-w-[95%] mx-auto md:mx-0">
      {heroSection.description}
    </p>

    <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
      <button
        onClick={handleHireMeClick}
        className="bg-[#3730A3] text-white px-5 py-3 rounded-lg font-medium 
                   dark:text-[#000000] hover:bg-indigo-600 dark:bg-[#E1E1FF] 
                   dark:hover:bg-indigo-200 transition"
      >
        {hireMeText}
      </button>

      {heroSection.socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-[#3730A3] 
                     text-[#3730A3] dark:border-[#E1E1FF] dark:text-[#E1E1FF] 
                     px-4 py-2 rounded-md hover:bg-[#E1E1FF] dark:hover:bg-gray-800 transition"
        >
          <img src={social.logo} alt={social.altText} className="w-6 h-6" />
          <span>{social.text}</span>
        </a>
      ))}
    </div>

    {message && <p className="text-green-600 dark:text-green-400 mt-3">{message}</p>}
  </div>

  
  <div className="md:w-1/2 flex justify-center">
    <img
      src={heroSection.profileImage}
      alt="Profile"
      className="rounded-2xl shadow-lg w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[380px] object-cover"
    />
  </div>
</section>

  );
}

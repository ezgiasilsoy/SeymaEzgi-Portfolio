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
    <section className="flex flex-col mx-auto md:flex-row items-center justify-between container px-6 md:px-20 py-16 bg-white dark:bg-[#252128]">
      <div className="md:w-1/2 space-y-6">
        
        <p className="text-indigo-700 font-semibold text-lg dark:text-[#BAB2E7]">
          {heroSection.name}
        </p>

        <h1 className="text-6xl font-bold leading-tight text-gray-800 dark:text-[#AEBCCF]">
          {heroSection.text1}
        </h1>

        <p className="text-[#6B7280]  dark:text-[#FFFFFF]">{heroSection.description}</p>

        <div className="flex gap-4 mt-8 flex-wrap">
          <button
            onClick={handleHireMeClick}
            className="bg-[#3730A3] text-white px-5 py-3 rounded-lg font-medium dark:text-[#000000] hover:bg-indigo-600 dark:bg-[#E1E1FF] dark:hover:bg-indigo-200"
          >
            {hireMeText}
          </button>

          {heroSection.socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#3730A3] text-[#3730A3] dark:border-[#E1E1FF] dark:text-[#E1E1FF] px-5 py-3 rounded-md hover:bg-[#E1E1FF] dark:hover:bg-gray-800 transition"
            >
              <img src={social.logo} alt={social.altText} className="w-6 h-6" />
              <span >{social.text}</span>
            </a>
          ))}
        </div>

        {message && (
          <p className="text-green-600 dark:text-green-400 mt-4">
            {message}
          </p>
        )}
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src={heroSection.profileImage}
          alt="Profile"
          className="rounded-2xl shadow-lg w-[400px] h-[380px] object-cover"
        />
      </div>
    </section>
  );
}

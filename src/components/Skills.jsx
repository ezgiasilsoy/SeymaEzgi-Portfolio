import React from "react";
import { useLanguage } from '../context/LanguageContext'; 
import { useScroll } from '../context/ScrollContext';
export default function Skills() {
  const { content } = useLanguage(); 
  const { skillSection } = content.heroSection; 
const { skillsRef } = useScroll();
  return (
    <section ref={skillsRef} className="container mx-auto px-6 md:px-20 py-16 bg-white dark:bg-[#252128]">
      
      <h2 className="text-4xl font-bold mb-10 text-[#1F2937] dark:text-[#AEBCCF]">
        {skillSection.title}
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {skillSection.skills.map((skill, index) => (
          <div key={index} className="space-y-3">
            
            <h3 className="text-[#4338CA] text-xl font-semibold dark:text-[#B7AAFF]">
              {skill.name}
            </h3>
            
            <p className="text-gray-600 text-sm dark:text-white">
              {skill.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
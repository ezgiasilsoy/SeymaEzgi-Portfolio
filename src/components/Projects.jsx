import React from "react";
import { useLanguage } from '../context/LanguageContext'; 
import { useScroll } from '../context/ScrollContext';
const Projects = () => {
    const { content, language } = useLanguage(); 
    const allProjects = Object.values(content.projects); 
    
    const staticTags = ["HTML", "CSS"]; 
    const dynamicTags = ["React", "JavaScript", "Axios", "TailWindCSS"]; 
    
    const projectTitle = language === 'tr' ? "Projeler" : "Projects";
    const githubText = "Github";
    const viewSiteText = language === 'tr' ? "Siteyi Görüntüle" : "View Site";
    const { projectsRef } = useScroll();
    
    return (
        <section ref={projectsRef} className="container mx-auto px-4 md:px-20 py-16 bg-white dark:bg-[#252128]">
            <h2 className="text-4xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-10">
                {projectTitle}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {allProjects.map((project, index) => {
                    
                    const tagsToUse = index === 0 ? staticTags : dynamicTags;
                    
                    return (
                        <div key={index} className="flex flex-col bg-white dark:bg-[#252128]">
                        
                            <div className="w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
                                <img 
                                    src={project.img } 
                                    alt={project.name} 
                                    className="w-full h-full object-cover " 
                                />
                            </div>

                            <div className="pt-6 pb-8 flex-grow">
                                <h3 className="text-2xl font-semibold text-[#4338CA] dark:text-[#CFCBFF] mb-2">{project.name}</h3>
                                
                                <p className="text-gray-600 dark:text-white mb-4 text-sm">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {tagsToUse.map((tag, tagIndex) => (
                                        <span 
                                            key={tagIndex} 
                                            className="text-xs font-semibold py-1 px-3 border border-[#3730A3] bg-white text-gray-800 dark:bg-[#252128] dark:border-[#8F88FF] dark:text-[#8F88FF]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between"> 
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-[#3730A3] dark:text-white font-medium text-sm hover:text-indigo-600 dark:hover:text-indigo-400 border-b border-gray-800 dark:border-white hover:border-indigo-600 pb-0.5"
                                    >
                                        {githubText}
                                    </a>
                                    <a 
  href={project.name === "Dinamik Pizza Sitesi" || project.name === "Dynamic Pizza Website" 
        ? "https://dinamic-pizza-site.vercel.app/" 
        : "#"} 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-[#3730A3] dark:text-white font-medium text-sm hover:text-indigo-600 dark:hover:text-indigo-400 border-b border-gray-800 dark:border-white hover:border-indigo-600 pb-0.5"
>
  {viewSiteText}
</a>

                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;

import React, { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext();

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);

    const scrollToSection = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start'      
            });
        }
    };

    const value = {
        skillsRef,
        projectsRef,
        scrollToSection
    };

    return (
        <ScrollContext.Provider value={value}>
            {children}
        </ScrollContext.Provider>
    );
};
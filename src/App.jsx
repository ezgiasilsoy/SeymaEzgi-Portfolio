import React, { useState, useEffect } from "react";
import Header from "./components/Headerr";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
 
  return (
    <div className="font-sans bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <Header  />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

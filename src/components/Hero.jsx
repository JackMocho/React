// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-600 to-purple-700 text-white min-h-screen flex items-center justify-center py-20 px-4">
      <div className="text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6">Jane Doe</h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-blue-100 mb-10">
          GIS Web Developer | Crafting Interactive Maps & Spatial Solutions
        </p>
        <a
          href="#projects"
          className="bg-white text-blue-700 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;

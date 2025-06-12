// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-xl font-bold hover:text-blue-300 transition-colors duration-300">Your Name / Brand</a>
        <ul className="flex space-x-4 md:space-x-6">
          <li><a href="#home" className="hover:text-blue-300 transition-colors duration-300 px-2 py-1 rounded-md">Home</a></li>
          <li><a href="#about" className="hover:text-blue-300 transition-colors duration-300 px-2 py-1 rounded-md">About</a></li>
          <li><a href="#projects" className="hover:text-blue-300 transition-colors duration-300 px-2 py-1 rounded-md">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-300 transition-colors duration-300 px-2 py-1 rounded-md">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

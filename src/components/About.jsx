// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">About Me</h2>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="w-full md:pr-8">
            {/* Placeholder for an image */}
            <div className="bg-gray-200 w-full h-80 rounded-xl shadow-lg flex items-center justify-center text-gray-500 text-lg">
              [Placeholder for Profile Image]
            </div>
          </div>
          <div className="prose prose-lg text-gray-700 max-w-none"> {/* Using Tailwind Typography plugin if installed, or manual styling */}
            <p className="leading-relaxed mb-4">
              Hello! I'm a passionate GIS Web Developer with a knack for transforming complex spatial data into intuitive and engaging web applications.
              My journey in geospatial technology has equipped me with a strong foundation in both front-end and back-end development, focusing on creating solutions that are not only functional but also user-friendly.
            </p>
            <p className="leading-relaxed mb-6">
              I thrive on challenges that involve cartography, spatial analysis, and data visualization. Always eager to learn and implement new technologies to push the boundaries of what's possible in web-based GIS.
            </p>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Key Skills:</h3>
            <ul className="space-y-2">
              {['JavaScript (React, Vue, Node.js)', 'Python (Flask, Django, GeoPandas)', 'Mapping Libraries (Leaflet, Mapbox GL JS, OpenLayers)', 'Geospatial Databases (PostGIS, SpatiaLite)', 'GIS Software (QGIS, ArcGIS)', 'Cloud Platforms (AWS, Azure)'].map(skill => (
                <li key={skill} className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

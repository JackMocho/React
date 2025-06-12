// src/components/Projects.jsx
import React from 'react';

const ProjectCard = ({ title, description, imageUrl, techStack, liveLink, repoLink }) => (
  <div className="bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col">
    <div className="w-full h-56 bg-gray-300 flex items-center justify-center text-gray-500 text-lg">
      {imageUrl ? <img src={imageUrl} alt={title} className="w-full h-full object-cover"/> : '[Project Image]'}
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-700 mb-4 text-sm leading-relaxed flex-grow">{description}</p>
      <p className="text-xs text-gray-500 mb-1">
        <span className="font-semibold">Technologies:</span> {techStack}
      </p>
      <div className="mt-auto pt-4 flex space-x-3">
        {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-sm bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">Live Demo</a>}
        {repoLink && <a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-sm bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300">GitHub</a>}
      </div>
    </div>
  </div>
);

const Projects = () => {
  // ... (projectData remains the same)
  const projectData = [
    {
      title: "Interactive Urban Planning Map",
      description: "A web-based platform for visualizing zoning regulations and proposed developments. Features include layer toggling, spatial queries, and data filtering.",
      techStack: "React, Leaflet, PostGIS, Node.js",
      liveLink: "#",
      repoLink: "#"
    },
    {
      title: "Environmental Monitoring Dashboard",
      description: "Dashboard displaying real-time sensor data on a map, with charts and alerts for environmental changes. Focused on air and water quality.",
      techStack: "Vue.js, Mapbox GL JS, Python (Flask), InfluxDB",
      liveLink: "#",
    },
    {
      title: "Trail Navigation Mobile App",
      description: "A (conceptual) mobile-first web app for hikers to discover and navigate trails, with offline map capabilities and points of interest.",
      techStack: "React Native (Web), OpenLayers, SQLite, PWA",
      repoLink: "#"
    }
  ];

  return (
    <section id="projects" className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

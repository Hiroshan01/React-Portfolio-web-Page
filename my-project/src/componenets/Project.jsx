import React from 'react';
import { PROJECTS } from '../constants/index'; // Assume you have a PROJECTS array in your constants
import photo from "../assets/projects/3.png"; // Replace with your actual image path

const ProjectsSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center mb-8">
      {/* Profile Image Section */}
      <div className="w-full lg:w-1/4 mb-4 lg:mb-0 lg:mr-8 flex justify-center lg:justify-start">
        <img 
          src={photo} 
          alt="Profile" 
          className="rounded-full w-3/4 lg:w-full h-auto object-cover" 
        />
      </div>

      {/* Projects List Section */}
      <div className="flex-grow">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Projects</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700">My Projects</h3>
          <p className="text-gray-500">Here are some of my notable projects:</p>
        </div>
        
        <ul className="space-y-6">
          {PROJECTS.map((project, index) => (
            <li key={index} className="p-4 text-left border-b">
              <h3 className="text-xl font-semibold text-gray-700">{project.title}</h3>
              <p className="text-gray-500">{project.description}</p>
              <p className="text-gray-400">Technologies: {project.technologies.join(', ')}</p>
              <a href={project.link} className="text-cyan-500 hover:underline mt-2 block">
                View Project
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsSection;

import React from 'react';
import { EXPERIENCES } from '../constants/index';
import photo from "../assets/projects/2.png";

const ExperienceSection = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse w-full lg:items-start lg:justify-between">
      {/* Image Section */}
      <div className="w-full lg:w-1/4 mb-4 lg:mb-0 lg:ml-8 flex justify-center lg:justify-end">
        <img 
          src={photo} 
          alt="Profile" 
          className="rounded-full w-3/4 lg:w-full h-auto object-cover" 
        />
      </div>
      
      {/* Experience Content Section */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Experience</h2>
        <ul className="space-y-6">
          {EXPERIENCES.map((experience, index) => (
            <li key={index} className="p-4 text-left">
              <h3 className="text-xl font-semibold text-gray-700">{experience.role}</h3>
              <p className="text-gray-500">{experience.company}</p>
              <p className="text-gray-400">{experience.year}</p>
              <p className="mt-2 text-gray-600">{experience.description}</p>
              <p className="mt-2">
                <strong className="text-gray-800">Technologies:</strong> {experience.technologies.join(', ')}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceSection;

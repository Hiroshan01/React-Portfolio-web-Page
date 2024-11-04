import React from 'react';
import { ABOUT_TEXT } from "../constants"; // Assuming you have some content for the about section
import aboutImage from "../assets/about.jpg"; // Replace with your actual image path

function About() {
  return (
    
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            <img 
              src={aboutImage} 
              alt="About Hiroshan Madusnaka" 
              className="rounded-full w-75 h-76 object-cover" // Adjust size and shape as needed
            />
          </div>
        </div>
        <div className='flex flex-col items-center lg:items-start lg:w-1/2 lg:p-8'>
          <h2 className='text-5xl font-semibold tracking-tight lg:mt-16'>About Me</h2>
          <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>
            {ABOUT_TEXT}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

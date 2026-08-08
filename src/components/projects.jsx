import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import portimage from '../assets/photos/port.png'
import e_comimage from '../assets/photos/e-com.png'
import Weatherimage from '../assets/photos/weather.png'
export const Projects = () => {
  const projectsData = [
    {
      title: 'E-commers projects',
      description: 'An intricate e-commerce web application featuring advanced administrative layouts and a seamless shopping experience. Designed with a highly interactive user interface.',
      image: e_comimage, 
      techStack: ['React', 'Tailwind CSS', 'JavaScript'],
      githubLink: 'https://github.com/salemzayed90/E-commers-project.git',
      demoLink: 'https://salemzayed90.github.io/E-commers-project/',
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive and modern personal portfolio designed to showcase my skills, projects, and professional journey with smooth UI interactions.',
      image: portimage, 
      techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
      githubLink: '#',
      demoLink: '#',
    },
    {
      title: 'Weather Api', 
      description: 'A clean and responsive admin dashboard for managing data, featuring beautiful charts, tables, and a user-friendly layout for complex data visualization.',
      image: Weatherimage, 
      techStack: ['React', 'CSS3', 'API'],
      githubLink: 'https://github.com/salemzayed90/weather-api.git',
      demoLink: 'https://salemzayed90.github.io/weather-api/',
    },
  ];

  return (
    <section id="projects" className="w-full py-20 bg-slate-950">
      
      {/* عنوان السكشن */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-2">
          Featured <span className="text-teal-400">Projects</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base">
          A glimpse into my recent web development work
        </p>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-16 lg:px-24">
        
        {projectsData.map((project, index) => (
          <div 
            key={index} 
            className="group flex flex-col bg-slate-900/50 border border-teal-900/40 rounded-2xl overflow-hidden hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-900/20 transition-all duration-300"
          >
          
            <div className="w-full h-48 sm:h-56 overflow-hidden relative border-b border-teal-900/30">
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

         
            <div className="flex flex-col flex-grow p-6">
              <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-teal-400 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

        
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 text-xs font-medium text-teal-300 bg-teal-900/30 rounded-full border border-teal-800/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              
              <div className="flex items-center gap-4 mt-auto">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-teal-400 transition-colors duration-300"
                >
                  <FaGithub className="text-lg" /> Code
                </a>
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-teal-400 transition-colors duration-300"
                >
                  <FaExternalLinkAlt className="text-md" /> Live Demo
                </a>
              </div>
            </div>
            
          </div>
        ))}

      </div>
    </section>
  );
};
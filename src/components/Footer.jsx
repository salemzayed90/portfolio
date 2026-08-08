import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-teal-900/30 pt-16 pb-8 px-4 md:px-16 lg:px-24" id='contact'>
      
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-12 max-w-7xl mx-auto">
        
       
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-wider text-slate-50 mb-4">
            CodeCraft<span className="text-teal-400">.</span>
          </h2>
          <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
            Building interactive, responsive, and high-performance web applications. Let's build something amazing together.
          </p>
        </div>

     
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-slate-100 font-semibold mb-4 text-lg">Let's Connect</h3>
          <div className="flex gap-4">
            <a 
              href="https://github.com/salemzayed90" 
              target="_blank" 
              rel="noreferrer" 
              className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-900/80 border border-teal-900/50 text-slate-300 hover:text-teal-400 hover:border-teal-400 hover:bg-teal-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/feed/" 
              target="_blank" 
              rel="noreferrer" 
              className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-900/80 border border-teal-900/50 text-slate-300 hover:text-teal-400 hover:border-teal-400 hover:bg-teal-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="mailto:salemzayed90@example.com" 
              className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-900/80 border border-teal-900/50 text-slate-300 hover:text-teal-400 hover:border-teal-400 hover:bg-teal-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-teal-900/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
        <p>
          &copy; {new Date().getFullYear()} Salem Zayed. All rights reserved.
        </p>
        <p className="flex items-center gap-1">
          Made with <span className="text-teal-500 text-lg">♥</span> using React & Tailwind
        </p>
      </div>
      
    </footer>
  );
};
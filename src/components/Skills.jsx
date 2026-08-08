import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript } from 'react-icons/si';

export const Skills = () => {
  const skillsData = [
    { name: 'React', icon: <FaReact />, color: 'group-hover:text-blue-400' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'group-hover:text-teal-400' },
    { name: 'JavaScript', icon: <SiJavascript />, color: 'group-hover:text-yellow-400' },
    { name: 'HTML5', icon: <FaHtml5 />, color: 'group-hover:text-orange-500' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: 'group-hover:text-blue-500' },
    { name: 'Git', icon: <FaGitAlt />, color: 'group-hover:text-orange-600' },
    { name: 'GitHub', icon: <FaGithub />, color: 'group-hover:text-white' },
  ];

  return (
    <section id="skills" className="w-full py-16 bg-slate-950/40">
      
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-2">
          My <span className="text-teal-400">Skills</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base">
          Technologies I work with to build responsive & scalable applications
        </p>
      </div>

     
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-6 px-4 md:px-16 lg:px-24">
          {skillsData.map((skill, index) => (
            <div
              key={index}

              className="group w-full max-w-[220px] h-24 flex items-center justify-center gap-3 bg-slate-900/50 border border-teal-900/40 rounded-2xl hover:bg-slate-800/80 hover:border-teal-500 hover:shadow-lg hover:shadow-teal-900/30 transition-all duration-300 cursor-pointer"
            >
              <div className={`text-4xl text-slate-400 transition-colors duration-300 ${skill.color}`}>
                {skill.icon}
              </div>
              <span className="text-slate-300 font-semibold text-lg group-hover:text-white transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          ))}
      </div>
      
    </section>
  );
};
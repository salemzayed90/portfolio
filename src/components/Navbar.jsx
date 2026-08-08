import { div } from 'framer-motion/client'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
export const Navbar = () => {
    const [isOpen,setIsopen]=useState(false)
  return (
    <nav className='fixed top-0 w-full z-50 flex items-center justify-between px-4 md:px-16 lg:px-24 bg-slate-900/80 backdrop-blur-md py-4 border-b border-teal-900/30 text-slate-100'>
            <div>
                <h2 className='text-xl font-bold tracking-wider'>CodeCraft</h2>
            </div>
            <div className='hidden md:flex gap-6 text-md '>
                <a className='group relative py-2 hover:text-teal-300 transition-colors' href="#home">Home
                    <span className="absolute bottom-0 left-0 w-0  h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full" />
                </a>
                <a className='group relative py-2 hover:text-teal-300 transition-colors' href="#about">About
                     <span className="absolute bottom-0 left-0 w-0  h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full" />
                </a>
                <a className='group relative py-2 hover:text-teal-300 transition-colors' href="#skills">Skills
                    <span className="absolute bottom-0 left-0 w-0  h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full" />
                </a>
                <a className='group relative py-2 hover:text-teal-300 transition-colors' href="#projects">Projects
                    <span className="absolute bottom-0 left-0 w-0  h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full" />
                </a>
                <a className='group relative py-2 hover:text-teal-300 transition-colors' href="#contact">contact
                    <span className="absolute bottom-0 left-0 w-0  h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full" />
                </a>

            </div>
           {/* جزء الزراير */}
<div>
    <button className='hidden md:block w-28 h-10 bg-teal-500 rounded-lg hover:cursor-pointer hover:bg-teal-400 font-semibold transition text-slate-950'>
        Hire Me
    </button>
    
    {/* صلحنا الـ flex والـ setIsOpen */}
    <button 
        className='flex md:hidden w-12 h-10 items-center justify-center border text-teal-500 rounded-lg border-teal-500 hover:cursor-pointer hover:bg-teal-400 hover:text-slate-900 font-semibold transition' 
        onClick={() => setIsopen(!isOpen)} 
    >
        <FaBars />
    </button>
</div>

{/* جزء القائمة المنسدلة (Dropdown) */}
{isOpen && (
    <div className="absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md flex flex-col items-start gap-6 text-xl font-medium text-slate-300  py-8 border-b border-teal-900/30 shadow-xl md:hidden">
        
        {/* ضفنا onClick عشان يقفل القائمة لما تدوس */}
        <a onClick={() => setIsopen(false)} className='group relative mx-3 py-2 hover:text-teal-300 transition-colors' href="#home">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full" />
        </a>
        
        <a onClick={() => setIsopen(false)} className='group relative  mx-3 py-2 hover:text-teal-300 transition-colors' href="#about">
            About
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full" />
        </a>
        
        <a onClick={() => setIsopen(false)} className='group relative mx-3 py-2 hover:text-teal-300 transition-colors' href="#skills">
            Skills
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full" />
        </a>
        
        <a onClick={() => setIsopen(false)} className='group relative mx-3  py-2 hover:text-teal-300 transition-colors' href="#projects">
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full" />
        </a>
    </div>
)}
    </nav>
  )
}

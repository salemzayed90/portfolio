
import React from 'react'
import { FaCalendar, FaCode, FaSmile, FaTrophy } from 'react-icons/fa'

export const About = () => {
  const infoData=[
    {
      number:1+"+",
      title:"Years Experience",
      icon:<FaCalendar/>
    },
    {
      number:4+"+",
      title:"Projects Completed",
      icon:<FaCode/>
    },
    {
      number:4+"+",
      title:"Happy Clients",
      icon:<FaSmile/>
    },
    {
      number:100+"%",
      title:"Client sabisfaction",
      icon:<FaTrophy/>
    },
  ]
  return (
    <section id='about' className='grid grid-cols-1 gap-5 md:grid-cols-2 px-4 md:px-16 lg:pxx-24 pt-18 '>
        <div className='flex flex-col items-start justify-between py-2 gap-5'>
          <h3 className='px-3 py-1 border text-teal-400 border-teal-400 rounded-lg mt-3'>About Me</h3>
          <p className='text-3xl font-semibold'>
            I'm passionate about creating digital solutions
          </p>
          <p className="text-slate-400  max-w-md leading-relaxed text-sm md:text-base">
            Hello! I'm Salem, a Front-End Developer who combines an analytical mindset with a passion for designing engaging, practical interfaces.</p>

        </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
    {infoData.map((item, index) => (
        <div key={index} className='flex items-center gap-4 px-5 py-4 border border-teal-400/50 rounded-xl backdrop-blur-md hover:bg-slate-800/50 transition-colors'>
            
            <div className='p-3.5 rounded-xl bg-teal-400 text-slate-900 text-2xl'>
                {item.icon}
            </div>
            
            <div className='flex flex-col gap-1'>
                <p className='text-xl font-bold text-slate-50'>
                    {item.number}
                </p>
                
                <p className='text-sm font-medium text-gray-400'>
                    {item.title}
                </p>
            </div>
        </div>
    ))}
</div>
    </section>
  )
}

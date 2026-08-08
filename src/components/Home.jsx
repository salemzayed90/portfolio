import { motion } from 'framer-motion'
import React from 'react'
import mycv from '../assets/Salem_Zayed_Final_CV.pdf'
import { TypeAnimation } from 'react-type-animation'
import image from '../assets/photos/IMG_3061.JPG.jpeg'

export const Home = () => {
  
  return (
    <section id='home' className='flex flex-col-reverse md:flex-row justify-between min-h-screen items-center w-full px-4 md:px-16 lg:px-24 pt-24 pb-12'>
        
        <motion.div
          initial={{opacity:0, x:-30}}
          animate={{opacity:1, x:0}}
          transition={{duration:0.9}}
          className='flex flex-col items-start justify-between gap-6 w-full md:w-1/2 z-10'
        >
            <h3 className='text-teal-400 text-lg font-medium tracking-wide'>
              Hello, I'm
            </h3>
            <p className='text-4xl sm:text-5xl font-bold text-slate-50'>Salem Zayed</p>
            <h2 className='text-2xl md:text-4xl font-semibold text-slate-300 mt-2'>
              And I'm {''}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-100 to-teal-500'>
                <TypeAnimation
                  sequence={[
                    'Front-End Developer',
                    2000,
                    'Web Developer',
                    2000,
                    'React Developer',
                    2000
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-md leading-relaxed text-sm md:text-base">
              I build interactive, responsive, and highly performance web applications. Let's turn your ideas into reality.
            </p>
          
            
            <a 
              href={mycv} 
              download="Salem_zayed.cv" 
              className="mt-4 flex items-center justify-center cursor-pointer w-36 h-12 rounded-lg border-2 border-teal-500 text-teal-400 font-semibold hover:bg-teal-500/10 transition-all duration-300"
            >
              Download CV
            </a>
        </motion.div>
   
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center w-full md:w-1/2"
        >
         
          <motion.div
            animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 w-48 h-48 md:w-72 md:h-72 bg-teal-500/30 rounded-full blur-[70px]"
          />
          
          <motion.div
            animate={{ y: [0, 20, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 w-48 h-48 md:w-64 md:h-64 bg-slate-500/30 rounded-full blur-[60px]"
          />

          {/* دايرة الصورة */}
          <div className="relative z-10 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full p-2 border-2 border-teal-900/50 backdrop-blur-sm">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-teal-500/20">
              <img 
                src={image}
                alt="Salem Zayed Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
       
    </section>
  )
}
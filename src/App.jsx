
import react from 'react'
import { Navbar } from './components/Navbar'
import {  Home } from './components/Home'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/projects'
import { Footer } from './components/Footer'
function App() {


  return (
    <div className='bg-slate-950 text-white min-h-screen font-sans'>
        <Navbar/>
        <main>
          <section id='home'><Home/></section>
          <section id='about'><About/></section>
          <section id='skills'><Skills/></section>
          <section id='projects'><Projects/></section>
          
        </main>
        
        <section><Footer id="contact"/></section>
            </div>
  )
}

export default App

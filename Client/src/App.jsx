import React from 'react'
import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Project from './sections/Project.jsx'
import Experiences from './sections/Experiences.jsx'
import Testimonials from './sections/Testimonials.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Experiences />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
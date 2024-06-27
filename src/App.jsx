import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import About from './components/About/About'
import Project from './components/Projects/Project'
import Title from './components/Title/Title'
import Skill from './components/Skills/Skill'
import ContactForm from './components/Contact/ContactForm'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="padding-container">
        <Header />
      </div>
      <About />
      <div className="padding-container">
        <Title title1="SKILLS SECTION" title2="About my skills" />
        <Skill />
        <Title title1="PROJECT SECTION" title2="Explore my projects" />
        <Project />
        <Title title1="CONTACT INFORMATION" title2="Connect with me" />
        <ContactForm />
      </div>
      <Footer />
    </div>
  )
}

export default App

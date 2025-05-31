import React, { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation/Navigation';
import HeroSection from './components/Hero/HeroSection';
import ProjectsSection from './components/Projects/ProjectsSection';
import SkillsSection from './components/Skills/SkillsSection';
import AboutSection from './components/About/AboutSection';
import ContactSection from './components/Contact/ContactSection';
import Footer from './components/Footer/Footer';
import BackgroundParticles from './components/common/BackgroundParticles';
import LoadingScreen from './components/common/LoadingScreen';
import { projectsData } from './data/projects';
import { skillsData } from './data/skills';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const heroRef = useRef(null);
  const [particles, setParticles] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);

    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10
    }));
    setParticles(newParticles);

    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <BackgroundParticles particles={particles} />
      
      <Navigation 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <HeroSection heroRef={heroRef} />
      
      <ProjectsSection 
        projects={projectsData}
        hoveredProject={hoveredProject}
        setHoveredProject={setHoveredProject}
      />
      
      <SkillsSection 
        skills={skillsData}
        hoveredSkill={hoveredSkill}
        setHoveredSkill={setHoveredSkill}
      />
      
      <AboutSection />
      
      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default App;
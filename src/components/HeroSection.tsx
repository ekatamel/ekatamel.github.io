
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center pt-24 pb-16">
      <div className="container-section flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-3/4 animate-fade-in">
          <div className="mb-8">
            <div className="flex space-x-3 mb-4">
              <span className="px-3 py-1 text-sm rounded-full bg-spring-pink/20 text-spring-charcoal">
                Frontend Developer
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-spring-peach/20 text-spring-charcoal">
                Full Stack Engineer
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-spring-blush">Ekaterina</span> Melnichuk
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              IT Professional with 6 years experience creating responsive, user-friendly, and high-performance web applications in React. 
              Expertise in building scalable platforms, optimizing web performance, and automating workflows to enhance user experience.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Contact Me
              </a>
              <a href="#projects" className="btn-outline">
                View Projects
              </a>
            </div>
          </div>
          
          <div className="mt-8 flex space-x-4">
            <a href="https://github.com/ekatamel" 
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-spring-pink hover:border-spring-pink transition-colors"
              target="_blank" rel="noopener noreferrer"
            >
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/ekaterinamelnichuk" 
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-spring-pink hover:border-spring-pink transition-colors"
              target="_blank" rel="noopener noreferrer"
            >
              <Linkedin size={18} />
            </a>
            <a href="mailto:eka.melnichuk@gmail.com" 
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-spring-pink hover:border-spring-pink transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

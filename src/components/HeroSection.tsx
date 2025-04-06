
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center pt-24 pb-16">
      <div className="container-section flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0 animate-fade-in">
          <div className="mb-8 inline-block">
            <div className="flex space-x-3 mb-4">
              <span className="px-3 py-1 text-sm rounded-full bg-spring-mint/20 text-spring-charcoal">
                Frontend Developer
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-spring-peach/20 text-spring-charcoal">
                Full Stack Engineer
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-spring-mint">Ekaterina</span> Melnichuk
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
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-spring-mint hover:border-spring-mint transition-colors"
              target="_blank" rel="noopener noreferrer"
            >
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/ekaterinamelnichuk" 
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-spring-mint hover:border-spring-mint transition-colors"
              target="_blank" rel="noopener noreferrer"
            >
              <Linkedin size={18} />
            </a>
            <a href="mailto:eka.melnichuk@gmail.com" 
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-spring-mint hover:border-spring-mint transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
        
        <div className="lg:w-1/2 animate-slide-in-right">
          <div className="relative">
            <div className="absolute inset-0 -left-6 -top-6 bg-spring-mint rounded-2xl transform -rotate-6"></div>
            <div className="absolute inset-0 -right-6 -bottom-6 bg-spring-peach rounded-2xl transform rotate-6"></div>
            <div className="relative bg-white p-1 rounded-2xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80" 
                alt="Ekaterina Melnichuk" 
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

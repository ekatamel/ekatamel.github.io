
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Flyboard Show Platform',
    description: 'End-to-end platform for water activities business featuring voucher purchases, lesson reservations, and admin panel.',
    image: 'https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    liveUrl: 'https://flyboardshow.cz',
    githubUrl: '#'
  },
  {
    title: 'Cryptocurrency Benchmarks',
    description: 'Public website with real-time cryptocurrency index streaming, optimized for SEO and core web vitals.',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    technologies: ['Next.js', 'WebSockets', 'TypeScript', 'Material UI'],
    liveUrl: 'https://cfbenchmarks.com',
    githubUrl: '#'
  },
  {
    title: 'Opta Live Sports App',
    description: 'Interactive UI for real-time sports data and analytics, serving over 1,000 professional sports teams and media companies.',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    technologies: ['React', 'Next.js', 'D3.js', 'GraphQL'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Knowspread E-learning Platform',
    description: 'Educational platform serving 35k annual users with interactive courses and personalized learning paths.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    technologies: ['React', 'MongoDB', 'Express', 'Node.js'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container-section">
        <h2 className="section-title">Selected Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="card group overflow-hidden transform transition duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex space-x-3">
                    {project.githubUrl !== '#' && (
                      <a 
                        href={project.githubUrl} 
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-spring-mint transition-colors"
                        target="_blank" rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl !== '#' && (
                      <a 
                        href={project.liveUrl} 
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-spring-mint transition-colors"
                        target="_blank" rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs bg-spring-lavender/30 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

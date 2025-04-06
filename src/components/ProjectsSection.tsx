import { ExternalLink } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import cfbScreenshot from '../assets/apps/cfbenchmarks.png';
import classesScreenshot from '../assets/apps/classes.png';
import fbsScreenshot from '../assets/apps/flyboardshowapp.png';
import knowspreadScreenshot from '../assets/apps/knowspread.png';
import pblScreenshot from '../assets/apps/pressboxlive.png';
import ScrollReveal from './ScrollReveal';

const projects = [
  {
    title: 'FlyboardShow.cz Platform',
    description:
      'End-to-end platform for water activities business featuring voucher purchases, lesson reservations, and admin panel.',
    image: fbsScreenshot,
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'React Query',
      'React Table',
      'Formik',
      'Chakra UI',
      'Framer Motion',
      'Stripe',
    ],
    liveUrl: 'https://app.flyboardshow.cz/',
    githubUrl: 'https://github.com/ekatamel/flyboardshowcz_frontend',
  },
  {
    title: 'Cryptocurrency Benchmarks',
    description:
      'Public website with real-time cryptocurrency index streaming, optimized for SEO and core web vitals.',
    image: cfbScreenshot,
    technologies: [
      'Next.js',
      'TypeScript',
      'WebSockets',
      'TypeScript',
      'Material UI',
      'Tailwind CSS',
      'amCharts',
    ],
    liveUrl: 'https://cfbenchmarks.com',
  },
  {
    title: 'Opta Live Sports App',
    description:
      'Interactive UI for real-time sports data and analytics, serving over 1,000 professional sports teams and media companies.',
    image: pblScreenshot,
    technologies: [
      'Next.js',
      'TypeScript',
      'Recharts',
      'React-PDF',
      'React Query',
      'React Table',
    ],
    liveUrl: 'https://www.statsperform.com/opta-live/',
  },
  {
    title: 'Knowspread E-learning Platform',
    description:
      'Educational platform serving 35k annual users with interactive courses and personalized learning paths.',
    image: knowspreadScreenshot,
    technologies: ['React', 'Redux', 'Tailwind CSS', 'i18next', 'React-pdf'],
    liveUrl: 'https://app.knowspread.com/',
  },
  {
    title: 'Classes.cz – Math Tutoring Services',
    description:
      'A side project for a friend, featuring a math tutoring website built with WordPress and integrated with the Amelia booking system for scheduling lessons.',
    image: classesScreenshot,
    technologies: ['WordPress', 'Amelia Booking System'],
    liveUrl: 'https://classes.cz/',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container-section">
        <h2 className="section-title">Selected Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal
              key={index}
              className="h-full"
              animationClass={`animate-fade-in-up delay-[${index * 200}ms]`}
              threshold={0.1}
            >
              <div className="card group overflow-hidden transform transition duration-300 hover:-translate-y-2 h-full">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex space-x-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-spring-pink transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SiGithub className="w-5 h-5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-spring-pink transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-spring-mint/30 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

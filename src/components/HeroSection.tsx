import { Mail } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const HeroSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center pt-24 pb-16"
    >
      <div className="container-section">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="flex space-x-3 mb-4">
              <span className="px-3 py-1 text-sm rounded-full bg-spring-lavender/50 text-spring-charcoal">
                Full Stack Engineer
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-spring-mint/50 text-spring-charcoal">
                Ex-Product Owner
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-spring-charcoal">
                React & Next.js Specialist
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-spring-lavender">Ekaterina</span>{' '}
              Melnichuk
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              I’m a <b>Full-Stack Software Engineer</b> with a twist:{' '}
              <b>6 years in tech</b>, first as a <i>Product Owner</i> and now as
              a <i>developer</i>, building fast, scalable web apps in{' '}
              <b className="underline decoration-spring-mint decoration-[3px]  underline-offset-[5px]">
                React, Next.js, and Node.js
              </b>
              .
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <b className="underline decoration-spring-lavender decoration-[3px] underline-offset-[5px]">
                What drives me?
              </b>{' '}
              Bridging product vision with technical execution - whether it’s:
            </p>
            {/* TODO make shared style for ul list */}
            <ul className="text-lg text-gray-600 mb-8">
              <li className="text-gray-600 pl-5 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-spring-lavender before:rounded-full">
                <i>Boosting performance</i> (cutting load times, optimizing Web
                Vitals),
              </li>
              <li className="text-gray-600 pl-5 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-spring-lavender before:rounded-full">
                <i>Automating workflows</i> (replacing manual work with scalable
                code),
              </li>
              <li className="text-gray-600 pl-5 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-spring-lavender before:rounded-full">
                <i>Driving growth</i> (A/B tested UI, SEO wins, and user
                acquisition)
              </li>
            </ul>

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
            <a
              href="https://github.com/ekatamel"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-spring-lavender hover:border-spring-lavender transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/ekaterinamelnichuk"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-spring-lavender hover:border-spring-lavender transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin size={18} />
            </a>
            <a
              href="mailto:eka.melnichuk@gmail.com"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-spring-lavender hover:border-spring-lavender transition-colors"
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

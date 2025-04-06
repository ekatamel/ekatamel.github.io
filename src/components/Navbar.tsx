import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 backdrop-blur-sm shadow-sm py-3'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container-section !py-0 flex justify-between items-center">
        <a href="#" className="text-xl font-semibold">
          <span className="text-spring-mint">E</span>katerina
        </a>

        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#about" className="hover:text-spring-mint transition-colors">
            About
          </a>
          <a
            href="#skills"
            className="hover:text-spring-mint transition-colors"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="hover:text-spring-mint transition-colors"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:text-spring-mint transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-spring-mint transition-colors"
          >
            Contact
          </a>
        </div>

        <a href="#contact" className="btn-primary text-sm hidden md:block">
          Hire Me
        </a>

        <button className="md:hidden text-spring-charcoal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;


import React, { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animationClass?: string;
  threshold?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = '', 
  animationClass = 'animate-fade-in',
  threshold = 0.1
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (ref.current) {
              ref.current.classList.add('active');
              // Apply the animation class directly
              const animClass = ref.current.getAttribute('data-animation-class');
              if (animClass) {
                ref.current.classList.add(animClass);
              }
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: threshold,
      }
    );

    if (ref.current) {
      // Start with opacity-0 to hide, but don't use the animation class yet
      ref.current.classList.add('opacity-0');
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, animationClass]);

  return (
    <div 
      ref={ref} 
      className={`scroll-reveal ${className || ''}`}
      data-animation-class={animationClass}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;

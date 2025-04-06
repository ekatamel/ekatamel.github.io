import React, { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animationClass?: string;
  threshold?: number;
  delay?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  animationClass = 'animate-fade-in',
  threshold = 0.5,
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const timeoutId = useRef<NodeJS.Timeout | null>(null); // To clear any pending timeouts

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (ref.current) {
              // Clear any previous timeout
              if (timeoutId.current) {
                clearTimeout(timeoutId.current);
              }

              // Apply the active class and animation with a delay
              timeoutId.current = setTimeout(() => {
                if (ref.current) {
                  ref.current.classList.add('active');
                  const animClass = ref.current.getAttribute(
                    'data-animation-class'
                  );
                  if (animClass) {
                    // Split classes by space and add each one
                    animClass.split(' ').forEach((cls) => {
                      ref.current?.classList.add(cls);
                    });
                  }
                  // Apply the transition delay
                  if (delay > 0) {
                    ref.current.style.transitionDelay = `${delay}ms`;
                  }
                }
              }, 0);
            }
          } else {
            // Optionally reset styles if the element is no longer intersecting
            if (ref.current) {
              ref.current.classList.remove('active');
              const animClass = ref.current.getAttribute(
                'data-animation-class'
              );
              if (animClass) {
                // Split classes by space and remove each one
                animClass.split(' ').forEach((cls) => {
                  ref.current?.classList.remove(cls);
                });
              }
              ref.current.style.transitionDelay = ''; // Reset transition delay
            }
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
      ref.current.classList.add('opacity-0');
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, [threshold, animationClass, delay]); // Include delay in the dependency array

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

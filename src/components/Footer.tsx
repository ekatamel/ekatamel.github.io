
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-white border-t border-gray-100">
      <div className="container-section !py-0">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <a href="#" className="text-xl font-semibold">
              <span className="text-spring-lavender">E</span>katerina <span className="text-spring-lavender">M</span>elnichuk
            </a>
          </div>
          
          <div className="text-gray-500 text-sm">
            © {currentYear} Ekaterina Melnichuk. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

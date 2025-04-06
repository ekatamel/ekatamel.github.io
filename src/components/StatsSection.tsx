
import React from 'react';
import { Briefcase, Code, Award, Book } from 'lucide-react';

const stats = [
  {
    value: '6+',
    label: 'Years in IT',
    icon: Briefcase,
    color: 'bg-spring-mint/20'
  },
  {
    value: '9+',
    label: 'Apps Built',
    icon: Code,
    color: 'bg-spring-peach/20'
  },
  {
    value: '4+',
    label: 'Years of React',
    icon: Code,
    color: 'bg-spring-lavender/20'
  },
  {
    value: '3+',
    label: 'Certifications',
    icon: Award,
    color: 'bg-spring-mint/20'
  }
];

const StatsSection = () => {
  return (
    <section id="stats" className="bg-spring-soft py-16">
      <div className="container-section !pt-0 !pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-xl ${stat.color} flex flex-col items-center text-center animate-scale-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 p-3 bg-white rounded-full shadow-sm">
                <stat.icon className="w-6 h-6 text-spring-charcoal" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

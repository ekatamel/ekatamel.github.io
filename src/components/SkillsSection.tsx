
import React from 'react';

const frontendSkills = [
  { name: 'JavaScript', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 80 },
];

const backendSkills = [
  { name: 'Node.js', level: 75 },
  { name: 'PHP (Laravel)', level: 65 },
  { name: 'REST APIs', level: 85 },
  { name: 'GraphQL', level: 70 },
];

const stylingSkills = [
  { name: 'Sass', level: 85 },
  { name: 'Tailwind', level: 90 },
  { name: 'MUI', level: 80 },
  { name: 'Chakra UI', level: 75 },
];

const otherSkills = [
  { name: 'Jest', level: 75 },
  { name: 'SEO', level: 85 },
  { name: 'A/B Testing', level: 80 },
  { name: 'Product Management', level: 90 },
];

interface SkillBarProps {
  name: string;
  level: number;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, index }) => {
  return (
    <div className="mb-4" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-gray-500">{level}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-spring-mint rounded-full" 
          style={{ 
            width: `${level}%`,
            transition: 'width 1s ease-out',
          }}
        ></div>
      </div>
    </div>
  );
};

interface SkillCategoryProps {
  title: string;
  skills: Array<{ name: string; level: number }>;
  animationDirection: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, animationDirection }) => {
  return (
    <div className={`animate-${animationDirection}`}>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      {skills.map((skill, index) => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} index={index} />
      ))}
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container-section">
        <h2 className="section-title">My Tech Stack</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <SkillCategory title="Frontend" skills={frontendSkills} animationDirection="slide-in-left" />
          <SkillCategory title="Backend" skills={backendSkills} animationDirection="fade-in" />
          <SkillCategory title="Styling" skills={stylingSkills} animationDirection="fade-in" />
          <SkillCategory title="Other" skills={otherSkills} animationDirection="slide-in-right" />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

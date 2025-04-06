import { BarChart, Compass, Database, Globe } from 'lucide-react';
import React from 'react';
import { DiScrum } from 'react-icons/di';
import {
  FaCss3Alt,
  FaGithub,
  FaGitlab,
  FaHtml5,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaSass,
} from 'react-icons/fa';
import {
  SiChakraui,
  SiGit,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMui,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
} from 'react-icons/si';
import tanstackIcon from '../assets/tanstack.png';
import ScrollReveal from './ScrollReveal';

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

const frontendTech: TechItem[] = [
  {
    name: 'JavaScript',
    icon: <SiJavascript size={24} className="text-yellow-400" />,
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript size={24} className="text-blue-500" />,
  },
  { name: 'React', icon: <FaReact size={24} className="text-sky-500" /> },
  { name: 'Next.js', icon: <SiNextdotjs size={24} className="text-black" /> },
  { name: 'Redux', icon: <SiRedux size={24} className="text-purple-500" /> },
  { name: 'HTML5', icon: <FaHtml5 size={24} className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt size={24} className="text-blue-400" /> },
  {
    name: 'TanStack',
    icon: <img src={tanstackIcon} className="h-6 w-6" alt="TanStack icon" />,
  },
];

const backendTech: TechItem[] = [
  { name: 'Node.js', icon: <FaNodeJs size={24} className="text-green-600" /> },
  { name: 'Nest.js', icon: <SiNestjs size={24} className="text-red-500" /> },
  {
    name: 'PHP',
    icon: <FaPhp size={24} className="text-purple-600" />,
  },
  {
    name: 'Laravel',
    icon: <FaLaravel size={24} className="text-red-600" />,
  },
  { name: 'REST APIs', icon: <Globe size={24} className="text-gray-600" /> },
  { name: 'GraphQL', icon: <SiGraphql size={24} className="text-pink-500" /> },
  { name: 'SQL', icon: <Database size={24} className="text-blue-600" /> },
];

const stylingTech: TechItem[] = [
  { name: 'Sass', icon: <FaSass size={24} className="text-pink-500" /> },
  {
    name: 'Tailwind',
    icon: <SiTailwindcss size={24} className="text-cyan-500" />,
  },
  {
    name: 'Material UI',
    icon: <SiMui size={24} className="text-blue-500" />,
  },
  {
    name: 'Chakra UI',
    icon: <SiChakraui size={24} className="text-teal-500" />,
  },
  {
    name: 'Styled Components',
    icon: <SiStyledcomponents size={30} className="text-pink-400" />,
  },
];

const otherTech: TechItem[] = [
  { name: 'Jest', icon: <SiJest size={24} className="text-red-600" /> },
  {
    name: 'React Testing Library',
    icon: <SiTestinglibrary size={24} className="text-red-500" />,
  },
  { name: 'MongoDB', icon: <SiMongodb size={24} className="text-green-600" /> },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql size={24} className="text-blue-600" />,
  },
  { name: 'Git', icon: <SiGit size={24} className="text-orange-600" /> },
  { name: 'GitHub', icon: <FaGithub size={24} className="text-gray-800" /> },
  { name: 'GitLab', icon: <FaGitlab size={24} className="text-orange-600" /> },
  { name: 'SEO', icon: <Compass size={24} className="text-blue-500" /> },
  {
    name: 'Analytics',
    icon: <BarChart size={24} className="text-green-500" />,
  },
  {
    name: 'Agile & Scrum',
    icon: <DiScrum size={24} className="text-blue-500" />,
  },
];

interface SkillCategoryProps {
  title: string;
  items: TechItem[];
  delay: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  title,
  items,
  delay,
}) => {
  return (
    <ScrollReveal
      className="mb-10"
      animationClass="animate-fade-in-up"
      threshold={0.2}
    >
      <h3 className="text-xl font-semibold mb-6 text-spring-charcoal">
        {title}
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {items.map((item, index) => (
          <ScrollReveal
            key={item.name}
            className="flex flex-col items-center"
            animationClass={`animate-pop-in`}
            threshold={0.6}
            delay={delay + index * 100} // Stagger the animation of individual items
          >
            <div className="tech-icon mb-2">{item.icon}</div>
            <span className="text-xs text-center">{item.name}</span>
          </ScrollReveal>
        ))}
      </div>
    </ScrollReveal>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container-section">
        <h2 className="section-title">Tech Stack</h2>
        <SkillCategory title="Frontend" items={frontendTech} delay={0} />
        <SkillCategory title="Backend" items={backendTech} delay={200} />
        <SkillCategory title="Styling" items={stylingTech} delay={400} />
        <SkillCategory title="Other" items={otherTech} delay={600} />
      </div>
    </section>
  );
};

export default SkillsSection;

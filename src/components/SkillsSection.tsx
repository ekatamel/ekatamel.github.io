import {
  BarChart,
  Code2,
  Compass,
  Database,
  FileJson,
  GitBranch,
  GithubIcon,
  Globe,
  Palette,
  Server,
  TestTube,
  Workflow,
} from 'lucide-react';
import React from 'react';
import ScrollReveal from './ScrollReveal';

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

const frontendTech: TechItem[] = [
  { name: 'JavaScript', icon: <Code2 size={24} className="text-yellow-500" /> },
  { name: 'TypeScript', icon: <Code2 size={24} className="text-blue-500" /> },
  { name: 'React', icon: <Code2 size={24} className="text-sky-500" /> },
  { name: 'Next.js', icon: <Globe size={24} className="text-black" /> },
  { name: 'Redux', icon: <Workflow size={24} className="text-purple-500" /> },
  { name: 'HTML5', icon: <Code2 size={24} className="text-orange-500" /> },
  { name: 'CSS3', icon: <Palette size={24} className="text-blue-400" /> },
];

const backendTech: TechItem[] = [
  { name: 'Node.js', icon: <Server size={24} className="text-green-600" /> },
  { name: 'Nest.js', icon: <Server size={24} className="text-red-500" /> },
  {
    name: 'PHP/Laravel',
    icon: <Code2 size={24} className="text-purple-600" />,
  },
  { name: 'REST APIs', icon: <Globe size={24} className="text-gray-600" /> },
  { name: 'GraphQL', icon: <FileJson size={24} className="text-pink-500" /> },
  { name: 'SQL', icon: <Database size={24} className="text-blue-600" /> },
];

const stylingTech: TechItem[] = [
  { name: 'Sass', icon: <Palette size={24} className="text-pink-500" /> },
  { name: 'Tailwind', icon: <Palette size={24} className="text-cyan-500" /> },
  {
    name: 'Material UI',
    icon: <Palette size={24} className="text-blue-500" />,
  },
  { name: 'Chakra UI', icon: <Palette size={24} className="text-teal-500" /> },
  {
    name: 'Styled Components',
    icon: <Palette size={24} className="text-pink-400" />,
  },
];

const otherTech: TechItem[] = [
  { name: 'Jest', icon: <TestTube size={24} className="text-red-600" /> },
  { name: 'RTL', icon: <TestTube size={24} className="text-red-500" /> },
  { name: 'MongoDB', icon: <Database size={24} className="text-green-600" /> },
  {
    name: 'PostgreSQL',
    icon: <Database size={24} className="text-blue-600" />,
  },
  { name: 'Git', icon: <GitBranch size={24} className="text-orange-600" /> },
  { name: 'GitHub', icon: <GithubIcon size={24} className="text-gray-800" /> },
  { name: 'SEO', icon: <Compass size={24} className="text-blue-500" /> },
  {
    name: 'Analytics',
    icon: <BarChart size={24} className="text-green-500" />,
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
        {items.map((item) => (
          <ScrollReveal
            key={item.name}
            className="flex flex-col items-center"
            animationClass={`animate-pop-in`}
            threshold={0.2}
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
        <h2 className="section-title">My Tech Stack</h2>
        <SkillCategory title="Frontend" items={frontendTech} delay={0} />
        <SkillCategory title="Backend" items={backendTech} delay={200} />
        <SkillCategory title="Styling" items={stylingTech} delay={400} />
        <SkillCategory title="Other" items={otherTech} delay={600} />
      </div>
    </section>
  );
};

export default SkillsSection;

import accentureLogo from '../assets/logo/accenture.png';
import appliftingLogo from '../assets/logo/applifting.png';
import fbsLogo from '../assets/logo/fbs.png';
import krakenLogo from '../assets/logo/kraken.png';
import statsPerformLogo from '../assets/logo/statsperform.png';
import ScrollReveal from './ScrollReveal';

const experiences = [
  {
    title: 'Freelance Frontend Developer',
    company: 'FLYBOARDSHOW.CZ',
    location: 'Prague (remote)',
    period: 'Nov 2024 - Present',
    responsibilities: [
      'Led end-to-end frontend development of a platform using React, implementing voucher purchases, lesson reservations, and admin panel built from scratch, which reduced manual operations by 80%.',
      'Created optimized platform experience, leading to 1,200+ voucher sales, 1,000+ reservations, and 9,500+ monthly users by EOY 2024.',
    ],
    logo: fbsLogo,
    bgImage: 'bg-black',
  },
  {
    title: 'Software Engineer',
    company: 'KRAKEN DIGITAL ASSET EXCHANGE',
    location: 'US (remote)',
    period: 'Jun 2024 - Nov 2024',
    responsibilities: [
      'Built and maintained the public cfbenchmarks.com website using Next.js and WebSockets for real-time cryptocurrency index streaming, improving SEO and core web vitals, leading to a 25% increase in traffic and a 15% faster load time.',
      'Enhanced an internal automation tool by developing new algorithms for index calculation, reducing manual workload by 25% and improving operational accuracy.',
    ],
    logo: krakenLogo,
  },
  {
    title: 'Software Engineer',
    company: 'STATS PERFORM',
    location: 'Prague',
    period: 'Jun 2023 - Jun 2024',
    responsibilities: [
      'Developed and enhanced the functionality of Opta Live app using React and Next.js, integrating real-time sports data and analytics to create interactive UI tailored for professional sports teams and media companies, serving over 1,000 clients.',
      'Performed sport data transformation and calculation to ensure accurate, efficient data representation, empowering fast, data-driven decisions.',
    ],
    logo: statsPerformLogo,
  },
  {
    title: 'Medior Full Stack Developer',
    company: 'APPLIFTING',
    location: 'Prague',
    period: 'Aug 2022 - May 2023',
    responsibilities: [
      'Contributed to the frontend development of Applifting web and internal employee management system, reducing manual HR operations.',
      'Engineered Knowspread e-learning platform in React, scaling user engagement to 35k annual users.',
    ],
    logo: appliftingLogo,
  },
  {
    title: 'Product Owner',
    company: 'ACCENTURE CENTRAL EUROPE B.V',
    location: 'Prague',
    period: 'Mar 2019 - Dec 2021',
    responsibilities: [
      'Led end-to-end delivery of four web applications in the Financial Services, Automotive and Digital Marketing sectors, driving development in agile teams, resulting in over 10+ releases.',
      'Defined and prioritized product backlog and use cases, streamlining workflows and enabling successful product launches in 20 countries.',
      'Designed and executed 100+ A/B tests to optimize UI/UX, driving a major increase in user acquisition.',
    ],
    logo: accentureLogo,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-spring-soft">
      <div className="container-section">
        <h2 className="section-title">Professional Experience</h2>
        <div className="relative">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-spring-mint"></div>

          {experiences.map((exp, index) => (
            <ScrollReveal
              key={index}
              className="relative pl-12 sm:pl-16 pb-12"
              animationClass={`animate-fade-in-up`}
              threshold={0.6}
            >
              <div
                className={`absolute left-0 sm:left-3 top-2 w-10 h-10 rounded-full shadow-md border-2 border-spring-mint flex items-center justify-center ${exp.bgImage ?? 'bg-white'}`}
              >
                <img
                  className="w-6 h-6 text-spring-mint object-contain"
                  src={exp.logo}
                  alt="Company logo"
                />
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-spring-mint/30">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <div className="text-gray-600 mb-1">
                      {exp.company} | {exp.location}
                    </div>
                  </div>
                  <span className="text-sm bg-gray-200 px-3 py-1 rounded-full mt-1">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.responsibilities.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-600 pl-5 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-spring-lavender before:rounded-full"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

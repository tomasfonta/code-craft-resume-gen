
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TechStackProps {
  title: string;
  isDarkMode?: boolean;
}

export const TechStack = ({ title, isDarkMode = true }: TechStackProps) => {
  const [visibleIcons, setVisibleIcons] = useState<number[]>([]);

  const technologies = [
    { 
      name: 'Java', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      color: 'text-orange-400', 
      bg: isDarkMode ? 'bg-orange-400/20' : 'bg-orange-100' 
    },
    { 
      name: 'Spring Boot', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      color: 'text-green-400', 
      bg: isDarkMode ? 'bg-green-400/20' : 'bg-green-100' 
    },
    { 
      name: 'React', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: 'text-blue-400', 
      bg: isDarkMode ? 'bg-blue-400/20' : 'bg-blue-100' 
    },
    { 
      name: 'Node.js', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      color: 'text-green-500', 
      bg: isDarkMode ? 'bg-green-500/20' : 'bg-green-100' 
    },
    { 
      name: 'TypeScript', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      color: 'text-blue-500', 
      bg: isDarkMode ? 'bg-blue-500/20' : 'bg-blue-100' 
    },
    { 
      name: 'Python', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      color: 'text-yellow-400', 
      bg: isDarkMode ? 'bg-yellow-400/20' : 'bg-yellow-100' 
    },
    { 
      name: 'Docker', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      color: 'text-blue-300', 
      bg: isDarkMode ? 'bg-blue-300/20' : 'bg-blue-100' 
    },
    { 
      name: 'AWS', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
      color: 'text-orange-300', 
      bg: isDarkMode ? 'bg-orange-300/20' : 'bg-orange-100' 
    },
    { 
      name: 'PostgreSQL', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      color: 'text-blue-600', 
      bg: isDarkMode ? 'bg-blue-600/20' : 'bg-blue-100' 
    },
    { 
      name: 'MongoDB', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      color: 'text-green-600', 
      bg: isDarkMode ? 'bg-green-600/20' : 'bg-green-100' 
    },
    { 
      name: 'Redis', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
      color: 'text-red-400', 
      bg: isDarkMode ? 'bg-red-400/20' : 'bg-red-100' 
    },
    { 
      name: 'Kubernetes', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
      color: 'text-blue-400', 
      bg: isDarkMode ? 'bg-blue-400/20' : 'bg-blue-100' 
    },
  ];

  const softSkills = [
    { name: 'Fast Learner', level: 5 },
    { name: 'Ability to Work Under Pressure', level: 5 },
    { name: 'Communication Skills', level: 4 },
    { name: 'Linux', level: 3 },
    { name: 'HTML & CSS', level: 3 },
    { name: 'Teamwork', level: 5 },
    { name: 'Decision Making', level: 4 },
    { name: 'Adaptability', level: 5 },
    { name: 'Effective Time Management', level: 4 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleIcons(prev => {
        if (prev.length < technologies.length) {
          return [...prev, prev.length];
        }
        clearInterval(timer);
        return prev;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  const cardClasses = isDarkMode 
    ? 'bg-gray-800 border-gray-700' 
    : 'bg-gray-50 border-gray-200';

  return (
    <Card className={cardClasses}>
      <CardContent className="p-8">
        <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'} flex items-center`}>
          <span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'} mr-2`}>const</span>
          {title}
          <span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'} ml-2`}>= &#123;</span>
        </h3>
        
        {/* Technologies Section */}
        <div className="mb-8">
          <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4 pl-6`}>Technologies:</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pl-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className={`
                  ${tech.bg} ${tech.color} p-4 rounded-lg border ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}
                  transform transition-all duration-500 hover:scale-110 hover:shadow-lg cursor-pointer
                  ${visibleIcons.includes(index) 
                    ? 'opacity-100 translate-y-0 rotate-0' 
                    : 'opacity-0 translate-y-4 rotate-12'
                  }
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="mb-2 flex justify-center">
                    <img 
                      src={tech.logo} 
                      alt={tech.name}
                      className="w-8 h-8 animate-pulse hover:animate-spin transition-all duration-300"
                      style={{ 
                        filter: isDarkMode ? 'brightness(0.9)' : 'brightness(1)',
                        animationDuration: '2s'
                      }}
                    />
                  </div>
                  <div className="font-semibold text-sm">{tech.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="pl-6">
          <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Soft Skills:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {softSkills.map((skill) => (
              <div key={skill.name} className="flex items-center justify-between">
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{skill.name}</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                        i < skill.level 
                          ? (isDarkMode ? 'bg-blue-400' : 'bg-blue-600') 
                          : (isDarkMode ? 'bg-gray-600' : 'bg-gray-300')
                      }`}
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'} mt-6`}>&#125;;</div>
      </CardContent>
    </Card>
  );
};

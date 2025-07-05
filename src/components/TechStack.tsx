
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TechStackProps {
  title: string;
}

export const TechStack = ({ title }: TechStackProps) => {
  const [visibleIcons, setVisibleIcons] = useState<number[]>([]);

  const technologies = [
    { name: 'Java', icon: '☕', color: 'text-orange-400', bg: 'bg-orange-400/20' },
    { name: 'Spring Boot', icon: '🍃', color: 'text-green-400', bg: 'bg-green-400/20' },
    { name: 'React', icon: '⚛️', color: 'text-blue-400', bg: 'bg-blue-400/20' },
    { name: 'Node.js', icon: '🟢', color: 'text-green-500', bg: 'bg-green-500/20' },
    { name: 'TypeScript', icon: '🔷', color: 'text-blue-500', bg: 'bg-blue-500/20' },
    { name: 'Python', icon: '🐍', color: 'text-yellow-400', bg: 'bg-yellow-400/20' },
    { name: 'Docker', icon: '🐳', color: 'text-blue-300', bg: 'bg-blue-300/20' },
    { name: 'AWS', icon: '☁️', color: 'text-orange-300', bg: 'bg-orange-300/20' },
    { name: 'PostgreSQL', icon: '🐘', color: 'text-blue-600', bg: 'bg-blue-600/20' },
    { name: 'MongoDB', icon: '🍃', color: 'text-green-600', bg: 'bg-green-600/20' },
    { name: 'Redis', icon: '🔴', color: 'text-red-400', bg: 'bg-red-400/20' },
    { name: 'Kubernetes', icon: '⚙️', color: 'text-blue-400', bg: 'bg-blue-400/20' },
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
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold mb-6 text-yellow-400 flex items-center">
          <span className="text-gray-500 mr-2">const</span>
          {title}
          <span className="text-gray-500 ml-2">= [</span>
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pl-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className={`
                ${tech.bg} ${tech.color} p-4 rounded-lg border border-gray-600
                transform transition-all duration-500 hover:scale-105 hover:shadow-lg
                ${visibleIcons.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
                }
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className="text-3xl mb-2 animate-pulse">{tech.icon}</div>
                <div className="font-semibold text-sm">{tech.name}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-gray-500 mt-6">];</div>
      </CardContent>
    </Card>
  );
};


import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Globe, Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import { LanguageSelector } from '@/components/LanguageSelector';
import { TechStack } from '@/components/TechStack';
import { translations } from '@/lib/translations';

const Index = () => {
  const [currentLang, setCurrentLang] = useState('en');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const t = translations[currentLang];

  const handleDownloadPDF = () => {
    // PDF download functionality - in a real app, this would generate a PDF
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You would need to add this file to public folder
    link.download = 'Resume_Software_Developer.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-green-400 font-bold text-xl">
            &gt; resume.dev
          </div>
          <div className="flex items-center gap-4">
            <LanguageSelector 
              currentLang={currentLang} 
              onLanguageChange={setCurrentLang} 
            />
            <Button 
              onClick={handleDownloadPDF}
              className="bg-green-600 hover:bg-green-500 text-black font-semibold"
            >
              <Download className="w-4 h-4 mr-2" />
              {t.downloadPDF}
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 max-w-6xl">
        {/* Hero Section */}
        <section className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 relative overflow-hidden">
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            
            <div className="pt-8">
              <div className="text-gray-400 mb-2">// {t.welcomeMessage}</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-400">
                {t.name}
              </h1>
              <h2 className="text-xl md:text-2xl text-blue-400 mb-6">
                {t.title}
              </h2>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail className="w-4 h-4" />
                  <span>developer@email.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span>{t.location}</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-green-400 flex items-center">
                <span className="text-gray-500 mr-2">const</span>
                {t.aboutTitle}
                <span className="text-gray-500 ml-2">= &#123;</span>
              </h3>
              <div className="pl-6 border-l-2 border-green-400/30">
                <p className="text-gray-300 leading-relaxed text-lg">
                  {t.aboutDescription}
                </p>
              </div>
              <div className="text-gray-500 mt-4">&#125;;</div>
            </CardContent>
          </Card>
        </section>

        {/* Tech Stack */}
        <section className={`mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <TechStack title={t.techStackTitle} />
        </section>

        {/* Experience Section */}
        <section className={`mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-400 flex items-center">
                <span className="text-gray-500 mr-2">function</span>
                {t.experienceTitle}
                <span className="text-gray-500 ml-2">() &#123;</span>
              </h3>
              
              <div className="pl-6">
                <div className="space-y-8">
                  <div className="border-l-2 border-blue-400/30 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold text-white mb-2">Senior Software Developer</h4>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="secondary" className="bg-gray-700 text-gray-300">2020 - Present</Badge>
                        <Badge variant="secondary" className="bg-gray-700 text-gray-300">Tech Company Inc.</Badge>
                      </div>
                      <p className="text-gray-300 mb-4">
                        Led development of microservices architecture, improving system performance by 40% and reducing deployment time by 60%.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-green-600/20 text-green-400">Java</Badge>
                        <Badge className="bg-green-600/20 text-green-400">Spring Boot</Badge>
                        <Badge className="bg-green-600/20 text-green-400">Microservices</Badge>
                        <Badge className="bg-green-600/20 text-green-400">AWS</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-2 border-blue-400/30 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold text-white mb-2">Full Stack Developer</h4>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="secondary" className="bg-gray-700 text-gray-300">2018 - 2020</Badge>
                        <Badge variant="secondary" className="bg-gray-700 text-gray-300">Innovation Labs</Badge>
                      </div>
                      <p className="text-gray-300 mb-4">
                        Developed and maintained full-stack applications using modern frameworks, contributing to 15+ successful project deliveries.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-green-600/20 text-green-400">React</Badge>
                        <Badge className="bg-green-600/20 text-green-400">Node.js</Badge>
                        <Badge className="bg-green-600/20 text-green-400">PostgreSQL</Badge>
                        <Badge className="bg-green-600/20 text-green-400">Docker</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-2 border-blue-400/30 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold text-white mb-2">Software Developer</h4>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="secondary" className="bg-gray-700 text-gray-300">2017 - 2018</Badge>
                        <Badge variant="secondary" className="bg-gray-700 text-gray-300">StartupCo</Badge>
                      </div>
                      <p className="text-gray-300 mb-4">
                        Built scalable backend solutions and RESTful APIs, supporting rapid business growth and user acquisition.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-green-600/20 text-green-400">Python</Badge>
                        <Badge className="bg-green-600/20 text-green-400">Django</Badge>
                        <Badge className="bg-green-600/20 text-green-400">MySQL</Badge>
                        <Badge className="bg-green-600/20 text-green-400">Redis</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-gray-500 mt-6">&#125;</div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">
                {t.contactTitle}
              </h3>
              <p className="text-gray-300 mb-6">
                {t.contactDescription}
              </p>
              <Button className="bg-purple-600 hover:bg-purple-500 text-white">
                <Mail className="w-4 h-4 mr-2" />
                {t.getInTouch}
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-8 mt-12">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2024 Software Developer. {t.footerText}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

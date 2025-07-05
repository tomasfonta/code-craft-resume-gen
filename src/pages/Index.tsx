import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Mail, Phone, MapPin, Sun, Moon } from 'lucide-react';
import { LanguageSelector } from '@/components/LanguageSelector';
import { TechStack } from '@/components/TechStack';
import { translations } from '@/lib/translations';
import html2pdf from 'html2pdf.js';

const Index = () => {
  const [currentLang, setCurrentLang] = useState('en');
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const t = translations[currentLang];

  const handleDownloadPDF = () => {
    const element = document.getElementById('resume-content');
    const opt = {
      margin: 1,
      filename: 'Tomas_Fontanarrosa_Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClasses = isDarkMode 
    ? 'bg-gray-900 text-gray-100' 
    : 'bg-white text-gray-900';
  
  const cardClasses = isDarkMode 
    ? 'bg-gray-800 border-gray-700' 
    : 'bg-gray-50 border-gray-200';

  return (
    <div className={`min-h-screen ${themeClasses} font-mono transition-colors duration-300`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 ${isDarkMode ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-sm border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className={`${isDarkMode ? 'text-green-400' : 'text-green-600'} font-bold text-xl`}>
            &gt; resume.dev
          </div>
          <div className="flex items-center gap-4">
            <Button
              onClick={toggleTheme}
              variant="outline"
              size="icon"
              className={`${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <LanguageSelector 
              currentLang={currentLang} 
              onLanguageChange={setCurrentLang}
              isDarkMode={isDarkMode}
            />
            <Button 
              onClick={handleDownloadPDF}
              className={`${isDarkMode ? 'bg-green-600 hover:bg-green-500' : 'bg-green-700 hover:bg-green-600'} text-white font-semibold`}
            >
              <Download className="w-4 h-4 mr-2" />
              {t.downloadPDF}
            </Button>
          </div>
        </div>
      </header>

      <div id="resume-content">
        <main className="container mx-auto px-6 py-8 max-w-6xl">
          {/* Hero Section */}
          <section className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className={`${cardClasses} rounded-lg p-8 border relative overflow-hidden`}>
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              
              <div className="absolute top-4 right-4">
                <img 
                  src="/lovable-uploads/f246eb4e-592d-4877-887d-a4a8c73afb77.png" 
                  alt="Logo" 
                  className={`w-16 h-16 ${isDarkMode ? 'filter invert' : ''}`}
                />
              </div>
              
              <div className="pt-8">
                <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>// {t.welcomeMessage}</div>
                <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                  Tomás Fontanarrosa
                </h1>
                <h2 className={`text-xl md:text-2xl ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mb-6`}>
                  {t.title}
                </h2>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <Mail className="w-4 h-4" />
                    <span>fontanarrosatomas@gmail.com</span>
                  </div>
                  <div className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <Phone className="w-4 h-4" />
                    <span>+34649006569</span>
                  </div>
                  <div className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <MapPin className="w-4 h-4" />
                    <span>Palma de Mallorca, Spain</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Card className={cardClasses}>
              <CardContent className="p-8">
                <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-green-400' : 'text-green-600'} flex items-center`}>
                  <span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'} mr-2`}>const</span>
                  {t.aboutTitle}
                  <span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'} ml-2`}>= &#123;</span>
                </h3>
                <div className={`pl-6 border-l-2 ${isDarkMode ? 'border-green-400/30' : 'border-green-600/30'}`}>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed text-lg`}>
                    {t.aboutDescription}
                  </p>
                </div>
                <div className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'} mt-4`}>&#125;;</div>
              </CardContent>
            </Card>
          </section>

          {/* Tech Stack & Skills Combined */}
          <section className={`mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <TechStack title={t.skillsTitle} isDarkMode={isDarkMode} />
          </section>

          {/* Experience Section */}
          <section className={`mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Card className={cardClasses}>
              <CardContent className="p-8">
                <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} flex items-center`}>
                  <span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'} mr-2`}>function</span>
                  {t.experienceTitle}
                  <span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'} ml-2`}>() &#123;</span>
                </h3>
                
                <div className="pl-6">
                  <div className="space-y-8">
                    <div className="border-l-2 border-blue-400/30 pl-6 relative">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
                      <div className="mb-4">
                        <h4 className="text-xl font-semibold text-white mb-2">Senior Software Developer at eDreams ODIGEO</h4>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="secondary" className="bg-gray-700 text-gray-300">Feb 2022 - Present</Badge>
                          <Badge variant="secondary" className="bg-gray-700 text-gray-300">Barcelona</Badge>
                        </div>
                        <p className="text-gray-300 mb-4">
                          Working as a Java Backend Software Developer at eDreams ODIGEO, a major online travel agency based in Barcelona, Spain. Involved in the development of scalable, high-performance backend services using Java and microservices architecture. Actively contribute to translating business ideas into practical and actionable technical initiatives, ensuring alignment between product vision and engineering execution.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-green-600/20 text-green-400">Java</Badge>
                          <Badge className="bg-green-600/20 text-green-400">Microservices</Badge>
                          <Badge className="bg-green-600/20 text-green-400">Spring Boot</Badge>
                          <Badge className="bg-green-600/20 text-green-400">Backend Development</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-2 border-blue-400/30 pl-6 relative">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
                      <div className="mb-4">
                        <h4 className="text-xl font-semibold text-white mb-2">Full Stack Developer at Primero Systems</h4>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="secondary" className="bg-gray-700 text-gray-300">Dec 2020 - Jun 2022</Badge>
                          <Badge variant="secondary" className="bg-gray-700 text-gray-300">Remote (San Diego)</Badge>
                        </div>
                        <p className="text-gray-300 mb-4">
                          Worked as a Full-Stack Developer focusing primarily on the development of a back-office system for Midwest Laboratories, a client based in Nebraska, USA. The application was built using .NET Core 5, React, and PostgreSQL, supporting critical administrative and operational processes within the laboratory.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-green-600/20 text-green-400">.NET Core 5</Badge>
                          <Badge className="bg-green-600/20 text-green-400">React</Badge>
                          <Badge className="bg-green-600/20 text-green-400">PostgreSQL</Badge>
                          <Badge className="bg-green-600/20 text-green-400">Full Stack</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-2 border-blue-400/30 pl-6 relative">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
                      <div className="mb-4">
                        <h4 className="text-xl font-semibold text-white mb-2">Full Stack Developer at OZ</h4>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="secondary" className="bg-gray-700 text-gray-300">Aug 2019 - Nov 2020</Badge>
                          <Badge variant="secondary" className="bg-gray-700 text-gray-300">Remote (Florida)</Badge>
                        </div>
                        <p className="text-gray-300 mb-4">
                          Part of the development team for SandDollar, a comprehensive application developed for Royal Caribbean. The project consists of several interconnected modules designed to manage all commercial operations on a private island in the Bahamas, including retail, dining, reservations, and guest services.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-green-600/20 text-green-400">Java</Badge>
                          <Badge className="bg-green-600/20 text-green-400">Spring</Badge>
                          <Badge className="bg-green-600/20 text-green-400">Hibernate</Badge>
                          <Badge className="bg-green-600/20 text-green-400">Android</Badge>
                          <Badge className="bg-green-600/20 text-green-400">Angular</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-2 border-blue-400/30 pl-6 relative">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
                      <div className="mb-4">
                        <h4 className="text-xl font-semibold text-white mb-2">Full Stack Developer at Crucijuegos</h4>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="secondary" className="bg-gray-700 text-gray-300">Dec 2017 - Dec 2018</Badge>
                          <Badge variant="secondary" className="bg-gray-700 text-gray-300">Rosario, Argentina</Badge>
                        </div>
                        <p className="text-gray-300 mb-4">
                          Collaborated within a 4-person team to develop a desktop application using magnetic card technology for accurate employee working hours monitoring. Additionally, developed a web-based administration system to configure sales stands and generate detailed commercial financial reports.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-green-600/20 text-green-400">Java</Badge>
                          <Badge className="bg-green-600/20 text-green-400">Spring MVC</Badge>
                          <Badge className="bg-green-600/20 text-green-400">Hibernate</Badge>
                          <Badge className="bg-green-600/20 text-green-400">JSP</Badge>
                          <Badge className="bg-green-600/20 text-green-400">MySQL</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-2 border-blue-400/30 pl-6 relative">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
                      <div className="mb-4">
                        <h4 className="text-xl font-semibold text-white mb-2">Junior Java Developer at Globant</h4>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="secondary" className="bg-gray-700 text-gray-300">Oct 2016 - Nov 2017</Badge>
                          <Badge variant="secondary" className="bg-gray-700 text-gray-300">Rosario, Argentina</Badge>
                        </div>
                        <p className="text-gray-300 mb-4">
                          Worked as a staff augmentation resource on a project with EMC², contributing to the development and maintenance of their corporate website, www.emc.com. Focused on backend development using Java EE and Adobe Experience Manager (AEM) as the CMS platform.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-green-600/20 text-green-400">Java EE</Badge>
                          <Badge className="bg-green-600/20 text-green-400">Adobe Experience Manager</Badge>
                          <Badge className="bg-green-600/20 text-green-400">CMS</Badge>
                          <Badge className="bg-green-600/20 text-green-400">Backend Development</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'} mt-6`}>&#125;</div>
              </CardContent>
            </Card>
          </section>

          {/* Education Section */}
          <section className={`mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Card className={cardClasses}>
              <CardContent className="p-8">
                <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'} flex items-center`}>
                  <span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'} mr-2`}>class</span>
                  {t.educationTitle}
                  <span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'} ml-2`}>&#123;</span>
                </h3>
                
                <div className="pl-6">
                  <div className="space-y-6">
                    <div className="border-l-2 border-purple-400/30 pl-6 relative">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-400 rounded-full"></div>
                      <div className="mb-4">
                        <h4 className="text-xl font-semibold text-white mb-2">Universidad Tecnológica Nacional</h4>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="secondary" className="bg-gray-700 text-gray-300">Jan 2013 - Jan 2020</Badge>
                          <Badge variant="secondary" className="bg-gray-700 text-gray-300">Rosario</Badge>
                        </div>
                        <p className="text-gray-300">
                          Information Systems Engineering in Systems Engineering
                        </p>
                      </div>
                    </div>

                    <div className="border-l-2 border-purple-400/30 pl-6 relative">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-400 rounded-full"></div>
                      <div className="mb-4">
                        <h4 className="text-xl font-semibold text-white mb-2">ComunidadIT</h4>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="secondary" className="bg-gray-700 text-gray-300">Jan 2017 - Jan 2017</Badge>
                        </div>
                        <p className="text-gray-300">
                          UX & UI Design Course
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'} mt-6`}>&#125;</div>
              </CardContent>
            </Card>
          </section>

          {/* Languages & Hobbies Section */}
          <section className={`mb-12 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className={cardClasses}>
                <CardContent className="p-8">
                  <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'} flex items-center`}>
                    <span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'} mr-2`}>const</span>
                    {t.languagesTitle}
                    <span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'} ml-2`}>= &#123;</span>
                  </h3>
                  
                  <div className="pl-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Spanish</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-orange-400' : 'bg-orange-600'}`} />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>English</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className={`w-3 h-3 rounded-full ${i < 4 ? (isDarkMode ? 'bg-orange-400' : 'bg-orange-600') : (isDarkMode ? 'bg-gray-600' : 'bg-gray-300')}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'} mt-6`}>&#125;;</div>
                </CardContent>
              </Card>

              <Card className={cardClasses}>
                <CardContent className="p-8">
                  <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-pink-400' : 'text-pink-600'} flex items-center`}>
                    <span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'} mr-2`}>const</span>
                    {t.hobbiesTitle}
                    <span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'} ml-2`}>= [</span>
                  </h3>
                  
                  <div className="pl-6">
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                      Passionate about running and staying physically active through outdoor sports such as kitesurfing and camping. Enthusiastic about motorcycle maintenance and repair, combining hands-on mechanical skills with a love for two-wheel adventure. A strong interest in wildlife and nature exploration, often seeking opportunities to disconnect and reconnect with the outdoors. Additionally, I actively follow geopolitics, with a focus on global affairs, economic trends, and their influence on technology and international markets.
                    </p>
                  </div>
                  
                  <div className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'} mt-6`}>];</div>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className={`border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} py-8 mt-12`}>
        <div className={`container mx-auto px-6 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <p>&copy; 2025 Tomás Fontanarrosa. Make Bitcoin Great Again</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

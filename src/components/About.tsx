import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      company: "Tata Consultancy Services (TCS)",
      role: "Software Engineer",
      period: "Present",
      location: "India",
      description: "Working at TCS, one of India's largest multinational IT services company. Currently developing a high-end CRM application for call center users for a Colorado-based network company. Building advanced customer relationship management solutions with modern web technologies.",
      icon: <Briefcase className="w-6 h-6 text-purple-400" />
    },
    {
      company: "KGISL (for AINQA - Malaysia)",
      role: "Full Stack Developer",
      period: "2 Years",
      location: "Malaysia Client",
      description: "Worked exclusively for AINQA, a Malaysian product-based company, developing multiple healthcare solutions including hospital management apps, medicine buying platforms, service registry applications, and URL shortening services using React Native and modern web technologies.",
      icon: <Briefcase className="w-6 h-6 text-purple-400" />
    }
  ];

  const learningAreas = [
    "Data Science",
    "Python",
    "Blockchain",
    "R Language",
    "Artificial Intelligence"
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-purple-400">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate software engineer with expertise in building scalable applications and innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>
            {experiences.map((exp, index) => (
              <div key={index} className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-600/20 rounded-lg">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-white">{exp.company}</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mb-3">
                      <p className="text-purple-400 font-medium">{exp.role}</p>
                      <div className="flex items-center gap-1 text-sm text-gray-400">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Always Learning Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Always Learning</h3>
            <div className="grid grid-cols-1 gap-4">
              {learningAreas.map((area, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-purple-600/10 to-purple-700/10 p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <h4 className="text-white font-medium text-center">{area}</h4>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-black/50 backdrop-blur-sm rounded-xl border border-gray-800">
              <h4 className="text-lg font-semibold text-white mb-3">Core Skills</h4>
              <p className="text-gray-300 leading-relaxed">
                4+ years of experience in full-stack development, specializing in React, React Native, 
                and modern web technologies. Proven track record in healthcare technology, CRM systems, 
                and building scalable applications for international clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
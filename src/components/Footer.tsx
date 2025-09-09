import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Tech Stack', id: 'tech-stack' },
    { name: 'Contact', id: 'contact' }
  ];

  const services = [
    'Full Stack Development',
    'Mobile App Development',
    'CRM Solutions',
    'Healthcare Technology',
    'API Development'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">Harshad</h3>
            <p className="text-gray-400 mb-6">
              Software Engineer crafting innovative solutions with modern technologies.
            </p>
            
            <div className="flex space-x-4">
              <a
                href="https://github.com/ShaikHarshadAli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/harshadview"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:shailharshadali98838@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {services.map((service, index) => (
                <span
                  key={index}
                  className="text-gray-400"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
            <div className="space-y-2">
              <a
                href="mailto:shailharshadali98838@gmail.com"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200 block"
              >
                shailharshadali98838@gmail.com
              </a>
              {/* <a
                href="https://forms.gle/EkmhFt8depwcdrv47"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200 block"
              >
                Schedule a Call
              </a> */}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Harshad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
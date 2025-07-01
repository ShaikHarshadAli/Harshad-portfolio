import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, Link2, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Advanced CRM Application",
      description: "High-end customer relationship management system for call center users at a Colorado-based network company. Built with modern web technologies for optimal performance.",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      category: "Enterprise Software"
    },
    {
      title: "Hospital Management System",
      description: "Comprehensive healthcare solution for Malaysian client AINQA, streamlining hospital operations and patient management with intuitive user interfaces.",
      technologies: ["React Native", "Redux", "Firebase", "REST API"],
      icon: <Smartphone className="w-8 h-8 text-purple-400" />,
      category: "Healthcare Technology"
    },
    {
      title: "Medicine Buying Platform",
      description: "E-commerce application for pharmaceutical purchases, featuring secure payment integration, inventory management, and prescription validation systems.",
      technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      category: "E-commerce"
    },
    {
      title: "Service Registry Application",
      description: "Microservices discovery and registration platform enabling seamless service communication and load balancing in distributed systems.",
      technologies: ["Node.js", "Docker", "Kubernetes", "Redis"],
      icon: <Github className="w-8 h-8 text-purple-400" />,
      category: "DevOps & Infrastructure"
    },
    {
      title: "URL Shortening Service",
      description: "High-performance URL shortener with analytics dashboard, custom domains, and real-time click tracking for marketing campaigns.",
      technologies: ["React", "Express.js", "MongoDB", "Redis"],
      icon: <Link2 className="w-8 h-8 text-purple-400" />,
      category: "Web Application"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative solutions built for clients across healthcare, enterprise, and web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                {project.icon}
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-sm text-purple-400">{project.category}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/ShaikHarshadAli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-lg font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            <Github size={20} />
            View All Projects on GitHub
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
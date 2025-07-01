import React from 'react';

const TechStack = () => {
  const techCategories = [
    {
      title: "Frontend",
      technologies: [
        { name: "React", icon: "⚛️" },
        { name: "React Native", icon: "📱" },
        { name: "TypeScript", icon: "🔷" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "Redux", icon: "🔄" }
      ]
    },
    {
      title: "Backend",
      technologies: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "⚡" },
        { name: "REST APIs", icon: "🔗" },
        { name: "GraphQL", icon: "📊" },
        { name: "Microservices", icon: "🏗️" }
      ]
    },
    {
      title: "Database",
      technologies: [
        { name: "MongoDB", icon: "🍃" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "SQL", icon: "🗄️" },
        { name: "Redis", icon: "⚡" },
        { name: "Firebase", icon: "🔥" }
      ]
    },
    {
      title: "DevOps & Tools",
      technologies: [
        { name: "Docker", icon: "🐳" },
        { name: "Kubernetes", icon: "☸️" },
        { name: "GitLab", icon: "🦊" },
        { name: "AWS", icon: "☁️" },
        { name: "GitHub", icon: "🐙", link: "https://github.com/ShaikHarshadAli" }
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technology <span className="text-purple-400">Arsenal</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leveraging cutting-edge technologies to build robust, scalable solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  tech.link ? (
                    <a
                      key={techIndex}
                      href={tech.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition-all duration-200 border border-purple-500/30 hover:border-purple-500/50"
                    >
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="text-white font-medium">{tech.name}</span>
                    </a>
                  ) : (
                    <div 
                      key={techIndex}
                      className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-purple-600/20 transition-all duration-200 hover:border-purple-500/30 border border-transparent"
                    >
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="text-white font-medium">{tech.name}</span>
                    </div>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600/10 to-purple-700/10 p-8 rounded-xl border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Always Exploring New Technologies
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Passionate about staying current with emerging technologies and best practices. 
              Continuously learning and adapting to deliver cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
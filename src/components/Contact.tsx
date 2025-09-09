import React from 'react';
import { Mail, Calendar, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "Drop me a line anytime",
      value: "shailharshadali98838@gmail.com",
      link: "mailto:shailharshadali98838@gmail.com",
      color: "from-blue-500 to-blue-600"
    },
    // {
    //   icon: <Calendar className="w-6 h-6" />,
    //   title: "Schedule a Call",
    //   description: "Let's discuss your project",
    //   value: "Book a Meeting",
    //   link: "https://forms.gle/EkmhFt8depwcdrv47",
    //   color: "from-green-500 to-green-600"
    // },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      description: "Check out my repositories",
      value: "ShaikHarshadAli",
      link: "https://github.com/ShaikHarshadAli",
      color: "from-gray-600 to-gray-700"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      description: "Let's connect professionally",
      value: "harshadview",
      link: "https://www.linkedin.com/in/harshadview",
      color: "from-blue-600 to-blue-700"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-purple-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target={method.link.startsWith('mailto:') ? '_self' : '_blank'}
              rel={method.link.startsWith('mailto:') ? '' : 'noopener noreferrer'}
              className="group bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${method.color} mb-4`}>
                <div className="text-white">
                  {method.icon}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-200">
                {method.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-3">
                {method.description}
              </p>
              
              <div className="flex items-center gap-2 text-purple-400 font-medium">
                <span>{method.value}</span>
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </a>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600/10 to-purple-700/10 p-8 rounded-xl border border-purple-500/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start a Project?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Whether you need a full-stack application, mobile app, or custom solution, 
            I'm here to help bring your vision to reality with clean, efficient code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:shailharshadali98838@gmail.com"
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-lg font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              Send Email
            </a>
            
            {/* <a
              href="https://forms.gle/EkmhFt8depwcdrv47"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-purple-600 text-purple-400 px-8 py-4 rounded-lg font-medium hover:bg-purple-600/10 transition-all duration-300"
            >
              Schedule Call
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
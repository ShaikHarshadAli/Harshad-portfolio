import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating orbs with gentle movement */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/8 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/6 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-400/5 rounded-full blur-3xl animate-float-medium"></div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-purple-800/5"></div>
        
        {/* Animated particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400/30 rounded-full animate-twinkle"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-300/40 rounded-full animate-twinkle-delayed"></div>
        <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-purple-500/25 rounded-full animate-twinkle-slow"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-purple-400/35 rounded-full animate-twinkle-medium"></div>
        <div className="absolute top-1/2 left-10 w-1 h-1 bg-purple-300/30 rounded-full animate-twinkle-fast"></div>
        <div className="absolute top-1/3 right-10 w-1.5 h-1.5 bg-purple-500/20 rounded-full animate-twinkle-delayed"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent animate-gradient">
                Harshad
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
              Software Engineer with 4+ years of experience building innovative solutions
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-lg font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-purple-500/25"
            >
              Get in Touch
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <a
              href="https://forms.gle/EkmhFt8depwcdrv47"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-purple-600 text-purple-400 px-8 py-4 rounded-lg font-medium hover:bg-purple-600/10 transition-all duration-300 flex items-center gap-2"
            >
              <Calendar size={20} />
              Book a 1-on-1
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-15px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
        
        @keyframes float-slower {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-15px) translateX(-10px); }
          66% { transform: translateY(-25px) translateX(15px); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(20px); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-float-slower {
          animation: float-slower 12s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        
        .animate-twinkle-delayed {
          animation: twinkle 3s ease-in-out infinite 1s;
        }
        
        .animate-twinkle-slow {
          animation: twinkle 4s ease-in-out infinite;
        }
        
        .animate-twinkle-medium {
          animation: twinkle 3.5s ease-in-out infinite 0.5s;
        }
        
        .animate-twinkle-fast {
          animation: twinkle 2.5s ease-in-out infinite 1.5s;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
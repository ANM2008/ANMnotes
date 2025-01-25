import React from 'react';
import { BookOpen, Atom, Calculator } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const AnimatedIcon = ({ icon: Icon, animation }) => {
  return (
    <div className="transform transition-all duration-300 hover:scale-110">
      <Icon className={`w-8 h-8 md:w-12 md:h-12 text-white ${animation}`} />
    </div>
  );
};

const TypewriterHeader = () => {
  const staticText = "Master Your";
  const words = [
    " Chemistry Notes",
    " Physics Notes",
    " Mathematics",
    " Academic Goals",
    " Future Success"
  ];

  return (
    <div className="flex items-center justify-center">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 hover:scale-105 transition-transform duration-300 flex flex-col md:flex-row items-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">
          {staticText}
        </span>
        <div className="typewriter-wrapper">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7110f5] to-[#a561f8]">
            <Typewriter
              options={{
                strings: words,
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80,
                pauseFor: 1500,
                cursor: "|",
                cursorClassName: "custom-cursor",
                wrapperClassName: "whitespace-pre typewriter-text"
              }}
            />
          </span>
        </div>
      </h1>
    </div>
  );
};

const HomePage = () => {
  const navigate = useNavigate();

  const subjects = [
    {
      title: 'Chemistry',
      icon: Atom,
      animation: "animate-[spin_4s_linear_infinite] hover:animate-[spin_1s_linear_infinite]",
      description: 'Explore atoms, molecules, and chemical reactions. Learn about the building blocks of matter and understand how different elements interact to form compounds.',
      gradient: 'from-[#7110f5] to-[#9448f7]',
      path: '/chemistry'
    },
    {
      title: 'Physics',
      icon: BookOpen,
      animation: "animate-[float_3s_ease-in-out_infinite]",
      description: 'Discover the fundamental laws that govern the universe, from mechanics to quantum physics. Understand the principles that shape our physical world.',
      gradient: 'from-[#7110f5] to-[#8a2ff6]',
      path: '/physics'
    },
    {
      title: 'Mathematics',
      icon: Calculator,
      animation: "animate-[wiggle_1s_ease-in-out_infinite]",
      description: 'Master the language of numbers, from algebra to calculus and beyond. Develop problem-solving skills and explore the foundations of mathematical thinking.',
      gradient: 'from-[#7110f5] to-[#a561f8]',
      path: '/mathematics'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen transition-all duration-500 bg-gradient-to-br from-gray-50 to-white">
      {/* Header Bar */}
      <div className="w-full bg-gradient-to-r from-[#7110f5] to-[#a561f8] p-2 md:p-4 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-xl md:text-2xl font-bold text-white text-center tracking-wider">
            ANM
          </h1>
        </div>
      </div>

      {/* Animated Background Shapes */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute w-48 md:w-96 h-48 md:h-96 -top-24 md:-top-48 -left-24 md:-left-48 bg-[#7110f5]/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute w-48 md:w-96 h-48 md:h-96 top-1/2 left-1/2 bg-[#9448f7]/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-48 md:w-96 h-48 md:h-96 -bottom-24 md:-bottom-48 -right-24 md:-right-48 bg-[#a561f8]/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="py-8 md:py-16 px-4 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 md:mb-16 animate-slide-down">
            <TypewriterHeader />
            <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-600 animate-fade-in animation-delay-500 px-4">
              Comprehensive study materials for science and mathematics to help you excel in your academic journey
            </p>
          </div>

          {/* Subject Cards Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 md:px-0">
        {subjects.map((subject, index) => (
          <div
            key={subject.title}
            className={`group relative h-full animate-slide-up animation-delay-${index + 1}000`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#7110f5]/30 to-[#9448f7]/30 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
            <div className="relative h-full bg-white border border-gray-200 rounded-xl p-4 md:p-8 hover:border-[#7110f5]/50 transition-all duration-300 backdrop-blur-xl flex flex-col group-hover:scale-105 group-hover:-translate-y-2">
              <div className="flex flex-col items-center text-center space-y-3 md:space-y-4 flex-grow">
                <div className={`p-2 md:p-3 rounded-lg bg-gradient-to-r ${subject.gradient} shadow-lg transform transition-transform group-hover:rotate-12`}>
                  <AnimatedIcon icon={subject.icon} animation={subject.animation} />
                </div>
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 group-hover:text-[#7110f5] transition-colors duration-300">
                      {subject.title}
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 flex-grow">
                      {subject.description}
                    </p>
                    <button 
                      onClick={() => navigate(subject.path)}
                      className="mt-2 md:mt-4 px-4 md:px-6 py-2 bg-gradient-to-r from-[#7110f5] to-[#9448f7] hover:from-[#8a2ff6] hover:to-[#a561f8] text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-[#7110f5]/25 hover:scale-110 text-sm md:text-base"
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-r from-[#7110f5] to-[#a561f8] py-2 shadow-lg mt-auto">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-white text-center text-xs md:text-sm flex flex-col md:flex-row justify-center items-center space-y-1 md:space-y-0 md:space-x-2">
            <p className="font-medium">Made by Atharva Nitin Mahajan</p>
            <p className="hidden md:block">•</p>
            <p>Div: COA2K</p>
            <p className="hidden md:block">•</p>
            <p>Roll no: 240354</p>
          </div>
        </div>
      </footer>

      {/* Styles */}
      <style jsx global>{`
        .typewriter-wrapper {
          display: inline-flex;
          align-items: center;
          min-width: 200px;
          margin-left: 0;
          margin-top: 0.5rem;
          height: 48px;
          @media (min-width: 768px) {
            min-width: 280px;
            margin-left: 4px;
            margin-top: 0;
            height: 72px;
          }
        }

        .typewriter-text {
          display: inline-block;
          line-height: 1.4;
        }

        .custom-cursor {
          display: inline-block;
          width: 3px;
          height: 32px;
          background: linear-gradient(to bottom, #7110f5, #a561f8);
          border-radius: 4px;
          animation: blink 1s infinite;
          margin-left: -3px;
          vertical-align: middle;
          transform: translateY(-2px);
          @media (min-width: 768px) {
            width: 4px;
            height: 40px;
            margin-left: -4px;
          }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
         @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }

        /* Add hover animations */
        .icon-hover-effect:hover {
          filter: drop-shadow(0 0 8px rgba(113, 16, 245, 0.5));
        }
      `}</style>
    </div>
  );
};

export default HomePage;
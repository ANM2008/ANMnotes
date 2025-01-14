import React from 'react';
import { BookOpen, Atom, Calculator } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

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
      <h1 className="text-5xl font-bold mb-4 hover:scale-105 transition-transform duration-300 flex items-center">
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
      icon: <Atom className="w-12 h-12 text-white animate-spin-slow" />,
      description: 'Explore atoms, molecules, and chemical reactions. Learn about the building blocks of matter and understand how different elements interact to form compounds.',
      gradient: 'from-[#7110f5] to-[#9448f7]',
      path: '/chemistry'
    },
    {
      title: 'Physics',
      icon: <BookOpen className="w-12 h-12 text-white animate-bounce-gentle" />,
      description: 'Discover the fundamental laws that govern the universe, from mechanics to quantum physics. Understand the principles that shape our physical world.',
      gradient: 'from-[#7110f5] to-[#8a2ff6]',
      path: '/physics'
    },
    {
      title: 'Mathematics',
      icon: <Calculator className="w-12 h-12 text-white animate-pulse" />,
      description: 'Master the language of numbers, from algebra to calculus and beyond. Develop problem-solving skills and explore the foundations of mathematical thinking.',
      gradient: 'from-[#7110f5] to-[#a561f8]',
      path: '/mathematics'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen transition-all duration-500 bg-gradient-to-br from-gray-50 to-white">
      {/* New Horizontal Bar */}
      <div className="w-full bg-gradient-to-r from-[#7110f5] to-[#a561f8] p-4 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-white text-center tracking-wider">
            ANM
          </h1>
        </div>
      </div>

      {/* Animated Background Shapes */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-[#7110f5]/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute w-96 h-96 top-1/2 left-1/2 bg-[#9448f7]/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-[#a561f8]/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-4 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 animate-slide-down">
            <TypewriterHeader />
            <p className="text-lg max-w-2xl mx-auto text-gray-600 animate-fade-in animation-delay-500">
              Comprehensive study materials for science and mathematics to help you excel in your academic journey
            </p>
          </div>

          {/* Subject Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <div
                key={subject.title}
                className={`group relative h-full animate-slide-up animation-delay-${index + 1}000`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#7110f5]/30 to-[#9448f7]/30 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
                <div className="relative h-full bg-white border border-gray-200 rounded-xl p-8 hover:border-[#7110f5]/50 transition-all duration-300 backdrop-blur-xl flex flex-col group-hover:scale-105 group-hover:-translate-y-2">
                  <div className="flex flex-col items-center text-center space-y-4 flex-grow">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${subject.gradient} shadow-lg transform transition-transform group-hover:rotate-12`}>
                      {subject.icon}
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-[#7110f5] transition-colors duration-300">
                      {subject.title}
                    </h2>
                    <p className="text-gray-600 flex-grow">
                      {subject.description}
                    </p>
                    <button 
                      onClick={() => navigate(subject.path)}
                      className="mt-4 px-6 py-2 bg-gradient-to-r from-[#7110f5] to-[#9448f7] hover:from-[#8a2ff6] hover:to-[#a561f8] text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-[#7110f5]/25 hover:scale-110"
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
<footer className="w-full bg-gradient-to-r from-[#7110f5] to-[#a561f8] py-2 shadow-lg mt-auto"> {/* Reduced padding */}
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-white text-center text-sm flex justify-center items-center"> {/* Added flex and reduced text size */}
      <p className="font-medium mr-2">Made by Atharva Nitin Mahajan</p> {/* Added margin right for separation if needed */}
      <p className="mr-2">Div: COA2K</p>
      <p>Roll no: 240354</p>
    </div>
  </div>
</footer>

      {/* Animations */}
      <style jsx global>{`
        /* Typewriter styles */
        .typewriter-wrapper {
          display: inline-flex;
          align-items: center;
          min-width: 280px;
          margin-left: 4px;  /* Small gap after "Master Your" */
          height: 72px;
        }

        .typewriter-text {
          display: inline-block;
          line-height: 1.4;
        }

        /* Custom cursor styles */
        .custom-cursor {
          display: inline-block;
          width: 4px;
          height: 40px;
          background: linear-gradient(to bottom, #7110f5, #a561f8);
          border-radius: 4px;
          animation: blink 1s infinite;
          margin-left: -4px;
          vertical-align: middle;
          transform: translateY(-2px);
        }

        /* Cursor blink animation */
        @keyframes blink {
          0%, 100% { 
            opacity: 1;
          }
          50% { 
            opacity: 0;
          }
        }

  /* Blob animation */
  @keyframes blob {
    0% { 
      transform: translate(0px, 0px) scale(1);
    }
    33% { 
      transform: translate(30px, -50px) scale(1.1);
    }
    66% { 
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% { 
      transform: translate(0px, 0px) scale(1);
    }
  }

  .animate-blob {
    animation: blob 7s infinite;
  }

  /* Animation delays */
  .animation-delay-2000 {
    animation-delay: 2s;
  }

  .animation-delay-4000 {
    animation-delay: 4s;
  }

  /* Spin animation */
  @keyframes spin {
    from { 
      transform: rotate(0deg);
    }
    to { 
      transform: rotate(360deg);
    }
  }

  .animate-spin-slow {
    animation: spin 6s linear infinite;
  }

  /* Bounce animation */
  @keyframes bounceGentle {
    0%, 100% { 
      transform: translateY(0);
    }
    50% { 
      transform: translateY(-10px);
    }
  }

  .animate-bounce-gentle {
    animation: bounceGentle 2s infinite;
  }

  /* Slide animations */
  @keyframes slideUp {
    from { 
      transform: translateY(20px);
      opacity: 0;
    }
    to { 
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideDown {
    from { 
      transform: translateY(-20px);
      opacity: 0;
    }
    to { 
      transform: translateY(0);
      opacity: 1;
    }
  }

  .animate-slide-up {
    animation: slideUp 0.5s ease-out forwards;
  }

  .animate-slide-down {
    animation: slideDown 0.5s ease-out forwards;
  }

  /* Fade animation */
  @keyframes fadeIn {
    from { 
      opacity: 0;
    }
    to { 
      opacity: 1;
    }
  }

  .animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
  }

  /* Cursor blink animation */
  @keyframes blink {
    0%, 100% { 
      opacity: 1;
    }
    50% { 
      opacity: 0;
    }
  }

  /* Mobile responsiveness */
     @media (max-width: 768px) {
          .typewriter-wrapper {
            height: 60px;
            min-width: 240px;
          }

          .custom-cursor {
            height: 32px;
          }
        }

        /* Rest of the styles remain the same */
      `}</style>
    </div>
  );
};

export default HomePage;
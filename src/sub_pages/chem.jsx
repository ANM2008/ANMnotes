import React, { useState } from 'react';
import { ArrowLeft, ChevronRight, FileText, Atom , Zap , Thermometer  } from 'lucide-react';
import { motion } from 'framer-motion';

const ResourceCard = ({ title, content, pdfPath, icon: Icon, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 
                     rounded-2xl transition-all duration-500 group-hover:from-purple-600/20 
                     group-hover:to-blue-600/20 blur-xl" />
      
      <motion.div
        className="relative overflow-hidden bg-white/30 backdrop-blur-md rounded-2xl
                   border border-white/20 shadow-lg transition-all duration-500
                   hover:shadow-2xl hover:bg-white/40"
      >
        <div className="relative p-6">
          <div className="flex items-start gap-6">
            {/* Animated icon container */}
            <motion.div
              animate={{ 
                y: isHovered ? -5 : 0,
                scale: isHovered ? 1.05 : 1
              }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 p-4 bg-gradient-to-br from-purple-500 to-blue-500 
                         rounded-xl text-white shadow-lg"
            >
              <Icon className="w-6 h-6" />
            </motion.div>
            
            <div className="flex-1 space-y-3">
              {/* Animated title */}
              <motion.h3 
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 
                           bg-clip-text text-transparent"
              >
                {title}
              </motion.h3>

              {/* Animated content */}
              <motion.p 
                animate={{ y: isHovered ? -5 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-600"
              >
                {content}
              </motion.p>

              {/* PDF Link with hover effect */}
              {pdfPath && (
                <motion.a
                  href={pdfPath}
                  className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 
                             group/link mt-4"
                  whileHover={{ x: 5 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="w-4 h-4" />
                  <span>View PDF</span>
                  <ChevronRight className="w-4 h-4 transition-transform 
                                         group-hover/link:translate-x-1" />
                </motion.a>
              )}
            </div>
          </div>

          {/* Progress indicator */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-[2px]"
            initial={{ scaleX: 0 }}
            animate={{ 
              scaleX: isHovered ? 1 : 0,
              background: isHovered 
                ? "linear-gradient(to right, #9333ea, #3b82f6)" 
                : "linear-gradient(to right, #9333ea, #9333ea)"
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const ChemistryResourcesPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll progress
  React.useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY;
      setScrollProgress(currentProgress / totalScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const resources = [
    {
      title: "Chemical Bonding",
      pdfPath: "pdf_resources/chemistry/Basic Science 4.pdf",
      icon: Atom
    },
    {
      title: "Electro chemistry and Metal Corrosion, its prevention ",
      pdfPath: "pdf_resources/chemistry/Basic Science 5.pdf",
      icon: Zap
    },
    {
      title: "Engineering Materials and Catalysis",
      content: "Coming soon",
      icon: Thermometer
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 
                   origin-left z-50"
        style={{ scaleX: scrollProgress }}
      />

      <div className="max-w-5xl mx-auto p-8">
        <motion.button 
          onClick={() => window.history.back()}
          className="flex items-center text-gray-600 hover:text-purple-600 mb-12 
                     transition-colors duration-300"
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span className="text-lg">Back</span>
        </motion.button>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center relative"
        >
          {/* Decorative background element */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-32 
                           bg-gradient-to-r from-purple-200/20 via-blue-200/20 to-purple-200/20 
                           blur-2xl" />
          </div>

          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 
                         bg-clip-text text-transparent mb-4 py-2 leading-relaxed">
            Basic Chemistry
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the fundamentals of chemistry through our carefully curated resources
          </p>
        </motion.div>

        <div className="space-y-6">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChemistryResourcesPage;
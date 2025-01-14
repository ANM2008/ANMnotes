import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, FileText } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useNavigate } from 'react-router-dom';

const AccordionItem = ({ title, content, isOpen, onClick, pdfPath }) => {
  return (
    <div 
      className="group transition-all duration-300"
    >
      <button
        className="w-full flex justify-between items-center p-6 transition-all duration-300 
                   hover:bg-blue-50/50 rounded-xl"
        onClick={onClick}
      >
        <div className="flex items-center space-x-4">
          <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
            isOpen ? 'bg-[#6f2cf5] scale-150' : 'bg-gray-300 group-hover:bg-[#bd9dfe]'
          }`}/>
          <span className={`font-semibold text-lg transition-colors duration-300 ${
            isOpen ? 'text-[#6f2cf5]' : 'text-gray-700 group-hover:text-[#6f2cf5]'
          }`}>{title}</span>
        </div>
        <ChevronDown 
          className={`h-5 w-5 transition-all duration-500 ${
            isOpen ? 'transform rotate-180 text-[#6f2cf5]' : 'text-gray-400 group-hover:text-[#6f2cf5]'
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`px-12 py-6 text-gray-600 transform transition-all duration-300 ${
          isOpen ? 'translate-y-0' : '-translate-y-4'
        }`}>
          <p className="leading-relaxed text-lg">{content}</p>
          {pdfPath && (
            <a 
              href={pdfPath}
              className="inline-flex items-center mt-4 text-[#6f2cf5] hover:text-[#6f2cf5] transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="h-5 w-5 mr-2" />
              View PDF Document
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ChemistryResourcesPage = () => {
  const [openItem, setOpenItem] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate(); // Add this hook for navigation

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleBackClick = () => {
    navigate('/'); // Navigate to home page
  };

  const resources = [
    {
      title: "Chemical Bonding",
      pdfPath: "pdf_resources/chemistry/Basic Science 4.pdf"
    },
    {
      title: "Electro chemistry and Metal Corrosion, its prevention ",
      pdfPath: "pdf_resources/chemistry/Basic Science 5.pdf"
    },
    {
      title: "Engineering Materials and Catalysis",
      content: "Coming soon"
    }
  ];

  const handleItemClick = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 to-white p-6 transition-opacity duration-500 ${
      isLoaded ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="max-w-4xl mx-auto">
        {/* Back button with onClick handler */}
        <button 
          onClick={handleBackClick}
          className="flex items-center text-gray-600 hover:text-[#6f2cf5] mb-8
            transition-all duration-300 transform hover:-translate-x-1 
            hover:scale-105 active:scale-95 group"
        >
          <ArrowLeft className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="text-lg">Back</span>
        </button>
          
        {/* Heading */}
        <div className={`mb-12 transition-all duration-500 transform
          ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h1 className="text-4xl font-bold text-[#6f2cf5] mb-2">
            Basic Chemistry <span className="inline-flex items-center">Resources
              <DotLottieReact
                src="https://lottie.host/240fe7d1-2326-4856-9689-d6e23ef572eb/rNn9IcD2KW.lottie"
                loop
                autoplay
                height={100}
                width={100}
                className="ml-2 -mt-2"
              />
            </span>
          </h1>
          <p className="text-lg text-gray-600">
            Explore fundamental chemistry concepts and theories
          </p>
        </div>

        {/* Custom Accordion */}
        <div className={`bg-white/70 backdrop-blur-sm rounded-2xl divide-y divide-gray-100 
          transition-all duration-500 transform shadow-lg
          hover:shadow-xl hover:bg-white/80`}>
          {resources.map((resource, index) => (
            <div
              key={index}
              className={`transition-all duration-500 transform
                ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <AccordionItem
                title={resource.title}
                content={resource.content}
                isOpen={openItem === index}
                onClick={() => handleItemClick(index)}
                pdfPath={resource.pdfPath}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChemistryResourcesPage;
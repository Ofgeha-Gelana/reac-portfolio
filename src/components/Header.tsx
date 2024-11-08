// import React from 'react';
// import { Menu } from 'lucide-react';

// const Header: React.FC = () => {
//   return (
//     <header className="bg-white dark:bg-gray-800 shadow-md">
//       <nav className="container mx-auto px-6 py-3">
//         <div className="flex justify-between items-center">
//           <div className="text-2xl font-bold text-gray-800 dark:text-white">Ofgeha Gelana</div>
//           <div className="hidden md:flex space-x-6">
//             <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Home</a>
//             <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a>
//             <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Projects</a>
//             <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</a>
//             <a href="/path-to-your-resume.pdf" download className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Resume</a>
//           </div>
//           <div className="md:hidden">
//             <button className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
//               <Menu size={24} />
//             </button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;



// import React from 'react';
// import { Menu, X } from 'lucide-react';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   return (
//     <header className="bg-white shadow-md">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-indigo-600">Ofgeha</h1>
//         <nav className="hidden md:flex space-x-6">
//           <a href="#about" className="text-gray-600 hover:text-indigo-600">About</a>
//           <a href="#skills" className="text-gray-600 hover:text-indigo-600">Skills</a>
//           <a href="#projects" className="text-gray-600 hover:text-indigo-600">Projects</a>
//           <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
//         </nav>
//         <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>
//       {isMenuOpen && (
//         <nav className="md:hidden bg-white py-4">
//           <div className="container mx-auto px-4 flex flex-col space-y-4">
//             <a href="#about" className="text-gray-600 hover:text-indigo-600">About</a>
//             <a href="#skills" className="text-gray-600 hover:text-indigo-600">Skills</a>
//             <a href="#projects" className="text-gray-600 hover:text-indigo-600">Projects</a>
//             <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
//           </div>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;



// import React from 'react';
// import { Menu, X } from 'lucide-react';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-indigo-600">Ofgeha</h1>
//         <nav className="hidden md:flex space-x-8">
//           <a href="#about" className="text-gray-600 hover:text-indigo-600 transition duration-300">About</a>
//           <a href="#skills" className="text-gray-600 hover:text-indigo-600 transition duration-300">Skills</a>
//           <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition duration-300">Projects</a>
//           <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition duration-300">Contact</a>
//         </nav>
//         <button
//           className="md:hidden text-gray-600 hover:text-indigo-600 transition duration-300"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label="Toggle menu"
//         >
//           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>
//       {isMenuOpen && (
//         <nav className="md:hidden bg-white py-4">
//           <div className="container mx-auto px-4 flex flex-col space-y-4">
//             <a href="#about" className="text-gray-600 hover:text-indigo-600 transition duration-300">About</a>
//             <a href="#skills" className="text-gray-600 hover:text-indigo-600 transition duration-300">Skills</a>
//             <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition duration-300">Projects</a>
//             <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition duration-300">Contact</a>
//           </div>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;



import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="relative group"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Ofgeha
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all group-hover:w-full"></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative px-4 py-2 text-gray-700 hover:text-indigo-600 transition-colors group"
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute inset-0 w-full h-full bg-indigo-50 rounded-lg scale-0 group-hover:scale-100 transition-transform"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 flex items-center group"
            >
              Let's Talk
              <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-900 transition-all" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900 transition-all" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-white/90 backdrop-blur-lg transition-transform duration-300 md:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-medium text-gray-900 hover:text-indigo-600 transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Let's Talk
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

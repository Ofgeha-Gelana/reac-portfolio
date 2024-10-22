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



import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">Ofgeha</h1>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-600 hover:text-indigo-600 transition duration-300">About</a>
          <a href="#skills" className="text-gray-600 hover:text-indigo-600 transition duration-300">Skills</a>
          <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition duration-300">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition duration-300">Contact</a>
        </nav>
        <button
          className="md:hidden text-gray-600 hover:text-indigo-600 transition duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} color="black" /> : <Menu size={24} color="black" />} {/* Set icon color to black */}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#about" className="text-gray-600 hover:text-indigo-600 transition duration-300">About</a>
            <a href="#skills" className="text-gray-600 hover:text-indigo-600 transition duration-300">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition duration-300">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition duration-300">Contact</a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;

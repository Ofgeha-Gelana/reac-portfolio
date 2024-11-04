


// import React from 'react';
// import { Github, Linkedin, Mail } from 'lucide-react';
// import myPhoto from "../assets/images/ofge.jpg";
// import myPhoto1 from "../assets/images/ofge1.jpg";


// const Hero = () => {
//   return (
//     <section className="bg-indigo-700 text-white py-20">
//       <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
//         <div className="md:w-1/2 mb-8 md:mb-0">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Ofgeha Gelana</h1>
//           <h2 className="text-2xl md:text-3xl mb-6">Data Scientist & AI Enthusiast</h2>
//           <p className="text-xl mb-8">Transforming data into actionable insights and innovative AI solutions.</p>
//           <div className="flex space-x-4">
//             <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-200">
//               <Github size={24} />
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-200">
//               <Linkedin size={24} />
//             </a>
//             <a href="mailto:jane@example.com" className="text-white hover:text-indigo-200">
//               <Mail size={24} />
//             </a>
//           </div>
//         </div>
//         <div className="md:w-1/2">
//           <img src={myPhoto1} alt="Jane Doe" className="rounded-full w-64 h-64 object-cover mx-auto" /> {/* Use your photo here */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;




// import React from 'react';
// import { Github, Linkedin, Mail } from 'lucide-react';
// import myPhoto1 from "../assets/images/ofge1.jpg";

// const Hero = () => {
//   return (
//     <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
//       <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
//         <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
//           <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Ofgeha Gelana</h1>
//           <h2 className="text-3xl md:text-4xl font-medium mb-6">Data Scientist & AI Enthusiast</h2>
//           <p className="text-xl md:text-2xl mb-8">Turning data into powerful insights and next-gen AI solutions.</p>
//           <div className="flex justify-center md:justify-start space-x-6">
//             <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition duration-300">
//               <Github size={30} />
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition duration-300">
//               <Linkedin size={30} />
//             </a>
//             <a href="mailto:jane@example.com" className="text-white hover:text-blue-300 transition duration-300">
//               <Mail size={30} />
//             </a>
//           </div>
//         </div>
//         <div className="md:w-1/2 flex justify-center">
//           <img src={myPhoto1} alt="Ofgeha Gelana" className="rounded-full w-72 h-72 object-cover border-4 border-white shadow-lg transform hover:scale-105 transition duration-500" /> {/* Use your photo */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



// import React from 'react';
// import { Github, Linkedin, Mail } from 'lucide-react';
// import myPhoto1 from "../assets/images/ds.jpg"; // Path to your background photo

// const Hero = () => {
//   return (
//     <section
//       className="relative bg-cover bg-center text-white py-20"
//       style={{
//         backgroundImage: `url(${myPhoto1})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <div className="absolute inset-0 bg-black bg-opacity-60"></div> {/* Overlay for better text visibility */}
      
//       <div className="container mx-auto px-4 flex flex-col items-center justify-center relative z-10">
//         <div className="text-center">
//           <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Ofgeha Gelana</h1>
//           <h2 className="text-3xl md:text-4xl font-medium mb-6">Data Scientist & AI Enthusiast</h2>
//           <p className="text-xl md:text-2xl mb-8">
//             Transforming data into actionable insights and innovative AI solutions.
//           </p>
          
//           <div className="flex justify-center space-x-6">
//             <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition duration-300">
//               <Github size={30} />
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition duration-300">
//               <Linkedin size={30} />
//             </a>
//             <a href="mailto:jane@example.com" className="text-white hover:text-blue-300 transition duration-300">
//               <Mail size={30} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;





import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import myPhoto1 from "../assets/images/ds.jpg"; // Path to your background photo

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-20"
      style={{
        backgroundImage: `url(${myPhoto1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div> {/* Dark overlay for better text visibility */}

      <div className="container mx-auto px-4 flex flex-col items-center justify-center relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide">Ofgeha Gelana</h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Data Scientist & AI Enthusiast</h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Transforming data into actionable insights and innovative AI solutions.
          </p>
        </div>

        <div className="flex justify-center space-x-8 mb-8">
          <a 
            href="https://github.com/Ofgeha-Gelana" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-blue-300 transition duration-300"
          >
            <Github size={30} />
          </a>
          <a 
            href="https://www.linkedin.com/in/ofgeha-gelana/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-blue-300 transition duration-300"
          >
            <Linkedin size={30} />
          </a>
          <a 
            href="mailto:jane@example.com" 
            className="text-white hover:text-blue-300 transition duration-300"
          >
            <Mail size={30} />
          </a>
        </div>

        <div className="mt-8">
          <img 
            src={myPhoto1} 
            alt="Profile of Ofgeha Gelana" 
            className="rounded-full w-32 h-32 border-4 border-white object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

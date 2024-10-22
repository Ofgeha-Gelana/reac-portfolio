// import React from 'react';
// import { Github, Linkedin, Mail } from 'lucide-react';



// const Hero = () => {
//   return (
//     <section className="bg-indigo-700 text-white py-20">
//       <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
//         <div className="md:w-1/2 mb-8 md:mb-0">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Jane Doe</h1>
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
//           <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Jane Doe" className="rounded-full w-64 h-64 object-cover mx-auto" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import myPhoto from "../assets/images/ofge.jpg";
import myPhoto1 from "../assets/images/ofge1.jpg";


const Hero = () => {
  return (
    <section className="bg-indigo-700 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ofgeha Gelana</h1>
          <h2 className="text-2xl md:text-3xl mb-6">Data Scientist & AI Enthusiast</h2>
          <p className="text-xl mb-8">Transforming data into actionable insights and innovative AI solutions.</p>
          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-200">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-200">
              <Linkedin size={24} />
            </a>
            <a href="mailto:jane@example.com" className="text-white hover:text-indigo-200">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={myPhoto1} alt="Jane Doe" className="rounded-full w-64 h-64 object-cover mx-auto" /> {/* Use your photo here */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

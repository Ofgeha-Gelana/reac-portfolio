// import React from 'react';

// const skills = [
//   { category: 'Programming Languages', items: ['Python', 'R', 'SQL'] },
//   { category: 'Machine Learning', items: ['TensorFlow', 'PyTorch', 'Scikit-learn'] },
//   { category: 'Data Visualization', items: ['Matplotlib', 'Seaborn', 'Plotly'] },
//   { category: 'Big Data', items: ['Hadoop', 'Spark', 'Hive'] },
//   { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Cassandra'] },
//   { category: 'Tools', items: ['Jupyter', 'Git', 'Docker'] },
// ];

// const About: React.FC = () => {
//   return (
//     <section id="about" className="py-20 bg-white dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
//         <div className="flex flex-col md:flex-row items-center justify-between">
//           <div className="md:w-1/2 mb-8 md:mb-0">
//             <p className="text-lg mb-6">
//               I'm a data scientist with 5 years of experience in machine learning, statistical analysis, and data visualization. I'm passionate about extracting meaningful insights from complex datasets and developing predictive models to solve real-world problems. My expertise spans across various industries, including finance, healthcare, and e-commerce.
//             </p>
//             <p className="text-lg">
//               When I'm not crunching numbers, you can find me contributing to open-source data science projects or writing technical articles on machine learning and AI.
//             </p>
//           </div>
//           <div className="md:w-1/2">
//             <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {skills.map((skillCategory) => (
//                 <div key={skillCategory.category} className="mb-4">
//                   <h4 className="font-semibold mb-2">{skillCategory.category}</h4>
//                   <ul className="list-disc list-inside">
//                     {skillCategory.items.map((skill) => (
//                       <li key={skill}>{skill}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


// import React from 'react';

// const About = () => {
//   return (
//     <section id="about" className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
//         <div className="max-w-3xl mx-auto">
//           <p className="text-lg mb-6">
//             I'm a passionate data scientist with 2+ years of experience in machine learning, statistical analysis, and data visualization. My expertise lies in developing AI-driven solutions that solve complex business problems and drive innovation.
//           </p>
//           <p className="text-lg mb-6">
//             With a BSc. in Computer Science and Engineering from Adama Science and Technology University, I've honed my skills in cutting-edge AI technologies and big data analytics. I'm particularly interested in natural language processing, computer vision, and predictive modeling.
//           </p>
//           <p className="text-lg">
//             When I'm not crunching numbers or building models, you can find me contributing to open-source projects, mentoring aspiring data scientists, or exploring the latest advancements in AI research.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


// import React from 'react';
// import profileImage from '../assets/images/ofge1.jpg';

// const About = () => {
//   return (
//     <section id="about" className="py-20 bg-gradient-to-r from-blue-50 to-white">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold mb-8 text-center text-blue-600">About Me</h2>
//         <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
//           <img 
//             src={profileImage} 
//             alt="Ofgeha Gelana" 
//             className="w-40 h-40 rounded-full mb-6 md:mb-0 md:mr-6"
//           />
//           <div className="md:ml-8">
//             <p className="text-lg text-gray-700 mb-6">
//               I'm a passionate data scientist with 2+ years of experience in machine learning, statistical analysis, and data visualization. My expertise lies in developing AI-driven solutions that solve complex business problems and drive innovation.
//             </p>
//             <p className="text-lg text-gray-700 mb-6">
//               With a BSc. in Computer Science and Engineering from Adama Science and Technology University, I've honed my skills in cutting-edge AI technologies and big data analytics. I'm particularly interested in natural language processing, computer vision, and predictive modeling.
//             </p>
//             <p className="text-lg text-gray-700 mb-6">
//               When I'm not crunching numbers or building models, you can find me contributing to open-source projects, mentoring aspiring data scientists, or exploring the latest advancements in AI research.
//             </p>
//             <a 
//               href="/Ofgeha-Gelana-CV.pdf" 
//               download
//               className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
//             >
//               View Resume
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;





// import React from 'react';
// import profileImage from '../assets/images/ofge1.jpg';

// const About = () => {
//   return (
//     <section id="about" className="py-20 bg-gradient-to-r from-blue-50 to-white">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold mb-12 text-center text-blue-600">About Me</h2>
        
//         <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-8 md:p-12">
//           {/* Profile Image Styling */}
//           <img 
//             src={profileImage} 
//             alt="Ofgeha Gelana" 
//             className="w-48 h-48 rounded-full mb-6 md:mb-0 md:mr-8 border-4 border-blue-100 shadow-lg"
//           />
          
//           {/* Text Content */}
//           <div className="md:ml-8">
//             <p className="text-lg text-gray-700 mb-6 leading-relaxed">
//               I'm a passionate data scientist with 2+ years of experience in machine learning, statistical analysis, and data visualization. My expertise lies in developing AI-driven solutions that solve complex business problems and drive innovation.
//             </p>
//             <p className="text-lg text-gray-700 mb-6 leading-relaxed">
//               With a BSc. in Computer Science and Engineering from Adama Science and Technology University, I've honed my skills in cutting-edge AI technologies and big data analytics. I'm particularly interested in natural language processing, computer vision, and predictive modeling.
//             </p>
//             <p className="text-lg text-gray-700 mb-6 leading-relaxed">
//               When I'm not crunching numbers or building models, you can find me contributing to open-source projects, mentoring aspiring data scientists, or exploring the latest advancements in AI research.
//             </p>
//             <a 
//               href="/Ofgeha-Gelana-CV.pdf" 
//               download
//               className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 shadow-lg transition duration-300 ease-in-out"
//             >
//               View Resume
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;




// import React from 'react';
// import profileImage from '../assets/images/ofge1.jpg';

// const About = () => {
//   return (
//     <section id="about" className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col items-center mb-16">
//           <h2 className="text-5xl font-bold text-blue-600 mb-4">About Me</h2>
//           <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
//         </div>
        
//         <div className="max-w-6xl mx-auto">
//           <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
//             <div className="flex flex-col md:flex-row items-center p-8 md:p-12 gap-12">
//               <div className="md:w-1/3 flex flex-col items-center">
//                 <div className="relative">
//                   <div className="absolute inset-0 bg-blue-600 rounded-full blur-lg opacity-20"></div>
//                   <img 
//                     src={profileImage} 
//                     alt="Ofgeha Gelana" 
//                     className="w-64 h-64 rounded-full relative z-10 border-4 border-white shadow-2xl object-cover"
//                   />
//                 </div>
//                 <a 
//                   href="/Ofgeha-Gelana-CV.pdf" 
//                   download
//                   className="group relative mt-8 inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 shadow-lg transition-all duration-300 ease-in-out hover:shadow-blue-200 hover:shadow-xl"
//                 >
//                   <span>Download CV</span>
//                   <svg 
//                     className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
//                     fill="none" 
//                     stroke="currentColor" 
//                     viewBox="0 0 24 24"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
//                   </svg>
//                 </a>
//               </div>
              
//               <div className="md:w-2/3 space-y-6">
//                 <div className="space-y-6 text-gray-700">
//                   <p className="text-xl leading-relaxed">
//                     I'm a passionate data scientist with 2+ years of experience in machine learning, statistical analysis, and data visualization. My expertise lies in developing AI-driven solutions that solve complex business problems and drive innovation.
//                   </p>
//                   <p className="text-xl leading-relaxed">
//                     With a BSc. in Computer Science and Engineering from Adama Science and Technology University, I've honed my skills in cutting-edge AI technologies and big data analytics. I'm particularly interested in natural language processing, computer vision, and predictive modeling.
//                   </p>
//                   <p className="text-xl leading-relaxed">
//                     When I'm not crunching numbers or building models, you can find me contributing to open-source projects, mentoring aspiring data scientists, or exploring the latest advancements in AI research.
//                   </p>
//                 </div>
                
//                 <div className="flex flex-wrap gap-4 pt-6">
//                   {['Machine Learning', 'Data Analysis', 'AI', 'Python', 'Deep Learning'].map((skill) => (
//                     <span 
//                       key={skill}
//                       className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



import React from 'react';
import { Download, Brain, Database, Code, ChevronRight } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Machine Learning', icon: Brain },
    { name: 'Data Analysis', icon: Database },
    { name: 'AI', icon: Brain },
    { name: 'Python', icon: Code },
    { name: 'Deep Learning', icon: Brain }
  ];

  const experiences = [
    {
      title: 'Data Science Expertise',
      description: 'Passionate data scientist with 2+ years of experience in machine learning, statistical analysis, and data visualization. Specialized in developing AI-driven solutions for complex business challenges.'
    },
    {
      title: 'Educational Background',
      description: 'BSc. in Computer Science and Engineering from Adama Science and Technology University, with focus on AI technologies and big data analytics.'
    },
    {
      title: 'Areas of Interest',
      description: 'Deeply invested in natural language processing, computer vision, and predictive modeling. Active contributor to open-source projects and mentor to aspiring data scientists.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transforming data into actionable insights and driving innovation through AI
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">{exp.title}</h3>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Expertise</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {skills.map((skill, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-2 p-3 bg-indigo-50 rounded-lg group hover:bg-indigo-100 transition-colors duration-300"
                    >
                      <skill.icon className="w-5 h-5 text-indigo-600" />
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-1/3 flex justify-center">
                <a 
                  href="/Ofgeha-Gelana-CV.pdf" 
                  download
                  className="group flex items-center space-x-3 bg-indigo-600 text-white px-8 py-4 rounded-xl hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Download className="w-5 h-5" />
                  <span className="font-medium">Download CV</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
            <p className="text-lg md:text-xl text-center font-medium">
              "Dedicated to leveraging AI and data science to create impactful solutions that drive business success"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
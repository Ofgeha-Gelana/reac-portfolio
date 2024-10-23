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


import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-600">About Me</h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
          <img 
            src="https://picsum.photos/800" 
            alt="Your Name" 
            className="w-40 h-40 rounded-full mb-6 md:mb-0 md:mr-6"
          />
          <div className="md:ml-8">
            <p className="text-lg text-gray-700 mb-6">
              I'm a passionate data scientist with 2+ years of experience in machine learning, statistical analysis, and data visualization. My expertise lies in developing AI-driven solutions that solve complex business problems and drive innovation.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With a BSc. in Computer Science and Engineering from Adama Science and Technology University, I've honed my skills in cutting-edge AI technologies and big data analytics. I'm particularly interested in natural language processing, computer vision, and predictive modeling.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              When I'm not crunching numbers or building models, you can find me contributing to open-source projects, mentoring aspiring data scientists, or exploring the latest advancements in AI research.
            </p>
            <a 
              href="/Resume.pdf" 
              download
              className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

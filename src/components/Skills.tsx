// import React from 'react';
// import { Code, Database, BarChart, Server, Wrench, Brain } from 'lucide-react';

// const skillsData = [
//   { category: 'Programming Languages', items: ['Python', 'R', 'SQL'], icon: Code },
//   { category: 'Machine Learning', items: ['TensorFlow', 'PyTorch', 'Scikit-learn'], icon: Brain },
//   { category: 'Data Visualization', items: ['Matplotlib', 'Seaborn', 'Plotly'], icon: BarChart },
//   { category: 'Big Data', items: ['Hadoop', 'Spark', 'Hive'], icon: Server },
//   { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Cassandra'], icon: Database },
//   { category: 'Tools', items: ['Jupyter', 'Git', 'Docker'], icon: Wrench },
// ];

// const Skills: React.FC = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {skillsData.map((skill) => (
//         <div key={skill.category} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
//           <div className="flex items-center mb-4">
//             <skill.icon className="w-6 h-6 mr-3 text-blue-500" />
//             <h3 className="text-xl font-semibold">{skill.category}</h3>
//           </div>
//           <ul className="space-y-2">
//             {skill.items.map((item) => (
//               <li key={item} className="flex items-center">
//                 <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Skills;




// import React from 'react';
// import { Code, Database, BarChart, Server, Wrench, Brain } from 'lucide-react';

// const skillsData = [
//   { category: 'Programming Languages', items: ['Python', 'R', 'SQL'], icon: Code },
//   { category: 'Machine Learning', items: ['TensorFlow', 'PyTorch', 'Scikit-learn'], icon: Brain },
//   { category: 'Data Visualization', items: ['Matplotlib', 'Seaborn', 'Plotly'], icon: BarChart },
//   { category: 'Big Data', items: ['Hadoop', 'Spark', 'Hive'], icon: Server },
//   { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Cassandra'], icon: Database },
//   { category: 'Tools', items: ['Jupyter', 'Git', 'Docker'], icon: Wrench },
// ];

// const Skills: React.FC = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       {/* Centered Grid with limited width */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {skillsData.map((skill) => (
//           <div
//             key={skill.category}
//             className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
//           >
//             <div className="flex items-center mb-4">
//               <skill.icon className="w-6 h-6 mr-3 text-blue-500" />
//               <h3 className="text-xl font-semibold">{skill.category}</h3>
//             </div>
//             <ul className="space-y-2">
//               {skill.items.map((item) => (
//                 <li key={item} className="flex items-center">
//                   <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;




// import React from 'react';
// import { Code, Database, BarChart, Brain } from 'lucide-react';

// // SkillCard Component
// const SkillCard: React.FC<{ icon: React.ReactNode; skill: string; description: string }> = ({
//   icon,
//   skill,
//   description,
// }) => {
//   return (
//     <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105">
//       <div className="flex justify-center items-center mb-4">
//         {icon}
//       </div>
//       <h3 className="text-xl font-semibold mb-2">{skill}</h3>
//       <p className="text-gray-600 dark:text-gray-300">{description}</p>
//     </div>
//   );
// };

// // Skills Section Component
// const Skills: React.FC = () => {
//   return (
//     <section id="skills" className="mb-16">
//       <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         <SkillCard
//           icon={<Database className="w-6 h-6" />}
//           skill="Data Analysis"
//           description="Python, R, SQL"
//         />
//         <SkillCard
//           icon={<BarChart className="w-6 h-6" />}
//           skill="Data Visualization"
//           description="Tableau, D3.js, Matplotlib"
//         />
//         <SkillCard
//           icon={<Brain className="w-6 h-6" />}
//           skill="Machine Learning"
//           description="TensorFlow, PyTorch, scikit-learn"
//         />
//         <SkillCard
//           icon={<Code className="w-6 h-6" />}
//           skill="Programming"
//           description="Python, R, Java, C++"
//         />
//       </div>
//     </section>
//   );
// };

// export default Skills;



// import React from 'react';
// import { Code, Database, BarChart, Server, Wrench, Brain } from 'lucide-react';

// // Skills Data
// const skillsData = [
//   { category: 'Programming Languages', items: ['Python', 'R', 'SQL'], icon: Code },
//   { category: 'Machine Learning', items: ['TensorFlow', 'PyTorch', 'Scikit-learn'], icon: Brain },
//   { category: 'Data Visualization', items: ['Matplotlib', 'Seaborn', 'Plotly'], icon: BarChart },
//   { category: 'Big Data', items: ['Hadoop', 'Spark', 'Hive'], icon: Server },
//   { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Cassandra'], icon: Database },
//   { category: 'Tools', items: ['Jupyter', 'Git', 'Docker'], icon: Wrench },
// ];

// // SkillCard Component
// const SkillCard: React.FC<{ icon: React.ReactNode; skill: string; description: string }> = ({
//   icon,
//   skill,
//   description,
// }) => {
//   return (
//     <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105">
//       <div className="flex justify-center items-center mb-4">
//         {icon}
//       </div>
//       <h3 className="text-xl font-semibold mb-2">{skill}</h3>
//       <p className="text-gray-600 dark:text-gray-300">{description}</p>
//     </div>
//   );
// };

// // Skills Section Component
// const Skills: React.FC = () => {
//   return (
//     <section id="skills" className="mb-16">
//       <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Added max width and centering */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {skillsData.map((skill) => (
//             <SkillCard
//                 key={skill.category}
//                 icon={<skill.icon className="w-6 h-6 text-blue-500" />} // Use your color preference
//                 skill={skill.category}
//                 description={skill.items.join(', ')} // Combine items into a string
//             />
            
//         ))}
//       </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;




import React from 'react';
import { Code, Database, BarChart, Server, Wrench, Brain } from 'lucide-react';

// Skills Data
const skillsData = [
  { category: 'Programming Languages', items: ['Python', 'R', 'SQL'], icon: Code },
  { category: 'Machine Learning', items: ['TensorFlow', 'PyTorch', 'Scikit-learn'], icon: Brain },
  { category: 'Data Visualization', items: ['Matplotlib', 'Seaborn', 'Plotly'], icon: BarChart },
  { category: 'Big Data', items: ['Hadoop', 'Spark', 'Hive'], icon: Server },
  { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Cassandra'], icon: Database },
  { category: 'Tools', items: ['Jupyter', 'Git', 'Docker'], icon: Wrench },
];

// SkillCard Component
const SkillCard: React.FC<{ icon: React.ReactNode; skill: string; description: string }> = ({
  icon,
  skill,
  description,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105">
      <div className="flex justify-center items-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{skill}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

// Skills Section Component
const Skills: React.FC = () => {
  return (
    <section id="skills" className="section mb-16 pt-16"> {/* Added section class */}
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill) => (
            <SkillCard
              key={skill.category}
              icon={<skill.icon className="w-6 h-6 text-blue-500" />}
              skill={skill.category}
              description={skill.items.join(', ')}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

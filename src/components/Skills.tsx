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
//     <section id="skills" className="section mb-16 pt-16"> {/* Added section class */}
//       <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {skillsData.map((skill) => (
//             <SkillCard
//               key={skill.category}
//               icon={<skill.icon className="w-6 h-6 text-blue-500" />}
//               skill={skill.category}
//               description={skill.items.join(', ')}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;




import React from 'react';
import { Code, Database, BarChart, Server, Wrench, Brain } from 'lucide-react';

const skillsData = [
  {
    category: 'Programming Languages',
    items: ['Python', 'R', 'SQL', 'JavaScript', 'TypeScript'],
    icon: Code
  },
  {
    category: 'Machine Learning',
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'XGBoost'],
    icon: Brain
  },
  {
    category: 'Data Visualization',
    items: ['Matplotlib', 'Seaborn', 'Plotly', 'D3.js', 'Tableau'],
    icon: BarChart
  },
  {
    category: 'Big Data',
    items: ['Hadoop', 'Spark', 'Hive', 'Kafka', 'Airflow'],
    icon: Server
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Cassandra', 'Redis', 'MySQL'],
    icon: Database
  },
  {
    category: 'Tools & Platforms',
    items: ['Jupyter', 'Git', 'Docker', 'AWS', 'Azure'],
    icon: Wrench
  }
];

const SkillCard = ({ icon: Icon, category, items }) => (
  <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl">
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 bg-blue-50 rounded-xl">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-800">{category}</h3>
    </div>
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <span
          key={item}
          className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors duration-200"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-5xl font-bold text-blue-600 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 text-center max-w-3xl">
            Leveraging cutting-edge technologies and frameworks to build innovative data-driven solutions
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((skill) => (
              <SkillCard
                key={skill.category}
                icon={skill.icon}
                category={skill.category}
                items={skill.items}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

import myPhoto from "../assets/images/best1.png";
import myPhoto1 from "../assets/images/best2.png";
import myPhoto2 from "../assets/images/best3.png";


const projects = [
  {
    id: 1,
    title: 'Customer Churn Prediction',
    description: 'Developed a machine learning model to predict customer churn for a telecom company, improving retention strategies.',
    image: myPhoto,
    tags: ['Python', 'Scikit-learn', 'Pandas'],
    liveLink: 'https://example.com/churn-prediction',
    githubLink: 'https://github.com/yourusername/churn-prediction',
  },
  {
    id: 2,
    title: 'Stock Market Forecasting',
    description: 'Created a time series forecasting model for stock price prediction using LSTM neural networks.',
    image: myPhoto1,
    tags: ['Python', 'TensorFlow', 'Keras'],
    liveLink: 'https://example.com/stock-forecast',
    githubLink: 'https://github.com/yourusername/stock-forecast',
  },
  {
    id: 3,
    title: 'COVID-19 Data Dashboard',
    description: 'Built an interactive dashboard for visualizing COVID-19 statistics using Plotly and Dash.',
    image: myPhoto2,
    tags: ['Python', 'Plotly', 'Dash'],
    liveLink: 'https://example.com/covid-dashboard',
    githubLink: 'https://github.com/yourusername/covid-dashboard',
  },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="flex justify-center mb-8">
          <button 
            onClick={() => setFilter('All')} 
            className={`mx-2 px-4 py-2 rounded ${filter === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('Python')} 
            className={`mx-2 px-4 py-2 rounded ${filter === 'Python' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Python
          </button>
          <button 
            onClick={() => setFilter('TensorFlow')} 
            className={`mx-2 px-4 py-2 rounded ${filter === 'TensorFlow' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            TensorFlow
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm mr-2 mb-2">{tag}</span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 flex items-center">
                    <ExternalLink size={20} className="mr-1" /> Live Demo
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-600 flex items-center">
                    <Github size={20} className="mr-1" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


// import React from 'react';

// // Define the type for the props
// interface ProjectCardProps {
//   title: string;
//   description: string;
//   image: string;
//   tags: string[];
// }

// // Use the defined type in the component
// const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tags }) => (
//   <div className="bg-white rounded-lg shadow-md overflow-hidden">
//     <img src={image} alt={title} className="w-full h-48 object-cover" />
//     <div className="p-6">
//       <h3 className="text-xl font-semibold mb-2">{title}</h3>
//       <p className="text-gray-600 mb-4">{description}</p>
//       <div className="flex flex-wrap gap-2">
//         {tags.map((tag, index) => (
//           <span key={index} className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">
//             {tag}
//           </span>
//         ))}
//       </div>
//     </div>
//   </div>
// );

// const Projects = () => {
//   const projects = [
//     {
//       title: "Predictive Maintenance System",
//       description: "Developed an AI-powered predictive maintenance system for industrial equipment, reducing downtime by 30%.",
//       image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       tags: ["Machine Learning", "IoT", "Python", "TensorFlow"]
//     },
//     {
//       title: "Natural Language Processing for Customer Support",
//       description: "Built an NLP model to automate customer support inquiries, improving response time by 50%.",
//       image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       tags: ["NLP", "BERT", "Python", "PyTorch"]
//     },
//     {
//       title: "Financial Fraud Detection",
//       description: "Created a real-time fraud detection system for a major bank, identifying suspicious transactions with 99% accuracy.",
//       image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       tags: ["Anomaly Detection", "Big Data", "Apache Spark", "Scala"]
//     }
    
//   ];

//   return (
//     <section id="projects" className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <ProjectCard key={index} {...project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="text-center">
        <img src="https://source.unsplash.com/random/200x200?portrait" alt="Your Name" className="rounded-full w-32 h-32 object-cover mx-auto mb-4" />
        <h1 className="text-5xl font-bold mb-4">Ofgeha Gelana</h1>
        <h2 className="text-3xl text-gray-600 dark:text-gray-300 mb-6">Data Scientist</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Passionate about leveraging data to drive insights and solve complex problems.</p>
        <div className="space-x-4">
          <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            View My Projects
          </a>
          <a href="/path-to-your-resume.pdf" download className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-2 px-4 rounded transition duration-300">
            Download Resume <Download className="inline-block ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
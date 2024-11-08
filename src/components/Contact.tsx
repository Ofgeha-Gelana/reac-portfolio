// import React, { useState } from 'react';
// import { Mail, Phone, MapPin } from 'lucide-react';

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Here you would typically send the form data to a server
//     console.log('Form submitted:', formData);
//     // Reset form after submission
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <section id="contact" className="py-20 bg-white dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
//         <div className="flex flex-col md:flex-row justify-between">
//           <div className="md:w-1/2 mb-8 md:mb-0">
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Message</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={4}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 ></textarea>
//               </div>
//               <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
//                 Send Message
//               </button>
//             </form>
//           </div>
//           <div className="md:w-1/3">
//             <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
//             <div className="space-y-4">
//               <p className="flex items-center">
//                 <Mail className="mr-2" size={20} />
//                 <a href="mailto:your.email@example.com" className="hover:text-blue-500">ofgehagelana@gmail.com</a>
//               </p>
//               <p className="flex items-center">
//                 <Phone className="mr-2" size={20} />
//                 <a href="tel:+1234567890" className="hover:text-blue-500">+2519 (35) 070773</a>
//               </p>
//               <p className="flex items-center">
//                 <MapPin className="mr-2" size={20} />
//                 Addis Ababa, Ethiopia
//               </p>
//             </div>
//             <div className="mt-8">
//               <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
//               <div className="flex space-x-4">
//                 <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
//                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
//                   </svg>
//                 </a>
//                 <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
//                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
//                   </svg>
//                 </a>
//                 <a href="https://kaggle.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
//                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path d="M17.5 10.5c-.3-.3-.7-.3-1 0l-2.8 2.8-2.8-2.8c-.3-.3-.7-.3-1 0-.3.3-.3.7 0 1l2.8 2.8-2.8 2.8c-.3.3-.3.7 0 1 .1.1.3.2.5.2s.4-.1.5-.2l2.8-2.8 2.8 2.8c.1.1.3.2.5.2s.4-.1.5-.2c.3-.3.3-.7 0-1l-2.8-2.8 2.8-2.8c.3-.3.3-.7 0-1z"/>
//                     <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactDetails = [
    {
      icon: Mail,
      text: 'ofgehagelana@gmail.com',
      href: 'mailto:ofgehagelana@gmail.com',
      label: 'Email'
    },
    {
      icon: Phone,
      text: '+2519 (35) 070773',
      href: 'tel:+251935070773',
      label: 'Phone'
    },
    {
      icon: MapPin,
      text: 'Addis Ababa, Ethiopia',
      label: 'Location'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Ofgeha-Gelana?tab=repositories',
      label: 'GitHub',
      color: 'hover:bg-gray-700'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/ofgeha-gelana/',
      label: 'LinkedIn',
      color: 'hover:bg-blue-700'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Details</h3>
                <div className="space-y-6">
                  {contactDetails.map((detail, index) => (
                    <div key={index} className="group flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300">
                      <div className="p-3 bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition-colors duration-300">
                        <detail.icon className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">{detail.label}</p>
                        {detail.href ? (
                          <a 
                            href={detail.href}
                            className="text-gray-800 hover:text-indigo-600 font-medium transition-colors duration-300 flex items-center"
                          >
                            {detail.text}
                            <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </a>
                        ) : (
                          <span className="text-gray-800 font-medium">{detail.text}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Social Profiles</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-3 p-4 rounded-lg bg-gray-50 hover:bg-indigo-600 group transition-all duration-300 ${social.color}`}
                    >
                      <div className="p-2 bg-white rounded-lg group-hover:bg-opacity-10 transition-colors duration-300">
                        <social.icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="font-medium text-gray-800 group-hover:text-white transition-colors duration-300">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg mt-8">
                  <p className="text-gray-600 text-center">
                    Available for data science projects and collaborations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
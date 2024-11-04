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


import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactDetails = [
    {
      icon: Mail,
      text: 'ofgehagelana@gmail.com',
      href: 'mailto:ofgehagelana@gmail.com'
    },
    {
      icon: Phone,
      text: '+2519 (35) 070773',
      href: 'tel:+251935070773'
    },
    {
      icon: MapPin,
      text: 'Addis Ababa, Ethiopia',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/ofgeha',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/ofgeha',
      label: 'LinkedIn'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-5xl font-bold text-blue-600 mb-4">Get in Touch</h2>
          <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 text-center max-w-3xl">
            Let's connect and discuss how we can work together on your next data science project
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Contact Form */}
              <div className="lg:w-2/3 p-8 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-200 font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="lg:w-1/3 bg-blue-50 p-8 lg:p-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      {contactDetails.map((detail, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <detail.icon className="w-5 h-5 text-blue-600" />
                          {detail.href ? (
                            <a 
                              href={detail.href}
                              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                            >
                              {detail.text}
                            </a>
                          ) : (
                            <span className="text-gray-600">{detail.text}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Connect With Me</h3>
                    <div className="flex space-x-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white rounded-lg hover:bg-blue-100 transition-colors duration-200"
                          aria-label={social.label}
                        >
                          <social.icon className="w-6 h-6 text-blue-600" />
                        </a>
                      ))}
                    </div>
                  </div>
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
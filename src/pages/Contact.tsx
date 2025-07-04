import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, LinkedinIcon, GithubIcon } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:nik.sodavaram@outlook.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
  };

  return (
    <div className="relative top-[80px] min-h-screen bg-slate-100 dark:bg-slate-900 p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto pt-12"
      >
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-slate-600 dark:text-slate-400 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Let's connect and discuss how we can work together
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">Contact Information</h2>

              <div className="space-y-6">
                <motion.a
                  href="tel:+61452342206"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 
                           hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20">
                    <Phone className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Phone</p>
                    <p className="text-lg text-slate-900 dark:text-white">+61 452 342 206</p>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:nik.sodavaram@outlook.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 
                           hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20">
                    <Mail className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                    <p className="text-lg text-slate-900 dark:text-white">nik.sodavaram@outlook.com</p>
                  </div>
                </motion.a>

                <div className="flex gap-4 pt-6">
                  <motion.a
                    href="#linkedin"
                    className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg 
                             hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    whileHover={{ y: -5 }}
                  >
                    <LinkedinIcon className="w-6 h-6 text-slate-900 dark:text-white" />
                  </motion.a>
                  <motion.a
                    href="#github"
                    className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg 
                             hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    whileHover={{ y: -5 }}
                  >
                    <GithubIcon className="w-6 h-6 text-slate-900 dark:text-white" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50 
                             border border-slate-200 dark:border-slate-600
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent
                             text-slate-900 dark:text-white placeholder-slate-400
                             transition-all duration-200"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50 
                             border border-slate-200 dark:border-slate-600
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent
                             text-slate-900 dark:text-white placeholder-slate-400
                             transition-all duration-200"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter subject"
                    className="w-full p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50 
                             border border-slate-200 dark:border-slate-600
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent
                             text-slate-900 dark:text-white placeholder-slate-400
                             transition-all duration-200"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Enter your message"
                    className="w-full p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50 
                             border border-slate-200 dark:border-slate-600
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent
                             text-slate-900 dark:text-white placeholder-slate-400
                             transition-all duration-200 resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full p-4 bg-blue-500 hover:bg-blue-600 
                           rounded-lg font-medium text-white
                           transition-colors duration-200
                           flex items-center justify-center gap-2
                           focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                           dark:focus:ring-offset-slate-800"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
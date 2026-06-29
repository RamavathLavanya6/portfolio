'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaCheck } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate API call for premium experience
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Auto-reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }, 1800);
  };

  return (
    <section id="contact" className="py-[clamp(5rem,8vw,8rem)] px-[clamp(1.4rem,4vw,4rem)] bg-ink relative overflow-hidden">
      {/* Sci-Fi grid background lines or top border gradient */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      
      <div className="absolute inset-0 z-[0] overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -bottom-20 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[800px] mx-auto text-center relative z-10">
        
        {/* Title label */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[0.7rem] tracking-[0.3em] font-medium uppercase text-blue-400 flex items-center justify-center gap-4 mb-12"
        >
          <div className="w-12 h-[2px] bg-blue-500/50 shrink-0" />
          <span>07. CONTACT</span>
          <div className="w-12 h-[2px] bg-blue-500/50 shrink-0" />
        </motion.div>

        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-[1.1] text-white mb-6 tracking-tight"
        >
          Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">extraordinary</span> together.
        </motion.h2>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[1.05rem] leading-[1.8] text-slate-400 max-w-[620px] mx-auto mb-12"
        >
          Whether you have an exciting project, collaboration opportunity, or simply want to connect, I'd love to hear from you.
        </motion.p>

        {/* Premium Rounded Social Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a 
            href="https://github.com/RamavathLavanya6/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/40 text-slate-200 hover:text-white transition-all duration-300 shadow-md hover:scale-105 cursor-pointer"
          >
            <FaGithub size={18} className="text-slate-400 group-hover:text-white" />
            <span className="text-xs font-semibold tracking-wider uppercase">GitHub</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/lavanyramavath" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/40 text-slate-200 hover:text-white transition-all duration-300 shadow-md hover:scale-105 cursor-pointer"
          >
            <FaLinkedin size={18} className="text-[#0A66C2]" />
            <span className="text-xs font-semibold tracking-wider uppercase">LinkedIn</span>
          </a>

          <a 
            href="mailto:lavanyaramavath0628@gmail.com"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/40 text-slate-200 hover:text-white transition-all duration-300 shadow-md hover:scale-105 cursor-pointer"
          >
            <FaEnvelope size={18} className="text-blue-400" />
            <span className="text-xs font-semibold tracking-wider uppercase">Email</span>
          </a>
        </motion.div>

        {/* Luxury Glassmorphism Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-xl mx-auto bg-slate-900/30 backdrop-blur-md border border-slate-800/80 p-8 md:p-10 rounded-2xl shadow-2xl relative"
        >
          {/* Internal gradients for depth */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none rounded-2xl" />
          
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form 
                key="form"
                onSubmit={handleSubmit} 
                className="space-y-6 text-left relative z-10"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[0.7rem] uppercase tracking-wider text-slate-400 font-semibold mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your Name"
                      className="w-full bg-slate-950/60 border border-slate-800/80 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 transition-all outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[0.7rem] uppercase tracking-wider text-slate-400 font-semibold mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your.email@example.com"
                      className="w-full bg-slate-950/60 border border-slate-800/80 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 transition-all outline-none text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[0.7rem] uppercase tracking-wider text-slate-400 font-semibold mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    placeholder="What is this about?"
                    className="w-full bg-slate-950/60 border border-slate-800/80 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 transition-all outline-none text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[0.7rem] uppercase tracking-wider text-slate-400 font-semibold mb-2">Message</label>
                  <textarea 
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Your message details here..."
                    className="w-full bg-slate-950/60 border border-slate-800/80 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 transition-all outline-none text-sm resize-none"
                  />
                </div>

                {/* Submit button */}
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold tracking-[0.25em] uppercase text-xs rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="py-12 flex flex-col items-center justify-center text-center relative z-10"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                  <FaCheck size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400 text-sm max-w-sm">
                  Thank you for reaching out. I'll get back to you as soon as possible!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Footer info links */}
        <div className="mt-20 pt-10 border-t border-slate-800/80 flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-[0.7rem] tracking-[0.2em] font-medium uppercase text-slate-500">
            <a href="mailto:lavanyaramavath0628@gmail.com" className="hover:text-blue-400 transition-colors cursor-pointer">lavanyaramavath0628@gmail.com</a>
            <span className="hidden md:inline">&mdash;</span>
            <span>+91 628 119 3820</span>
          </div>
        </div>

      </div>
    </section>
  );
}

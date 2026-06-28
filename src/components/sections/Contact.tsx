'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTimes, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className="py-[clamp(5rem,8vw,8rem)] px-[clamp(1.4rem,4vw,4rem)] bg-[#0B1120] relative">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="max-w-[1000px] mx-auto text-center">
        
        <div className="text-[0.7rem] tracking-[0.3em] font-medium uppercase text-blue-400 flex items-center justify-center gap-4 mb-12">
          <div className="w-12 h-[2px] bg-blue-500/50 shrink-0" />
          <span>06. CONTACT</span>
          <div className="w-12 h-[2px] bg-blue-500/50 shrink-0" />
        </div>

        <h2 className="text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[1.1] text-white mb-8 tracking-tight">
          Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">remarkable</span> together.
        </h2>

        <p className="text-[1.05rem] leading-[1.8] text-slate-400 max-w-[600px] mx-auto mb-16">
          I'm currently seeking new opportunities and challenges. Whether you have a question or just want to say hi, my inbox is always open.
        </p>

        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(59,130,246,0.5)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
          className="inline-block px-12 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-[0.8rem] tracking-[0.25em] uppercase font-bold hover:opacity-90 transition-all duration-300 cursor-pointer mb-20 rounded-lg shadow-lg"
        >
          Catch Me
        </motion.button>

        <AnimatePresence>
          {isModalOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#0B1120] border border-slate-700/50 p-8 md:p-12 rounded-2xl shadow-[0_0_40px_rgba(59,130,246,0.2)] max-w-md w-full relative overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
                
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                >
                  <FaTimes size={24} />
                </button>

                <h3 className="text-3xl font-bold text-white mb-2">Catch Me</h3>
                <p className="text-slate-400 mb-8 text-sm">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
                
                <div className="space-y-4 text-left">
                  <a href="mailto:lavanyaramavath0628@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all group">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FaEnvelope />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Email</div>
                      <div className="text-white text-sm">lavanyaramavath0628@gmail.com</div>
                    </div>
                  </a>
                  
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all group">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FaLinkedin />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">LinkedIn</div>
                      <div className="text-white text-sm">Connect with me</div>
                    </div>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-slate-800 gap-8">
          <div className="flex gap-8">
            <a href="https://github.com/RamavathLavanya6/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors text-xl cursor-pointer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors text-xl cursor-pointer">
              <FaLinkedin />
            </a>
            <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors font-bold text-sm uppercase tracking-wider cursor-pointer">
              LeetCode
            </a>
          </div>

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

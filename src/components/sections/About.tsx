'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-[clamp(3.5rem,5vw,5rem)] px-[clamp(1.4rem,4vw,4rem)] bg-ink-2">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Label */}
        <div className="text-[0.7rem] tracking-[0.3em] font-medium uppercase text-blue-400 flex items-center gap-4 mb-16">
          <div className="w-12 h-[2px] bg-blue-500/50 shrink-0" />
          <span>01. BACKGROUND</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-[clamp(3rem,5vw,6rem)] items-start">
          
          {/* Left: Image Panel */}
          <div className="relative lg:sticky lg:top-28 block w-full max-w-sm mx-auto lg:mx-0">
            {/* The Image Frame */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/5] bg-slate-900/50 backdrop-blur-md border border-slate-700/50 overflow-hidden flex items-end justify-center shadow-[0_0_30px_rgba(59,130,246,0.1)] rounded-xl"
              style={{ perspective: 1000 }}
            >
              {/* Corner Accents */}
              <div className="absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2 border-blue-500/50 z-10 pointer-events-none rounded-tl-lg" />
              <div className="absolute bottom-3 right-3 w-10 h-10 border-b-2 border-r-2 border-blue-500/50 z-10 pointer-events-none rounded-br-lg" />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(59,130,246,0.1)_0%,transparent_55%)] z-10 pointer-events-none" />
              
              {/* Profile Picture */}
              <img 
                src="/portfolio/about-pic.jpeg" 
                alt="Lavanya Ramavath" 
                className="w-full h-full object-cover object-top relative z-0 opacity-90 grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>

            {/* Decorative Offset Frame Line */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-blue-500/20 z-0 pointer-events-none hidden md:block rounded-xl" />

            {/* Floating Location Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-4 -left-6 bg-slate-900/90 backdrop-blur-md border border-slate-700 py-3 px-5 z-20 flex items-center gap-3 rounded-lg shadow-lg"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)] animate-pulse" />
              <span className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-slate-300">Hyderabad</span>
            </motion.div>

            {/* Floating Availability Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute top-6 -right-6 bg-slate-900/90 backdrop-blur-md border border-slate-700 py-3 px-5 z-20 text-center rounded-lg shadow-lg"
            >
              <span className="block text-[0.55rem] font-medium tracking-[0.3em] uppercase text-slate-400 mb-1">Status</span>
              <span className="block font-bold text-[0.85rem] tracking-wide text-green-400">Open to Work</span>
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="pt-8 lg:pt-0">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.1] text-white mb-8 tracking-tight"
            >
              Translating data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">insights</span> and building intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">solutions</span>.
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[1.05rem] leading-[1.9] text-muted space-y-6"
            >
              <p>
                I am a detail-oriented and motivated <strong className="font-normal text-cream-2">AI/ML professional</strong> with hands-on experience in machine learning, data analysis, and visualization. 
              </p>
              <p>
                Currently pursuing a <strong className="font-normal text-cream-2">B.Tech in CSE (AI & ML)</strong> at St. Martin's Engineering College, I am proficient in building predictive models, end-to-end ML solutions, and interactive dashboards.
              </p>
              <p>
                Whether it's detecting malicious bots, analyzing Netflix viewership trends, or predicting loan risks, my goal is to leverage robust analytics and <strong className="font-normal text-cream-2">data-driven decision making</strong> to solve complex problems.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-12 mt-10 pt-10 border-t border-slate-700/50"
            >
              <div className="flex flex-col gap-1">
                <span className="text-[2.5rem] font-bold text-blue-400">8.35</span>
                <span className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-slate-400">B.Tech GPA</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[2.5rem] font-bold text-purple-400">6+</span>
                <span className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-slate-400">Certifications</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[2.5rem] font-bold text-cyan-400">3+</span>
                <span className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-slate-400">ML Projects</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

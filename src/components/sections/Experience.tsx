'use client';

import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const EXPERIENCES = [
  {
    role: "Artificial Intelligence Intern",
    company: "Ediglobe",
    duration: "2025",
    description: "Completed an intensive internship program focusing on Artificial Intelligence and Machine Learning technologies. Applied theoretical knowledge to practical projects and gained hands-on experience in the field.",
    tags: ["AI", "Machine Learning", "Python"],
    certificate: "/portfolio/edi-internship.jpeg"
  },
  {
    role: "Machine Learning Intern",
    company: "Detecting Malicious Twitter Bots Using Machine Learning",
    duration: "Sept 2025 - Nov 2025",
    description: "Developed a robust machine learning model to detect and classify malicious Twitter bots by analyzing user behavior patterns, tweet frequencies, and account metadata. Leveraged NLP and classification algorithms to achieve high detection accuracy.",
    tags: ["Python", "Scikit-learn", "NLP", "Pandas", "Matplotlib"]
  },
  {
    role: "B.Tech in Computer Science (AI & ML)",
    company: "St. Martin's Engineering College, Hyderabad",
    duration: "2022 - 2026",
    description: "Pursuing specialized coursework in Artificial Intelligence, Machine Learning, Data Structures, and Database Management. Consistently maintaining an academic record of 8.35 CGPA.",
    tags: ["Academics", "AI Specialization"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-[clamp(4rem,6vw,6rem)] px-[clamp(1.4rem,4vw,4rem)] bg-[#0B1120] border-t border-slate-800/50">
      <div className="max-w-[1000px] mx-auto">
        
        <div className="text-[0.7rem] tracking-[0.3em] font-medium uppercase text-blue-400 flex items-center gap-4 mb-16">
          <div className="w-12 h-[2px] bg-blue-500/50 shrink-0" />
          <span>04. TIMELINE</span>
        </div>

        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.1] text-white mb-[clamp(4rem,6vw,6rem)] tracking-tight">
          Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Education</span>.
        </h2>

        <div className="relative pl-6 md:pl-0">
          
          <div className="absolute top-0 bottom-0 left-[23px] md:left-[50%] w-[2px] bg-slate-800 -translate-x-1/2" />

          <div className="space-y-24">
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} gap-8 md:gap-16`}
                >
                  <div className="absolute left-[23px] md:left-[50%] top-2 w-4 h-4 rounded-full bg-[#0B1120] border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] -translate-x-1/2 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                  </div>

                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                    <span className="text-[0.75rem] font-bold tracking-[0.2em] uppercase text-blue-400 block mb-3">
                      {exp.duration}
                    </span>
                    <h3 className="text-[1.5rem] font-bold text-white mb-2 tracking-tight">
                      {exp.role}
                    </h3>
                    <h4 className="text-[0.85rem] font-medium tracking-[0.1em] uppercase text-slate-400 mb-6">
                      {exp.company}
                    </h4>
                    <p className="text-[1.05rem] leading-[1.8] text-slate-400 mb-6">
                      {exp.description}
                    </p>
                    <div className={`flex flex-wrap gap-2 ${isEven ? 'justify-start' : 'md:justify-end'}`}>
                      {exp.tags.map(tag => (
                        <span key={tag} className="text-[0.7rem] font-medium tracking-[0.1em] uppercase text-slate-300 border border-slate-700 px-3 py-1 bg-slate-900/50 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {(exp as any).certificate && (
                      <a 
                        href={(exp as any).certificate} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`inline-flex items-center gap-2 mt-6 text-[0.8rem] font-bold tracking-[0.1em] uppercase text-blue-400 hover:text-blue-300 transition-colors ${isEven ? 'justify-start' : 'md:justify-end md:w-full'}`}
                      >
                        <FaExternalLinkAlt /> View Certificate
                      </a>
                    )}
                  </div>

                  <div className="hidden md:block w-1/2" />

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

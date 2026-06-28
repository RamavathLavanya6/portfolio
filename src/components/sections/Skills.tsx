'use client';

import { motion } from 'framer-motion';

const SKILLS = [
  { category: 'Programming Languages', items: ['Python', 'SQL (Postgres, MS-SQL)', 'Java'] },
  { category: 'Analytics & Visualization', items: ['Power BI', 'Tableau', 'Excel'] },
  { category: 'Machine Learning', items: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'NLP'] },
  { category: 'Tools & Platforms', items: ['Git', 'GitHub', 'VS Code', 'PyCharm', 'Jupyter Notebook'] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-[clamp(4rem,6vw,6rem)] px-[clamp(1.4rem,4vw,4rem)] bg-[#0B1120] relative">
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div>
            <div className="text-[0.7rem] tracking-[0.3em] uppercase text-blue-400 font-medium flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-blue-500/50 shrink-0" />
              <span>02. EXPERTISE</span>
            </div>
            
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.1] text-white max-w-[600px] tracking-tight">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Proficiencies</span>.
            </h2>
          </div>
          
          <p className="text-[1.05rem] leading-[1.8] text-slate-400 max-w-[400px]">
            A curated set of tools and technologies I utilize to build scalable analytics and intelligent models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {SKILLS.map((skillGroup, idx) => (
            <motion.div 
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="relative"
            >
              <h3 className="text-[1.5rem] font-bold text-white mb-6 flex items-center gap-4">
                <span className="text-[0.7rem] font-sans tracking-[0.2em] font-medium uppercase text-blue-400 border border-blue-500/30 rounded-full px-4 py-1.5 bg-blue-500/10">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, i) => (
                  <motion.div
                    key={item}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="px-5 py-3 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 text-[0.9rem] font-medium tracking-wide text-slate-300 transition-all hover:border-blue-500 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] rounded-lg cursor-default"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

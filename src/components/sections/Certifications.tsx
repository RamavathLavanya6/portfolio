'use client';

import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaAward } from 'react-icons/fa';

const CERTIFICATES = [
  {
    id: 1,
    title: 'YUVA AI For All',
    issuer: 'TCSiON',
    date: 'Feb 2026',
    file: '/portfolio/tcsion.png',
  },
  {
    id: 2,
    title: 'Generative AI and CHATGPT',
    issuer: 'GEEKS FOR GEEKS',
    date: 'Jan 2025',
    file: '/portfolio/GFG.jpeg',
  },
  {
    id: 3,
    title: 'Ediglobe Certification',
    issuer: 'Ediglobe',
    date: '2025',
    file: '/portfolio/EDI.jpeg',
  },
  {
    id: 4,
    title: 'Cisco Certification',
    issuer: 'Cisco',
    date: '2025',
    file: '/portfolio/CIS.jpeg',
  },
  {
    id: 5,
    title: 'Scaler Certification',
    issuer: 'Scaler',
    date: '2025',
    file: '/portfolio/scaler.jpeg',
  },
  {
    id: 6,
    title: 'Tata Certification',
    issuer: 'Tata',
    date: '2025',
    file: '/portfolio/tata.jpeg',
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-[clamp(4rem,6vw,6rem)] px-[clamp(1.4rem,4vw,4rem)] bg-[#111827] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(59,130,246,0.05)_0%,transparent_100%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-[0.7rem] tracking-[0.3em] font-medium uppercase text-blue-400 flex items-center gap-4 mb-16">
          <div className="w-12 h-[2px] bg-blue-500/50 shrink-0" />
          <span>05. LEARNING AND GROWTH</span>
        </div>

        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.1] text-white mb-[clamp(3rem,5vw,5rem)] tracking-tight">
          Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Certifications</span>.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATES.map((cert, idx) => {
            const innerContent = (
              <>
                {/* Decorative Background Accent */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors duration-500 pointer-events-none" />
                
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-900 border border-blue-500/30 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 group-hover:border-blue-400 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-500">
                    <FaAward className="text-xl" />
                  </div>
                  {cert.file && (
                    <div className="text-slate-500 group-hover:text-blue-400 transition-colors duration-500">
                      <FaExternalLinkAlt />
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col relative z-10">
                  <span className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-slate-400 mb-3 block">
                    {cert.date} &mdash; <span className="text-blue-400">{cert.issuer}</span>
                  </span>
                  <h3 className="text-[1.4rem] font-bold text-white leading-snug group-hover:text-blue-300 transition-colors duration-500">
                    {cert.title}
                  </h3>
                </div>
              </>
            );

            const commonProps = {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-50px" },
              transition: { duration: 0.8, delay: idx * 0.1 },
              className: `group block bg-[#0B1120]/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] p-8 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden rounded-xl ${cert.file ? 'cursor-pointer' : 'cursor-default'}`
            };

            return cert.file ? (
              <motion.a key={cert.id} href={cert.file} target="_blank" rel="noopener noreferrer" {...commonProps as any}>
                {innerContent}
              </motion.a>
            ) : (
              <motion.div key={cert.id} {...commonProps as any}>
                {innerContent}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

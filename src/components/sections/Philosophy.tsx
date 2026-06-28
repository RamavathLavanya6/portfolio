'use client';

import { motion } from 'framer-motion';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-[clamp(5rem,8vw,8rem)] px-[clamp(1.4rem,4vw,4rem)] bg-[#0B1120] relative overflow-hidden">
      
      {/* Sci-Fi Background Blurs */}
      <div className="absolute inset-0 z-[0] overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[900px] mx-auto relative z-10 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-[0.7rem] tracking-[0.3em] font-medium uppercase text-blue-400 mb-8"
        >
          Philosophy
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[clamp(1.8rem,3.5vw,3rem)] font-bold leading-[1.3] text-white mb-8 tracking-tight"
        >
          <span className="block mb-2">Algorithms are just math.</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 block mb-2">Intelligence is knowing how to apply them.</span>
          <span className="block">I engineer solutions that drive real impact.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[1.1rem] text-slate-400 max-w-[750px] mx-auto mb-12 leading-[1.8]"
        >
          To me, data is more than just numbers on a screen—it is the blueprint for innovation. By combining advanced machine learning techniques with sharp business intelligence, I build systems that don't just answer questions, but anticipate them.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-[2px] h-[80px] bg-gradient-to-b from-blue-500 to-transparent mx-auto"
        />
        
      </div>
    </section>
  );
}

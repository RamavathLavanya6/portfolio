'use client';

import { motion } from 'framer-motion';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-[clamp(5rem,8vw,8rem)] px-[clamp(1.4rem,4vw,4rem)] bg-ink-2 relative overflow-hidden">
      
      {/* Sci-Fi Background Blurs */}
      <div className="absolute inset-0 z-[0] overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[850px] mx-auto relative z-10 text-center">
        
        {/* Title with thin gold line */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-amber-500" />
          <span className="text-[0.7rem] tracking-[0.3em] font-medium uppercase text-amber-500">06. PHILOSOPHY</span>
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-amber-500" />
        </motion.div>

        {/* Quote container with absolute quote mark behind */}
        <div className="relative mb-8">
          {/* Elegant quotation mark */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.15, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-cormorant text-[16rem] leading-none select-none pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 z-0 font-light text-amber-500"
          >
            “
          </motion.div>

          {/* Quote text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="font-cormorant italic font-light text-[clamp(1.3rem,2.5vw,2rem)] leading-relaxed text-slate-200 relative z-10 max-w-[750px] mx-auto px-4"
          >
            "I believe technology should simplify lives, not complicate them. My passion lies in building intelligent systems that transform data into meaningful decisions. Every machine learning model I create is guided by accuracy, transparency, and real-world impact—where innovation meets purpose, and every solution is designed to empower people."
          </motion.p>
        </div>

        {/* Author */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-amber-500 font-medium tracking-wider text-sm mt-6 font-cormorant"
        >
          — Lavanya Ramavath
        </motion.div>
        
      </div>
    </section>
  );
}

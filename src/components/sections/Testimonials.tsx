'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useState } from 'react';

const TESTIMONIALS = [
  {
    name: "Alex Johnson",
    role: "Product Manager, TechCorp",
    content: "Lavanya transformed our unstructured data into a beautiful, easy-to-understand Tableau dashboard. Her attention to detail and business acumen is outstanding.",
  },
  {
    name: "Sarah Williams",
    role: "CEO, StartUp Inc",
    content: "Working with Lavanya was a game changer for our marketing team. The predictive churn model she built helped us retain 20% more customers last quarter.",
  },
  {
    name: "David Chen",
    role: "Lead Data Scientist, DataWorks",
    content: "I mentored Lavanya during her internship. Her ability to quickly grasp complex machine learning concepts and apply them practically is very impressive.",
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 relative overflow-hidden" id="testimonials">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-royal-blue">07.</span> Testimonials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-royal-blue to-purple-500 rounded-full mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 -translate-x-12 -translate-y-12 text-white/5 z-0">
            <Quote size={120} />
          </div>

          <div className="relative z-10 glass-card p-8 md:p-12 rounded-3xl min-h-[300px] flex flex-col justify-center">
             <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
             >
                <p className="text-xl md:text-2xl text-gray-300 italic mb-8 leading-relaxed">
                  "{TESTIMONIALS[activeIndex].content}"
                </p>
                <div>
                  <h4 className="text-white font-bold text-lg">{TESTIMONIALS[activeIndex].name}</h4>
                  <p className="text-cyan-400 font-mono text-sm">{TESTIMONIALS[activeIndex].role}</p>
                </div>
             </motion.div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'bg-cyan-400 w-8' : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

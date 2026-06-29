'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const PROJECTS = [
  {
    title: 'Global Mobility Application Analyzer',
    category: 'Machine Learning / MLOps',
    description: 'An end-to-end machine learning project designed to automate the processing and analysis of immigration and relocation applications, specifically predicting US Visa approval chances.',
    implementation: [
      'Developed a comprehensive ML pipeline including data ingestion, validation, transformation, and model training.',
      'Built a real-time prediction pipeline using FastAPI for serving model predictions.',
      'Implemented data drift detection using Evidently and automated deployment via CI/CD pipelines with Docker and AWS EC2.'
    ],
    tags: ['Machine Learning', 'FastAPI', 'Docker', 'AWS', 'MLOps'],
    github: 'https://github.com/RamavathLavanya6/Global-Mobility-Application-Analyzer',
    live: null
  },
  {
    title: 'Ai-Powered Mindmapr',
    category: 'Machine Learning / NLP',
    description: 'An intelligent mind-mapping tool that leverages natural language processing to automatically generate and organize complex concepts into visual maps, streamlining the ideation process for users.',
    implementation: [
      'Built a robust Python backend using HuggingFace Transformers for NLP entity extraction.',
      'Developed a responsive React frontend connected via a high-performance FastAPI server.',
      'Leveraged D3.js algorithms for dynamic, interactive node-based graph visualization.'
    ],
    tags: ['Python', 'NLP', 'Machine Learning', 'React'],
    github: 'https://github.com/RamavathLavanya6/minpro.py',
    live: null
  },
  {
    title: 'FinTech AI Risk Scoring',
    category: 'Predictive Modeling',
    description: 'A classification model designed to evaluate and score financial risk for loan applicants. Built using historical financial data and behavioral metrics to improve decision accuracy in lending.',
    implementation: [
      'Preprocessed and cleaned 50,000+ historical financial records using Pandas & NumPy.',
      'Trained a Random Forest Classifier in Scikit-learn with hyperparameter tuning via GridSearchCV.',
      'Engineered behavioral features resulting in a 94% predictive accuracy score.'
    ],
    tags: ['Scikit-learn', 'Pandas', 'Random Forest'],
    github: 'https://github.com/RamavathLavanya6/RSMLA',
    live: null
  },
  {
    title: 'Netflix BI Analytics Suite',
    category: 'Business Intelligence',
    description: 'An interactive business intelligence dashboard providing deep insights into Netflix viewership trends, content distribution, and regional preferences using advanced data visualization techniques.',
    implementation: [
      'Aggregated and transformed massive global streaming datasets directly within Power Query.',
      'Formulated complex DAX measures to track YoY growth, retention, and regional content preferences.',
      'Designed interactive maps and drill-through dashboards for executive-level reporting.'
    ],
    tags: ['Power BI', 'DAX', 'Data Visualization'],
    github: 'https://github.com/RamavathLavanya6/netflix-bi-analytics-suite',
    live: 'https://powerbi.microsoft.com/en-us/'
  },
  {
    title: 'WomenSafe AI',
    category: 'Machine Learning / Safety',
    description: 'Women Safety Prediction and Alert System using Machine Learning.',
    implementation: [
      'Developed a predictive safety model to evaluate risk in real-time.',
      'Engineered an alert system using Python for rapid emergency response.',
      'Integrated machine learning algorithms for accurate threat detection.'
    ],
    tags: ['Python', 'Machine Learning', 'Predictive Modeling'],
    github: 'https://github.com/RamavathLavanya6/WomenSafe-AI',
    live: null
  }
];

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    if (expandedId === idx) {
      setExpandedId(null);
    } else {
      setExpandedId(idx);
    }
  };

  return (
    <section id="projects" className="py-[clamp(4rem,6vw,6rem)] px-[clamp(1.4rem,4vw,4rem)] bg-[#111827] relative">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="text-[0.7rem] tracking-[0.3em] font-medium uppercase text-blue-400 flex items-center gap-4 mb-16">
          <div className="w-12 h-[2px] bg-blue-500/50 shrink-0" />
          <span>03. SELECTED WORK</span>
        </div>

        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.1] text-white mb-[clamp(4rem,6vw,6rem)] tracking-tight">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>.
        </h2>

        <div className="flex flex-col gap-[clamp(4rem,8vw,8rem)]">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group flex flex-col relative items-start border-b border-slate-800 pb-16 last:border-0"
            >
              
              <div className="text-blue-500/5 font-bold text-[8rem] sm:text-[12rem] tracking-tighter leading-none absolute -top-10 right-0 z-0 pointer-events-none select-none">
                {String(idx + 1).padStart(2, '0')}
              </div>
              
              <div className="w-full max-w-4xl flex flex-col relative z-10">
                <span className="text-[0.65rem] tracking-[0.3em] font-medium uppercase text-slate-500 mb-4 block">
                  {String(idx + 1).padStart(2, '0')} &mdash; {project.category}
                </span>
                
                <a href={project.github || project.live || "#"} target="_blank" rel="noopener noreferrer" className="inline-block cursor-pointer">
                  <h3 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-white mb-6 hover:text-blue-400 transition-colors duration-500">
                    {project.title}
                  </h3>
                </a>
                
                <p className="text-[1.05rem] leading-[1.8] text-slate-400 mb-6 max-w-3xl">
                  {project.description}
                </p>

                {/* Implementation Details Accordion */}
                <div className="mb-8 border border-slate-700/50 bg-[#0B1120]/50 backdrop-blur-sm p-4 rounded-lg w-full max-w-3xl">
                  <button 
                    onClick={() => toggleExpand(idx)}
                    className="w-full flex items-center justify-between text-left cursor-pointer group/btn"
                  >
                    <span className="text-[0.7rem] font-medium tracking-[0.15em] uppercase text-blue-400 group-hover/btn:text-blue-300 transition-colors">
                      View Implementation Details
                    </span>
                    <motion.div
                      animate={{ rotate: expandedId === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-blue-400"
                    >
                      <FaChevronDown size={12} />
                    </motion.div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: expandedId === idx ? "auto" : 0,
                      opacity: expandedId === idx ? 1 : 0,
                      marginTop: expandedId === idx ? 16 : 0
                    }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-3 pl-4 border-l border-blue-500/20">
                      {project.implementation.map((point, i) => (
                        <li key={i} className="text-[0.9rem] leading-[1.6] text-slate-300 relative before:content-[''] before:absolute before:-left-[17px] before:top-[6px] before:w-[5px] before:h-[5px] before:bg-blue-500 before:shadow-[0_0_8px_rgba(59,130,246,0.8)] before:rounded-full">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[0.7rem] font-medium tracking-[0.1em] uppercase text-slate-300 border border-slate-700/50 px-3 py-1 bg-[#0B1120]/50 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 mt-auto">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-blue-400 hover:text-blue-300 relative overflow-hidden group/link cursor-pointer"
                    >
                      <span className="relative z-10">Source Code</span>
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300" />
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-purple-400 hover:text-purple-300 relative overflow-hidden group/link cursor-pointer"
                    >
                      <span className="relative z-10">Live Demo</span>
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-500 origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300" />
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

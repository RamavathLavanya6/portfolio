'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaChartBar, FaChartPie, FaFileExcel } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank, SiPython, SiMysql, SiPandas, SiNumpy, SiScikitlearn } from 'react-icons/si';

const ROLES = [
  'Data Analyst',
  2000,
  'Business Intelligence Analyst',
  2000,
  'Python Developer',
  2000,
  'Machine Learning Enthusiast',
  2000,
  'Salesforce Developer',
  2000,
];

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center bg-[#0B1120] overflow-hidden pt-20">
      
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-blue-600/20 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-purple-600/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-[clamp(1.5rem,4vw,4rem)] relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 shadow-[0_0_15px_rgba(59,130,246,0.15)]"
            >
              <span className="text-xl">👋</span>
              <span className="text-blue-300 font-medium tracking-wider text-sm">Hello, I'm</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
            >
              Lavanya <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Ramavath</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-300 font-semibold mb-6 h-[40px] md:h-[48px]"
            >
              <TypeAnimation
                sequence={ROLES}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
              />
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl"
            >
              I transform raw data into meaningful business insights through Data Analytics, Power BI, SQL, Python, and Machine Learning. Passionate about solving real-world problems using data-driven decision making and creating impactful analytics solutions.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <a 
                href="#projects" 
                className="group relative px-8 py-3 bg-blue-600 text-white rounded-lg font-medium overflow-hidden hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">Explore My Work</span>
                <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a 
                href="/resume.jpeg" 
                target="_blank"
                className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
              >
                Download Resume
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-6"
            >
              {[
                { icon: FaGithub, href: 'https://github.com/RamavathLavanya6/', color: 'hover:text-white' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/lavanya-ramavath-942634287/', color: 'hover:text-blue-500' },
                { icon: SiLeetcode, href: '#', color: 'hover:text-orange-500' },
                { icon: SiHackerrank, href: '#', color: 'hover:text-green-500' },
                { icon: FaEnvelope, href: 'mailto:lavanyaramavath6@gmail.com', color: 'hover:text-red-400' },
              ].map((social, idx) => (
                <a key={idx} href={social.href} target="_blank" rel="noreferrer" className={`text-slate-400 text-2xl transition-all duration-300 hover:-translate-y-1 ${social.color} hover:shadow-[0_0_15px_currentColor]`}>
                  <social.icon />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Profile & Badges */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-10 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 1.5, delay: 0.2 }}
              className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
            >
              {/* Outer Glowing Rings */}
              <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-[-20px] rounded-full border border-purple-500/20 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-[-40px] rounded-full border border-cyan-500/10 animate-[spin_20s_linear_infinite]" />
              
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur-[50px] opacity-20 animate-pulse" />

              {/* Profile Image */}
              <motion.div 
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full overflow-hidden border-4 border-[#0B1120] shadow-[0_0_30px_rgba(59,130,246,0.3)] bg-[#0B1120]"
              >
                <div className="w-full h-full rounded-full overflow-hidden relative group">
                  <img src="/profile.jpg" alt="Lavanya Ramavath" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700" />
                </div>
              </motion.div>

              {/* Orbiting Tech Badges */}
              {[
                { icon: SiPython, color: 'text-[#3776AB]', angle: 0 },
                { icon: SiMysql, color: 'text-[#4479A1]', angle: 45 },
                { icon: FaChartBar, color: 'text-[#F2C811]', angle: 90 },
                { icon: FaChartPie, color: 'text-[#E97627]', angle: 135 },
                { icon: FaFileExcel, color: 'text-[#217346]', angle: 180 },
                { icon: SiPandas, color: 'text-white', angle: 225 },
                { icon: SiScikitlearn, color: 'text-[#F7931E]', angle: 270 },
                { icon: FaGithub, color: 'text-white', angle: 315 },
              ].map((badge, idx) => {
                // Responsive radius based on screen size (handled partially by hiding on mobile or using calc)
                // For simplicity, using inline styles for absolute positioning
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + (idx * 0.1), type: 'spring' }}
                    className="absolute hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-[#111827] border border-slate-700/50 shadow-lg shadow-black/50 z-20 hover:scale-125 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] cursor-pointer"
                    style={{ 
                      top: `calc(50% + ${Math.sin(badge.angle * (Math.PI / 180)) * 260}px)`, 
                      left: `calc(50% + ${Math.cos(badge.angle * (Math.PI / 180)) * 260}px)`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <badge.icon className={`text-2xl ${badge.color}`} />
                  </motion.div>
                );
              })}

            </motion.div>
          </div>
          
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 cursor-pointer hover:-translate-y-1 transition-transform"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[0.65rem] tracking-[0.3em] font-medium uppercase text-slate-400">Scroll Down</span>
        <div className="w-[28px] h-[46px] rounded-full border-2 border-slate-600 flex justify-center p-1.5 hover:border-blue-500 transition-colors">
          <motion.div 
            animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-[3px] h-[6px] bg-blue-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

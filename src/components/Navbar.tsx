'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_LINKS.map(link => link.href.replace('#', ''));
      let current = 'hero';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-[clamp(1.5rem,4vw,4rem)] py-5 transition-all duration-300 ${
        scrolled ? 'bg-[#0B1120]/80 backdrop-blur-md shadow-lg shadow-black/10' : 'bg-transparent'
      }`}
    >
      <a
        href="#hero"
        className="font-serif text-2xl font-semibold tracking-wide text-white"
      >
        Lavanya.
      </a>

      <ul className="hidden lg:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className={`text-[0.85rem] font-medium tracking-wide transition-colors duration-300 ${
                activeSection === link.href.replace('#', '') ? 'text-blue-400' : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <a 
        href="/resume.pdf"
        target="_blank"
        className="hidden md:flex items-center justify-center px-6 py-2.5 text-[0.8rem] font-medium tracking-wider text-white border border-blue-500/50 rounded-full bg-blue-500/10 hover:bg-blue-500 hover:border-blue-500 transition-all duration-300"
      >
        Resume
      </a>
    </motion.nav>
  );
}

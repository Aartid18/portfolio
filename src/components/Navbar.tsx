"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

const NAV_ITEMS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "WORK", href: "#projects" },
  { label: "STACK", href: "#skills" },
  { label: "CONTACT", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#home"
            data-cursor="OPEN"
            className="flex items-center gap-2 font-mono text-lg font-black tracking-tight text-white hover:text-[#39ff88] transition-colors focus-visible:ring-2 focus-visible:ring-[#39ff88] rounded-lg p-1"
          >
            <span className="w-2.5 h-2.5 rounded-sm bg-[#39ff88]" />
            <span>AARTI<span className="text-[#39ff88]">.DEV</span></span>
          </a>

          {/* Desktop Floating Terminal Nav */}
          <nav className="hidden md:flex items-center gap-1 terminal-nav p-1.5 rounded-full shadow-2xl font-mono text-xs">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  data-cursor="OPEN"
                  className={`relative px-4 py-2 font-bold tracking-wider rounded-full transition-colors duration-200 ${
                    isActive ? "text-[#050505]" : "text-[#737373] hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navActiveSlide"
                      className="absolute inset-0 bg-[#39ff88] rounded-full shadow-md shadow-[#39ff88]/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Quick Action Links */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="↗"
              className="p-2 text-[#737373] hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="↗"
              className="p-2 text-[#737373] hover:text-[#39ff88] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <a
              href="#resume"
              data-cursor="OPEN"
              className="flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold text-white bg-[#141414] hover:bg-[#39ff88] hover:text-[#050505] border border-white/10 hover:border-[#39ff88] rounded-full transition-all duration-200"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>RESUME</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-full bg-[#141414] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#39ff88]"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#050505] border-t border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3 shadow-2xl font-mono text-xs"
          >
            <div className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 font-bold tracking-widest rounded-xl transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "bg-[#39ff88] text-[#050505]"
                      : "text-[#737373] hover:bg-[#141414] hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-around text-[#737373]">
              <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1.5">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#39ff88] flex items-center gap-1.5">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a href={`mailto:${PERSONAL_INFO.socials.email}`} className="hover:text-[#39ff88] flex items-center gap-1.5">
                <Mail className="w-4 h-4" /> Email
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

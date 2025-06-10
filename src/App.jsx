import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { FiSun, FiMoon, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from './components/Home';
import Projects from './components/Projects';
import AboutIntro from './components/About/AboutIntro';
import AboutSkills from './components/About/AboutSkills';
import AboutCertificates from './components/About/AboutCertificates';
import AboutEducation from './components/About/AboutEducation';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AboutMe = () => (
  <div className="space-y-8">
    <AboutIntro />
    <AboutSkills />
    <AboutCertificates />
    <AboutEducation />
  </div>
);

const TABS = [
  { name: 'Home', component: <Home /> },
  { name: 'About Me', component: <AboutMe /> },
  { name: 'Projects', component: <Projects /> },
  { name: 'Contact', component: <Contact /> },
];

function ThemeToggle() {
  const [dark, setDark] = useState(() => localStorage.theme === "dark");

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="p-2 rounded-full bg-gray-700 hover:bg-blue-500 transition text-blue-300 ml-2"
      aria-label="Toggle dark mode"
    >
      {dark ? <FiSun /> : <FiMoon />}
    </button>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [dark, setDark] = useState(() => localStorage.theme === "dark");

  // For theme toggle in ThemeToggle and particles
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [dark]);

  // Particle options for dark/light
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    background: {
      color: {
        value: dark ? "#0f172a" : "#f1f5f9"
      }
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
        resize: true
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 100, duration: 0.4 }
      }
    },
    particles: {
      color: { value: dark ? "#60a5fa" : "#6366f1" },
      links: {
        color: dark ? "#60a5fa" : "#6366f1",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1
      },
      collisions: { enable: false },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 1.2,
        straight: false
      },
      number: { density: { enable: true, area: 800 }, value: 50 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } }
    },
    detectRetina: true
  };

  return (
    <div className="relative w-screen min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white overflow-x-hidden">
      {/* Live animated background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="fixed inset-0 z-0"
      />
      {/* Main content area */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 py-8">
        {/* Theme toggle at the top right */}
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        {/* Tab Navigation with animated underline */}
        <nav className="flex justify-center mb-8 space-x-2 relative">
          {TABS.map((tab, idx) => (
            <button
              key={tab.name}
              className={`px-4 py-2 rounded-t-lg font-semibold border-b-2 transition relative
                ${activeTab === idx
                  ? 'bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-blue-500 dark:border-blue-400 shadow'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-transparent hover:bg-gray-300 dark:hover:bg-gray-600'}`}
              onClick={() => setActiveTab(idx)}
            >
              {tab.name}
              {activeTab === idx && (
                <motion.div
                  layoutId="tab-underline"
                  className="absolute left-0 right-0 -bottom-1 h-1 bg-blue-500 dark:bg-blue-400 rounded"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>
        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="bg-gray-100 dark:bg-gray-800 rounded-b-lg shadow p-6 min-h-[300px] text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-700"
          >
            {TABS[activeTab].component}
          </motion.div>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  );
}
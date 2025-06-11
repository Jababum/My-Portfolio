import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { FiSun, FiMoon, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from './components/Home';
import Projects from './components/Projects';
import AboutMe from './components/About/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useLocation } from "react-router-dom";

const TABS = [
  { name: 'Home', component: <Home /> },
  { name: 'About Me', component: <AboutMe /> }, // Use the imported AboutMe
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
  const location = useLocation();
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

  // Set your preferred dark navy blue color
  const navyBg = "bg-[#0f172a]"; // You can adjust this hex as needed

  return (
    <div className={`relative w-screen min-h-screen ${navyBg} text-gray-100`}>
      {/* Live animated background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="fixed inset-0 z-0"
      />
      {/* Top bar with nav and theme toggle */}
      <div className="w-full flex justify-end items-center px-8 pt-6 z-20 relative">
        <nav className="flex space-x-2">
          {TABS.map((tab, idx) => (
            <button
              key={tab.name}
              className={`px-4 py-2 font-semibold transition relative
                ${activeTab === idx
                  ? 'bg-[#172554] text-blue-400'
                  : 'bg-[#1e293b] text-gray-300 hover:bg-[#334155]'}`}
              onClick={() => setActiveTab(idx)}
            >
              {tab.name}
            </button>
          ))}
        </nav>
        <ThemeToggle />
      </div>
      {/* Main content area */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full flex flex-col"
          >
            {TABS[activeTab].component}
          </motion.div>
        </AnimatePresence>
        {/* Show Footer on all pages except Home */}
        {activeTab !== 0 && <Footer />}
      </div>
    </div>
  );
}
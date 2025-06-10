import React, { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { FiSun, FiMoon, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const TABS = [
  { name: 'About', component: <About /> },
  { name: 'Education', component: <Education /> },
  { name: 'Experience', component: <Experience /> },
  { name: 'Skills', component: <Skills /> },
  { name: 'Contact', component: <Contact /> },
];

function ThemeToggle() {
  const [dark, setDark] = useState(() => localStorage.theme === "dark");
  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.theme = dark ? "dark" : "light";
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

function SocialBar() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      <a href="mailto:megswin6581@gmail.com" className="group" target="_blank" rel="noopener noreferrer">
        <FiMail className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition" />
      </a>
      <a href="https://linkedin.com/in/megan-serafina" className="group" target="_blank" rel="noopener noreferrer">
        <FiLinkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition" />
      </a>
      <a href="https://github.com/" className="group" target="_blank" rel="noopener noreferrer">
        <FiGithub className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition" />
      </a>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="relative w-screen min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-950 overflow-x-hidden">
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        style={{
          background: "radial-gradient(circle at 20% 40%, #3b82f6 0%, transparent 60%), radial-gradient(circle at 80% 60%, #6366f1 0%, transparent 70%)"
        }}
      />
      <SocialBar />
      {/* Main content below header */}
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
              className={`px-4 py-2 rounded-t-lg font-semibold transition relative
                ${activeTab === idx
                  ? 'bg-gray-800 text-blue-400 shadow'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
              onClick={() => setActiveTab(idx)}
            >
              {tab.name}
              {activeTab === idx && (
                <motion.div
                  layoutId="tab-underline"
                  className="absolute left-0 right-0 -bottom-1 h-1 bg-blue-500 rounded"
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
            className="bg-gray-800 rounded-b-lg shadow p-6 min-h-[300px]"
          >
            {TABS[activeTab].component}
          </motion.div>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  );
}
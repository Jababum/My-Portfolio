import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import SparklesBackground from "./SparklesBackground";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start text-center p-4 pt-4 md:pt-8 relative overflow-hidden">
      <SparklesBackground />
      <motion.h1
        className="text-2xl md:text-3xl font-bold text-blue-400 mb-1 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        whileHover={{ scale: 1.05, color: "#60a5fa" }}
      >
        Megan Serafina Chen Jie
      </motion.h1>
      <motion.p
        className="text-base md:text-lg text-gray-300 mb-1 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        whileHover={{ scale: 1.04, color: "#38bdf8" }}
      >
        Second Year Computer Science Student
      </motion.p>
      <motion.div
        className="max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <motion.p
          className="text-sm md:text-base text-gray-400 mb-2 z-10"
          whileHover={{ scale: 1.03, color: "#60a5fa" }}
        >
          Motivated and detail-oriented Computer Science undergraduate majoring in
          Artificial Intelligence.
        </motion.p>
        <motion.p
          className="text-sm md:text-base text-gray-400 mb-4 z-10"
          whileHover={{ scale: 1.03, color: "#60a5fa" }}
        >
          Passionate about leveraging AI in healthcare and committed to continuous
          learning and collaboration.
        </motion.p>
      </motion.div>
      <motion.a
        href="/MeganResume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition z-10 mb-2"
        whileHover={{ scale: 1.08, backgroundColor: "#2563eb" }}
        whileTap={{ scale: 0.97 }}
      >
        View My Resume
      </motion.a>
      {/* Credits here, just above social icons */}
      <div className="flex gap-6 justify-center mt-4 z-10">
        <motion.a
          href="mailto:megswin6581@gmail.com"
          className="p-2 rounded-full bg-gray-700 hover:bg-blue-500 transition text-blue-300"
          aria-label="Email"
          whileHover={{
            scale: 1.2,
            backgroundColor: "#3b82f6",
            color: "#fff",
          }}
        >
          <FiMail className="w-6 h-6" />
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/megan-serafina"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-700 hover:bg-blue-500 transition text-blue-300"
          aria-label="LinkedIn"
          whileHover={{
            scale: 1.2,
            backgroundColor: "#3b82f6",
            color: "#fff",
          }}
        >
          <FiLinkedin className="w-6 h-6" />
        </motion.a>
        <motion.a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-700 hover:bg-blue-500 transition text-blue-300"
          aria-label="GitHub"
          whileHover={{
            scale: 1.2,
            backgroundColor: "#3b82f6",
            color: "#fff",
          }}
        >
          <FiGithub className="w-6 h-6" />
        </motion.a>
      </div>
    </div>
  );
}
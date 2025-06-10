import { motion } from "framer-motion";
import { FiPhone, FiMail, FiLinkedin, FiCalendar, FiMapPin, FiGift, FiCloud, FiCpu, FiMusic, FiActivity } from "react-icons/fi";

export default function About() {
  return (
    <motion.section
      className="space-y-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Introduction Card */}
      <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-8 transition-shadow hover:shadow-2xl">
        <img
          src="/profile.jpg"
          alt="Megan Serafina Chen Jie"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-500 shadow transition-transform hover:scale-105"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-blue-400 mb-1">Megan Serafina Chen Jie</h2>
          <p className="text-lg text-gray-300 mb-2">Computer Science (AI) Undergraduate</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
            <span className="flex items-center gap-1"><FiPhone className="text-blue-400" /> +6010-9338876</span>
            <span className="flex items-center gap-1"><FiMail className="text-blue-400" />
              <a href="mailto:megswin6581@gmail.com" className="underline text-blue-400 hover:text-blue-300 transition">
                megswin6581@gmail.com
              </a>
            </span>
            <span className="flex items-center gap-1">
              <FiLinkedin className="text-blue-400" />
              <a href="https://linkedin.com/in/megan-serafina" target="_blank" rel="noopener noreferrer" className="underline text-blue-400 hover:text-blue-300 transition">
                LinkedIn
              </a>
            </span>
          </div>
          <span className="inline-block px-2 py-1 bg-blue-900 text-blue-300 rounded text-xs mb-2">About Me</span>
          <p className="text-gray-200">
            Motivated and detail-oriented Computer Science undergraduate majoring in Artificial Intelligence. Experienced in IT support and customer service with strong leadership roles in student organizations. Passionate about leveraging AI in healthcare and committed to continuous learning and collaboration.
          </p>
          <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-400">
            <span className="flex items-center gap-1"><FiGift className="text-blue-400" /> Age: 20</span>
            <span className="flex items-center gap-1"><FiCalendar className="text-blue-400" /> Birthdate: 22-06-2004</span>
            <span className="flex items-center gap-1"><FiMapPin className="text-blue-400" /> Kuching, Sarawak</span>
          </div>
        </div>
      </div>

      {/* Interests */}
      <div className="bg-gray-800 rounded-xl shadow-lg p-6 transition-shadow hover:shadow-2xl">
        <h3 className="text-lg font-semibold text-blue-300 mb-3">Interests</h3>
        <div className="flex flex-wrap gap-4 text-gray-200 text-base">
          <span className="flex items-center gap-2 group transition"><FiActivity className="text-blue-400 group-hover:text-blue-300 transition" /> Dodgeball</span>
          <span className="flex items-center gap-2 group transition"><FiMusic className="text-blue-400 group-hover:text-blue-300 transition" /> Violin</span>
          <span className="flex items-center gap-2 group transition"><FiCpu className="text-blue-400 group-hover:text-blue-300 transition" /> AI in Healthcare</span>
          <span className="flex items-center gap-2 group transition"><FiCloud className="text-blue-400 group-hover:text-blue-300 transition" /> Networking/Cloud</span>
        </div>
      </div>

      {/* Skills */}
      <div className="bg-gray-800 rounded-xl shadow-lg p-6 transition-shadow hover:shadow-2xl">
        <h3 className="text-lg font-semibold text-blue-300 mb-3">Skills</h3>
        <div className="mb-2">
          <span className="font-semibold text-gray-400">Programming Languages:</span>
          <div className="flex flex-wrap gap-3 mt-1 text-gray-200">
            <span className="hover:text-blue-400 transition">Python</span>
            <span className="hover:text-blue-400 transition">Java</span>
            <span className="hover:text-blue-400 transition">C++</span>
            <span className="hover:text-blue-400 transition">C#</span>
            <span className="hover:text-blue-400 transition">SQL</span>
            <span className="hover:text-blue-400 transition">HTML/CSS</span>
          </div>
        </div>
        <div className="mb-2">
          <span className="font-semibold text-gray-400">Frameworks & Tools:</span>
          <div className="flex flex-wrap gap-3 mt-1 text-gray-200">
            <span className="hover:text-blue-400 transition">TensorFlow</span>
            <span className="hover:text-blue-400 transition">Keras</span>
            <span className="hover:text-blue-400 transition">PyTorch</span>
            <span className="hover:text-blue-400 transition">Excel</span>
            <span className="hover:text-blue-400 transition">Jupyter</span>
            <span className="hover:text-blue-400 transition">Git/GitHub</span>
            <span className="hover:text-blue-400 transition">Linux/CLI</span>
            <span className="hover:text-blue-400 transition">AWS</span>
            <span className="hover:text-blue-400 transition">Azure</span>
            <span className="hover:text-blue-400 transition">Cisco Packet Tracer</span>
          </div>
        </div>
        <div>
          <span className="font-semibold text-gray-400">Languages:</span>
          <div className="flex flex-wrap gap-3 mt-1 text-gray-200">
            <span className="hover:text-blue-400 transition">English</span>
            <span className="hover:text-blue-400 transition">Bahasa Malaysia</span>
            <span className="hover:text-blue-400 transition">Mandarin</span>
            <span className="hover:text-blue-400 transition">Hokkien</span>
            <span className="hover:text-blue-400 transition">Hakka</span>
            <span className="hover:text-blue-400 transition">Teochew</span>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-gray-800 rounded-xl shadow-lg p-6 transition-shadow hover:shadow-2xl">
        <h3 className="text-lg font-semibold text-blue-300 mb-3">Certifications</h3>
        <ul className="list-disc list-inside text-gray-200 space-y-1 ml-4">
          <li className="hover:text-blue-400 transition">AWS Academy Cloud Foundations</li>
          <li className="hover:text-blue-400 transition">Cisco Networking Academy</li>
          <li className="hover:text-blue-400 transition">AI & Machine Learning Fundamentals</li>
        </ul>
      </div>

      {/* Education */}
      <div className="bg-gray-800 rounded-xl shadow-lg p-6 transition-shadow hover:shadow-2xl">
        <h3 className="text-lg font-semibold text-blue-300 mb-3">Education</h3>
        <div>
          <div className="font-semibold text-gray-200">Bachelor of Computer Science (AI), Swinburne University of Technology Sarawak</div>
          <div className="text-sm text-gray-400 mb-1">Expected Graduation: October 2026</div>
          <div className="text-gray-300">
            Relevant coursework: Machine Learning, Neural Networks, Cloud Computing
          </div>
        </div>
      </div>
    </motion.section>
  );
}

import { FiPhone, FiMail, FiLinkedin, FiCalendar, FiMapPin, FiGift } from "react-icons/fi";

export default function AboutIntro() {
  return (
    <div id="intro" className="p-6">
      <img
        src="/MeganPhoto.JPG"
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
          <span className="flex items-center gap-1"><FiCalendar className="text-blue-400" /> Birthdate: 20-09-2004</span>
          <span className="flex items-center gap-1"><FiMapPin className="text-blue-400" /> Kuching, Sarawak</span>
        </div>
      </div>
    </div>
  );
}
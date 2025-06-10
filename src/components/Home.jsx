import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

export default function Home() {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center text-center transition-shadow hover:shadow-2xl">
      <img
        src="/profile.jpg"
        alt="Megan Serafina Chen Jie"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-500 shadow mb-4"
      />
      <h1 className="text-3xl font-bold text-blue-400 mb-2">Megan Serafina Chen Jie</h1>
      <p className="text-lg text-gray-300 mb-1">Second Year Computer Science Student</p>
      <p className="text-base text-gray-400 mb-4">
        Motivated and detail-oriented Computer Science undergraduate majoring in Artificial Intelligence. Experienced in IT support and customer service with strong leadership roles in student organizations. Passionate about leveraging AI in healthcare and committed to continuous learning and collaboration.
      </p>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mb-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        View Full Resume
      </a>
      {/* Social buttons at the bottom */}
      <div className="flex gap-6 justify-center mt-8">
        <a
          href="mailto:megswin6581@gmail.com"
          className="p-2 rounded-full bg-gray-700 hover:bg-blue-500 transition text-blue-300"
          aria-label="Email"
        >
          <FiMail className="w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com/in/megan-serafina"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-700 hover:bg-blue-500 transition text-blue-300"
          aria-label="LinkedIn"
        >
          <FiLinkedin className="w-6 h-6" />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-700 hover:bg-blue-500 transition text-blue-300"
          aria-label="GitHub"
        >
          <FiGithub className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
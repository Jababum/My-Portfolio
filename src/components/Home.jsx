import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start text-center p-4 pt-4 md:pt-8 relative overflow-hidden">
      {/* Sparkles Background */}
      <div className="pointer-events-none select-none absolute inset-0 z-0">
        <svg
          width="100%"
          height="100%"
          className="absolute inset-0"
          style={{ pointerEvents: "none" }}
        >
          <g>
            <circle cx="10%" cy="20%" r="2.5" fill="#fff" opacity="0.8">
              <animate
                attributeName="opacity"
                values="0.8;0.2;0.8"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="80%" cy="30%" r="1.5" fill="#fff" opacity="0.7">
              <animate
                attributeName="opacity"
                values="0.7;0.1;0.7"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="50%" cy="60%" r="2" fill="#fff" opacity="0.9">
              <animate
                attributeName="opacity"
                values="0.9;0.3;0.9"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="70%" cy="80%" r="1.8" fill="#fff" opacity="0.6">
              <animate
                attributeName="opacity"
                values="0.6;0.2;0.6"
                dur="2.2s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="30%" cy="75%" r="1.2" fill="#fff" opacity="0.5">
              <animate
                attributeName="opacity"
                values="0.5;0.1;0.5"
                dur="1.8s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="60%" cy="15%" r="2.2" fill="#fff" opacity="0.8">
              <animate
                attributeName="opacity"
                values="0.8;0.3;0.8"
                dur="2.7s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </svg>
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-blue-400 mb-1 z-10">
        Megan Serafina Chen Jie
      </h1>
      <p className="text-base md:text-lg text-gray-300 mb-1 z-10">
        Second Year Computer Science Student
      </p>
      <div className="max-w-xl mx-auto">
        <p className="text-sm md:text-base text-gray-400 mb-2 z-10">
          Motivated and detail-oriented Computer Science undergraduate majoring in
          Artificial Intelligence.
        </p>
        <p className="text-sm md:text-base text-gray-400 mb-2 z-10">
          Experienced in IT support and customer service with strong leadership
          roles in student organizations.
        </p>
        <p className="text-sm md:text-base text-gray-400 mb-4 z-10">
          Passionate about leveraging AI in healthcare and committed to continuous
          learning and collaboration.
        </p>
      </div>
      <a
        href="/MeganResume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition z-10 mb-2"
      >
        View My Resume
      </a>
      {/* Credits here, just above social icons */}
      <div className="flex gap-6 justify-center mt-4 z-10">
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
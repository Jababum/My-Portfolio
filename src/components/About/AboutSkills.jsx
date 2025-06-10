export default function AboutSkills() {
  return (
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
  );
}
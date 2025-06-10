import { FiActivity, FiMusic, FiCpu } from "react-icons/fi";

export default function AboutInterests() {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-6 transition-shadow hover:shadow-2xl">
      <h3 className="text-lg font-semibold text-blue-300 mb-3">Interests</h3>
      <div className="flex flex-wrap gap-4 text-gray-200 text-base">
        <span className="flex items-center gap-2 group transition"><FiActivity className="text-blue-400 group-hover:text-blue-300 transition" /> Dodgeball</span>
        <span className="flex items-center gap-2 group transition"><FiMusic className="text-blue-400 group-hover:text-blue-300 transition" /> Violin</span>
        <span className="flex items-center gap-2 group transition"><FiCpu className="text-blue-400 group-hover:text-blue-300 transition" /> AI in Healthcare</span>
      </div>
    </div>
  );
}
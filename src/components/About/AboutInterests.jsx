import { FiFeather } from "react-icons/fi";
import { GiRunningShoe, GiGamepad } from "react-icons/gi";
import { MdSportsHandball } from "react-icons/md";

export default function AboutInterests() {
  return (
    <div id="interests" className="p-6">
      <h3 className="text-lg font-semibold text-blue-300 mb-3">Interests</h3>
      <div className="flex flex-wrap gap-10 text-gray-200 text-base">
        <div className="flex flex-col items-center group cursor-pointer transition">
          <MdSportsHandball className="text-3xl text-blue-400 mb-1 transition-transform duration-200 group-hover:scale-125 group-hover:text-blue-300" />
          <span className="transition-colors duration-200 group-hover:text-blue-300">
            Dodgeball
          </span>
        </div>
        <div className="flex flex-col items-center group cursor-pointer transition">
          <GiGamepad className="text-3xl text-blue-400 mb-1 transition-transform duration-200 group-hover:scale-125 group-hover:text-blue-300" />
          <span className="transition-colors duration-200 group-hover:text-blue-300">
            Gaming
          </span>
        </div>
        <div className="flex flex-col items-center group cursor-pointer transition">
          <FiFeather className="text-3xl text-blue-400 mb-1 transition-transform duration-200 group-hover:scale-125 group-hover:text-blue-300" />
          <span className="transition-colors duration-200 group-hover:text-blue-300">
            Poetry
          </span>
        </div>
        <div className="flex flex-col items-center group cursor-pointer transition">
          <GiRunningShoe className="text-3xl text-blue-400 mb-1 transition-transform duration-200 group-hover:scale-125 group-hover:text-blue-300" />
          <span className="transition-colors duration-200 group-hover:text-blue-300">
            Track
          </span>
        </div>
      </div>
    </div>
  );
}
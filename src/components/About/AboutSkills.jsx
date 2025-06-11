import { SiPython, SiCplusplus, SiMysql, SiHtml5, SiCss3, SiTensorflow, SiKeras, SiPytorch, SiJupyter, SiGit, SiLinux, SiCisco } from "react-icons/si";
import { FaLanguage, FaAws, FaCode, FaJava, FaMicrosoft } from "react-icons/fa";

export default function AboutSkills() {
  return (
    <div id="skills" className="p-6">
      <h3 className="text-lg font-semibold text-blue-300 mb-3">Skills</h3>
      <div className="mb-2">
        <span className="font-semibold text-gray-400">Programming Languages:</span>
        <div className="flex flex-wrap gap-3 mt-1 text-gray-200 items-center">
          <span className="flex items-center gap-1 hover:text-blue-400 transition"><SiPython />Python</span>
          <span className="flex items-center gap-1 hover:text-blue-400 transition"><FaJava />Java</span>
          <span className="flex items-center gap-1 hover:text-blue-400 transition"><SiCplusplus />C++</span>
          <span className="flex items-center gap-1 hover:text-blue-400 transition"><FaCode />C#</span>
          <span className="flex items-center gap-1 hover:text-blue-400 transition"><SiMysql />SQL</span>
          <span className="flex items-center gap-1 hover:text-blue-400 transition"><SiHtml5 />HTML</span>
          <span className="flex items-center gap-1 hover:text-blue-400 transition"><SiCss3 />CSS</span>
        </div>
      </div>
      <div className="mb-2">
        <span className="font-semibold text-gray-400">Frameworks & Tools:</span>
        <div className="flex flex-wrap gap-3 mt-1 text-gray-200 items-center">
          <span className="flex items-center gap-1 hover:text-blue-400 transition"><SiTensorflow />TensorFlow</span>
          <span className="flex items-center gap-1 hover:text-blue-400 transition"><SiKeras />Keras</span>
          <span className="flex items-center gap-1 hover:text-blue-400 transition"><SiPytorch />PyTorch</span>
          <span className="flex items-center gap-1 hover:text-blue-400 transition"><FaMicrosoft />Excel</span>
          <span className="flex items-center gap-1 hover:text-blue-400 transition"><SiJupyter />Jupyter</span>
          <span className="flex items-center gap-1 hover:text-blue-400 transition"><SiGit />Git/GitHub</span>
          <span className="flex items-center gap-1 hover:text-blue-400 transition"><SiLinux />Linux/CLI</span>
          <span className="flex items-center gap-1 hover:text-blue-400 transition"><FaAws />AWS</span>
          <span className="flex items-center gap-1 hover:text-blue-400 transition"><FaMicrosoft />Azure</span>
          <span className="flex items-center gap-1 hover:text-blue-400 transition"><SiCisco />Cisco Packet Tracer</span>
        </div>
      </div>
      <div>
        <span className="font-semibold text-gray-400">Languages:</span>
        <div className="flex flex-wrap gap-3 mt-1 text-gray-200 items-center">
          <span className="flex items-center gap-1 hover:text-blue-400 transition"><FaLanguage />English</span>
          <span className="flex items-center gap-1 hover:text-blue-400 transition"><FaLanguage />Bahasa Malaysia</span>
          <span className="flex items-center gap-1 hover:text-blue-400 transition"><FaLanguage />Mandarin</span>
          <span className="flex items-center gap-1 hover:text-blue-400 transition"><FaLanguage />Hokkien</span>
          <span className="flex items-center gap-1 hover:text-blue-400 transition"><FaLanguage />Hakka</span>
          <span className="flex items-center gap-1 hover:text-blue-400 transition"><FaLanguage />Teochew</span>
        </div>
      </div>
    </div>
  );
}
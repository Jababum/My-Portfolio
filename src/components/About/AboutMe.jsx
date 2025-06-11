import { motion } from "framer-motion";
import { FiUser, FiStar, FiAward, FiBookOpen, FiActivity } from "react-icons/fi";
import { FaLanguage } from "react-icons/fa";
import SparklesBackground from "../SparklesBackground";
import AboutIntro from "./AboutIntro";
import AboutInterests from "./AboutInterests";
import AboutSkills from "./AboutSkills";
import AboutCertificates from "./AboutCertificates";
import AboutEducation from "./AboutEducation";

const sections = [
	{ id: "intro", label: "Introduction", icon: <FiUser /> },
	{ id: "interests", label: "Interests", icon: <FiActivity /> },
	{ id: "skills", label: "Skills", icon: <FiStar /> },
	{ id: "certificates", label: "Certifications", icon: <FiAward /> },
	{ id: "education", label: "Education", icon: <FiBookOpen /> },
];

export default function AboutMe() {
	return (
		<div className="w-full min-h-screen flex flex-col md:flex-row items-stretch p-4 md:p-8 relative">
			<SparklesBackground />
			{/* Sidebar: sticky, left-aligned, no border, flush left */}
			<div className="hidden md:block min-w-[260px] max-w-[280px] mr-8">
				<aside
					className="flex flex-col gap-4 bg-[#172554] rounded-xl p-6 w-full items-start sticky top-8"
				>
					<div className="mb-4">
						<div className="text-xs uppercase tracking-widest text-blue-300 font-bold mb-2">
							About Me
						</div>
					</div>
					{sections.map((section) => (
						<a
							key={section.id}
							href={`#${section.id}`}
							className="flex items-center gap-2 px-3 py-3 rounded-lg text-blue-200 hover:bg-blue-900 hover:text-white font-medium transition w-full text-left text-base"
						>
							<span className="text-blue-400">{section.icon}</span>
							{section.label}
						</a>
					))}
				</aside>
			</div>
			{/* Main content */}
			<motion.section
				className="space-y-8 w-full max-w-3xl mx-auto"
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<h1 className="text-3xl font-bold text-blue-400 mb-6" id="intro">
					About Me
				</h1>
				<AboutIntro />
				{/* Languages section with consistent margin */}
				<div className="mb-8 pl-6">
					<span className="font-semibold text-gray-400">Languages:</span>
					<div className="flex flex-wrap gap-3 mt-1 text-gray-200 items-center">
						<span className="flex items-center gap-1 hover:text-blue-400 transition">
							<FaLanguage />
							English
						</span>
						<span className="flex items-center gap-1 hover:text-blue-400 transition">
							<FaLanguage />
							Bahasa Malaysia
						</span>
						<span className="flex items-center gap-1 hover:text-blue-400 transition">
							<FaLanguage />
							Mandarin
						</span>
						<span className="flex items-center gap-1 hover:text-blue-400 transition">
							<FaLanguage />
							Hokkien
						</span>
						<span className="flex items-center gap-1 hover:text-blue-400 transition">
							<FaLanguage />
							Hakka
						</span>
						<span className="flex items-center gap-1 hover:text-blue-400 transition">
							<FaLanguage />
							Teochew
						</span>
					</div>
				</div>
				<div id="interests">
					<AboutInterests />
				</div>
				<div id="skills">
					<AboutSkills />
				</div>
				<div id="certificates">
					<AboutCertificates />
				</div>
				<div id="education">
					<AboutEducation />
				</div>
			</motion.section>
		</div>
	);
}

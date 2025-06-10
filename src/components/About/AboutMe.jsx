import { motion } from "framer-motion";
import AboutIntro from "./AboutIntro";
import AboutInterests from "./AboutInterests";
import AboutSkills from "./AboutSkills";
import AboutCertificates from "./AboutCertificates";
import AboutEducation from "./AboutEducation";

export default function AboutMe() {
  return (
    <motion.section
      className="space-y-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AboutIntro />
      <AboutInterests />
      <AboutSkills />
      <AboutCertificates />
      <AboutEducation />
    </motion.section>
  );
}

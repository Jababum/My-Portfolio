import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

export default function Contact() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h2 className="text-xl font-bold mb-2 text-blue-700">Get in Touch</h2>
      <div className="mb-2">
        <span className="font-semibold">Email:</span>{" "}
        <a href="mailto:megswin6581@gmail.com" className="text-blue-600 underline">
          megswin6581@gmail.com
        </a>
      </div>
      <div className="mb-2">
        <span className="font-semibold">Phone:</span> +6010-9338876
      </div>
      <div>
        <span className="font-semibold">LinkedIn:</span>{" "}
        <a
          href="https://linkedin.com/in/megan-serafina"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          megan-serafina
        </a>
      </div>
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
    </section>
  );
}
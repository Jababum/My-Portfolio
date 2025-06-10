import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

function ThemeToggle() {
  const [dark, setDark] = useState(() => localStorage.theme === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.theme = dark ? "dark" : "light";
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="p-2 rounded-full bg-gray-700 hover:bg-blue-500 transition text-blue-300 ml-2"
      aria-label="Toggle dark mode"
    >
      {dark ? <FiSun /> : <FiMoon />}
    </button>
  );
}

export default function Header() {
  return (
    <header className="text-center py-8 bg-blue-600 text-white">
      <h1 className="text-4xl font-bold">Megan Serafina Chen Jie</h1>
      <p className="text-lg">Computer Science (AI) Undergraduate</p>
      <div className="mt-2">
        <p>📞 +6010-9338876 | 📧 megswin6581@gmail.com</p>
        <a
          href="https://www.linkedin.com/in/megan-serafina"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          LinkedIn
        </a>
      </div>
      <ThemeToggle />
    </header>
  );
}
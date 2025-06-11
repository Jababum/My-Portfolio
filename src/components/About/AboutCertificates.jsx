import { SiNvidia, SiCisco } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { useState } from "react";

export default function AboutCertificates() {
  const [showNvidiaDate, setShowNvidiaDate] = useState(false);
  const [showCiscoDate, setShowCiscoDate] = useState(false);
  const [showM365, setShowM365] = useState(false);
  const [showAzureFund, setShowAzureFund] = useState(false);
  const [showAzureAI, setShowAzureAI] = useState(false);
  const [showAzureData, setShowAzureData] = useState(false);

  return (
    <div id="certificates" className="p-6">
      <h3 className="text-lg font-semibold text-blue-300 mb-3">Certifications</h3>
      <ul className="list-none text-gray-200 ml-0">
        <li
          className="flex items-center gap-2 cursor-pointer hover:text-green-400 transition"
          onClick={() => setShowNvidiaDate((prev) => !prev)}
        >
          <SiNvidia className="text-2xl text-green-400" />
          NVIDIA Deep Learning Institute Certificate
        </li>
        {showNvidiaDate && (
          <div className="ml-8 text-sm text-white mt-1">
            Completed: December 2024
          </div>
        )}
        <li
          className="flex items-center gap-2 cursor-pointer hover:text-blue-400 transition mt-4"
          onClick={() => setShowCiscoDate((prev) => !prev)}
        >
          <SiCisco className="text-2xl text-blue-400" />
          CCNA: Introduction to Networks
        </li>
        {showCiscoDate && (
          <div className="ml-8 text-sm text-white mt-1">
            Completed: July 2024
          </div>
        )}
        <li
          className="flex items-center gap-2 cursor-pointer hover:text-blue-400 transition mt-4"
          onClick={() => setShowM365((prev) => !prev)}
        >
          <FaMicrosoft className="text-2xl text-blue-400" />
          Microsoft 365 Fundamentals
        </li>
        {showM365 && (
          <div className="ml-8 text-sm text-white mt-1">
            Progress: Ongoing
          </div>
        )}
        <li
          className="flex items-center gap-2 cursor-pointer hover:text-blue-400 transition mt-4"
          onClick={() => setShowAzureFund((prev) => !prev)}
        >
          <FaMicrosoft className="text-2xl text-blue-400" />
          Azure Fundamentals
        </li>
        {showAzureFund && (
          <div className="ml-8 text-sm text-white mt-1">
            Progress: Ongoing
          </div>
        )}
        <li
          className="flex items-center gap-2 cursor-pointer hover:text-blue-400 transition mt-4"
          onClick={() => setShowAzureAI((prev) => !prev)}
        >
          <FaMicrosoft className="text-2xl text-blue-400" />
          Azure AI Fundamentals
        </li>
        {showAzureAI && (
          <div className="ml-8 text-sm text-white mt-1">
            Progress: Ongoing
          </div>
        )}
        <li
          className="flex items-center gap-2 cursor-pointer hover:text-blue-400 transition mt-4"
          onClick={() => setShowAzureData((prev) => !prev)}
        >
          <FaMicrosoft className="text-2xl text-blue-400" />
          Azure Data Fundamentals
        </li>
        {showAzureData && (
          <div className="ml-8 text-sm text-white mt-1">
            Progress: Ongoing
          </div>
        )}
      </ul>
    </div>
  );
}
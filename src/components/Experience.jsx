const JobCard = ({ title, company, date, desc }) => (
  <div className="bg-white shadow rounded p-4 hover:scale-105 transition">
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-sm text-gray-600 italic">{company} • {date}</p>
    <ul className="mt-2 text-sm list-disc ml-4">
      {desc.map((d, idx) => <li key={idx}>{d}</li>)}
    </ul>
  </div>
)
import React from 'react';
import { motion } from 'framer-motion';
export default function Experience() {
  return (
    <section>
      <h2 className="text-xl font-bold mb-2 text-blue-700">Work Experience</h2>
      <div className="mb-4">
        <div className="font-semibold">Cookai Japanese Restaurant | Apr – Jun 2022</div>
        <ul className="list-disc list-inside ml-4 text-sm">
          <li>Enhanced customer experience with Japanese dining etiquette knowledge</li>
          <li>Delivered respectful and attentive service</li>
          <li>Improved communication with diverse clientele</li>
        </ul>
      </div>
      <div className="mb-4">
        <div className="font-semibold">IT Assistant @ Timberland Medical Centre | Jul – Sep 2024</div>
        <ul className="list-disc list-inside ml-4 text-sm">
          <li>Configured PCs with healthcare software and integrated devices</li>
          <li>Provided technical support for staff</li>
          <li>Troubleshot performance issues</li>
        </ul>
      </div>
      <div>
        <div className="font-semibold">Sales Assistant @ H&M | Jul 2022 – Present</div>
        <ul className="list-disc list-inside ml-4 text-sm">
          <li>Customer service, POS handling, store organization</li>
        </ul>
      </div>
    </section>
  );
}
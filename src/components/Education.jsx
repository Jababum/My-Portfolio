export default function Education() {
  return (
    <section>
      <h2 className="text-xl font-bold mb-2 text-blue-700">Education & Certifications</h2>
      <div className="mb-4">
        <div className="font-semibold">Bachelor of Computer Science (AI), Swinburne University of Technology Sarawak</div>
        <div className="text-sm text-gray-600">Expected Graduation: October 2026</div>
        <div className="mt-2">
          <span className="font-semibold">Relevant coursework:</span> Machine Learning, Neural Networks, Cloud Computing
        </div>
      </div>
      <div>
        <div className="font-semibold mb-1">Certifications:</div>
        <ul className="list-disc list-inside space-y-1">
          <li>AWS Academy Cloud Foundations</li>
          <li>Cisco Networking Academy</li>
          <li>AI & Machine Learning Fundamentals</li>
        </ul>
      </div>
    </section>
  );
}
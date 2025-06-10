export default function Skills() {
  return (
    <section>
      <h2 className="text-xl font-bold mb-2 text-blue-700">Skills & Languages</h2>
      <div className="mb-4">
        <div className="font-semibold mb-1">Technical Skills:</div>
        <ul className="list-disc list-inside ml-4 text-sm">
          <li>Python, Java, C++, C#, SQL, HTML/CSS</li>
          <li>TensorFlow, Keras, PyTorch</li>
          <li>Excel, Jupyter, Git/GitHub, Linux/CLI</li>
          <li>AWS, Azure, Cisco Packet Tracer</li>
        </ul>
      </div>
      <div className="mb-4">
        <div className="font-semibold mb-1">Languages:</div>
        <ul className="list-disc list-inside ml-4 text-sm">
          <li>English, Bahasa Malaysia, Mandarin, Hokkien, Hakka, Teochew</li>
        </ul>
      </div>
      <div>
        <div className="font-semibold mb-1">Interests:</div>
        <ul className="list-disc list-inside ml-4 text-sm">
          <li>Dodgeball, violin, AI in healthcare, networking/cloud</li>
        </ul>
      </div>
    </section>
  );
}

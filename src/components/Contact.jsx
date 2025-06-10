export default function Contact() {
  return (
    <section>
      <h2 className="text-xl font-bold mb-2 text-blue-700">Get in Touch</h2>
      <div className="mb-2">
        <span className="font-semibold">Email:</span> <a href="mailto:meganc9876@gmail.com" className="text-blue-600 underline">megswin6581@gmail.com</a>
      </div>
      <div className="mb-2">
        <span className="font-semibold">Phone:</span> +6010-9338876
      </div>
      <div>
        <span className="font-semibold">LinkedIn:</span>{" "}
        <a href="https://linkedin.com/in/megan-serafina" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
          megan-serafina
        </a>
      </div>
    </section>
  );
}
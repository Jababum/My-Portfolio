import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="max-w-4xl mx-auto font-sans text-gray-900">
      <Header />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

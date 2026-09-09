import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <Home />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
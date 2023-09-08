import ParticleBackground from "./ParticleBackground.js";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills"
import Work from "./components/Work";

function App() {
  return (
    <div>
      {/* <ParticleBackground/>
      <div className="particleheader h-[500px]">
        <h1>Hello</h1>
      </div> */}
      
      <ParticleBackground/>
      <Navbar />
      <Home />      
      <Work />
      <Skills />
      <Contact /> 

      {/* <About /> */}
    </div>
  );
}

export default App;

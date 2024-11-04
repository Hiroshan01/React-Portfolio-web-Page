import Navbar from "./componenets/navbar";
import Hero from "./componenets/hero";
import About from "./componenets/About";
import Technology from "./componenets/Technology";
import ExperienceSection from "./componenets/Experiance";
import ContactSection from "./componenets/Contact"
import ProjectsSection from "./componenets/Project";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="flex top-0 selection:text-cyan-900"></div>
      
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technology />
        
        <ExperienceSection/>
        <ProjectsSection/>
        <ContactSection/>
      </div>
    </div>
  );
}

export default App;

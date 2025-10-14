import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services.jsx";
import Projects from "./components/projects/Projects.jsx";
import Loader from "./components/Loader";
import { useState } from "react";
const App = () => {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) return <Loader onLoaded={() => setLoaded(true)} />;

  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>

      <section id="Services">
        <Parallax type="services" />
      </section>
      <Services />
      
      <section id="Projects">
        <Parallax type= "projects"/>
      </section>
      <section>
        <Projects />
      </section>

      
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;

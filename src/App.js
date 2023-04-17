import NavBar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import SocialLinks from "./components/sociallinks";

const App=()=> {
  return (
    <div>
      <NavBar/>
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;

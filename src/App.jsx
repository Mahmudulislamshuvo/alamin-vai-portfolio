import AboutMe from "./components/AboutMe/AboutMe";
import Archivement from "./components/archivement/Archivement";
import Awards from "./components/Awards/Awards";
import Banner from "./components/Banner/Banner";
import Certifications from "./components/Certifications/Certifications";
import Education from "./components/Education/Education";
import Experiences from "./components/Experiences/Experiences";
import Navbar from "./components/navbar/Navbar";
import Researches from "./components/Researches/Researches";
import SkillsAndTools from "./components/Skills/SkillsAndTools";

const App = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <Banner />
      <AboutMe />
      <Archivement />
      <Certifications />
      <Awards />
      <Experiences />
      <Researches />
      <Education />
      <SkillsAndTools />
    </div>
  );
};

export default App;

import AboutMe from "./components/AboutMe/AboutMe";
import Archivement from "./components/archivement/Archivement";
import Awards from "./components/Awards/Awards";
import Banner from "./components/Banner/Banner";
import Certifications from "./components/Certifications/Certifications";
import ContactForm from "./components/ContactUs/ContactForm";
import Education from "./components/Education/Education";
import Experiences from "./components/Experiences/Experiences";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Researches from "./components/Researches/Researches";
import SkillsAndTools from "./components/Skills/SkillsAndTools";

const App = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <Banner />
      <AboutMe />
      <Certifications />
      {/* <Archivement /> */}
      <Experiences />
      <Awards />

      <Researches />
      <Education />
      <SkillsAndTools />
      <Portfolio />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;

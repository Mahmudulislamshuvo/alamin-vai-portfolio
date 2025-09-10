import { useRef } from "react";
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
  // all section refs
  const aboutRef = useRef(null);
  const researchRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);

  // scroll function
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-poppins">
      <Navbar
        scrollToSection={scrollToSection}
        refs={{
          homeRef,
          aboutRef,
          researchRef,
          educationRef,
          experienceRef,
          skillsRef,
          portfolioRef,
          contactRef,
        }}
      />

      <div ref={homeRef}>
        <Banner />
      </div>
      <div ref={aboutRef}>
        <AboutMe />
      </div>
      <div>
        <Certifications />
      </div>
      <div ref={experienceRef}>
        <Experiences />
      </div>
      <div>
        <Awards />
      </div>
      <div ref={researchRef}>
        <Researches />
      </div>
      <div ref={educationRef}>
        <Education />
      </div>
      <div ref={skillsRef}>
        <SkillsAndTools />
      </div>
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <div ref={contactRef}>
        <ContactForm />
      </div>
      <Footer
        scrollToSection={scrollToSection}
        refs={{
          homeRef,
          aboutRef,
          researchRef,
          educationRef,
          experienceRef,
          skillsRef,
          portfolioRef,
          contactRef,
        }}
      />
    </div>
  );
};

export default App;

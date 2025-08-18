import AboutMe from "./components/AboutMe/AboutMe";
import Archivement from "./components/archivement/Archivement";
import Awards from "./components/Awards/Awards";
import Banner from "./components/Banner/Banner";
import Certifications from "./components/Certifications/Certifications";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <Banner />
      <AboutMe />
      <Archivement />
      <Certifications />
      <Awards />
    </div>
  );
};

export default App;

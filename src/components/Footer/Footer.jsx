import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import WebofScience from "../../assets/footer/webofscience.png";
import researchGate from "../../assets/footer/ResearchGate.png";
import googleSchooler from "../../assets/footer/Google_Scholar_logo.svg";
import linkedin from "../../assets/footer/linkedin-svgrepo-com.svg";
import orcid from "../../assets/footer/ORCID_iD.svg";

const Footer = ({ scrollToSection, refs }) => {
  const NavData = [
    { id: 1, name: "Home", target: refs.homeRef },
    { id: 2, name: "About Me", target: refs.aboutRef },
    { id: 3, name: "Research", target: refs.researchRef },
    { id: 4, name: "Education", target: refs.educationRef },
    { id: 5, name: "Experience", target: refs.experienceRef },
    { id: 6, name: "Skills", target: refs.skillsRef },
    { id: 7, name: "Portfolio", target: refs.portfolioRef },
    { id: 8, name: "Contact", target: refs.contactRef },
  ];

  return (
    <div
      className="p-3 bg-Bg-Brand-Dark flex flex-col gap-y-10
        sm:px-10 sm:py-8 sm:flex-col
        md:px-16 md:py-12 md:flex-row md:justify-between md:items-start
        lg:px-20 lg:py-16
        xl:px-[100px] xl:py-[80px] xl:gap-x-15"
    >
      {/* Left side */}
      <div className="w-full md:w-[40%]">
        <h3
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-Bg-Neutral-White pb-3 sm:pb-4 md:pb-5 cursor-pointer"
          onClick={() => scrollToSection(refs.homeRef)}
        >
          Md Al Amin
        </h3>
        <p className="text-sm sm:text-base text-Text-Brand-Inverse">
          Dedicated researcher specializing in artificial intelligence and
          machine learning, with a focus on natural language processing and
          computer vision. Passionate about advancing AI technology through
          innovative research and practical applications.
        </p>
      </div>

      {/* Right side */}
      <div className="w-full md:w-[60%] flex flex-wrap gap-y-8 justify-between">
        {/* Quick Links */}
        <div>
          <h4 className="text-xl sm:text-2xl font-semibold text-white pb-3 sm:pb-4">
            Quick Links
          </h4>
          <ul className="text-base sm:text-lg text-Text-Brand-Inverse flex flex-col gap-y-3 sm:gap-y-5">
            {NavData.slice(0, 4).map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.target)}
                  className="hover:text-Text-Brand-Primary transition-colors duration-300"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Second Links */}
        <div>
          <ul className="text-base sm:text-lg text-Text-Brand-Inverse flex flex-col gap-y-3 sm:gap-y-5">
            {NavData.slice(4).map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.target)}
                  className="hover:text-Text-Brand-Primary transition-colors duration-300"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl sm:text-2xl font-semibold text-white pb-3 sm:pb-4">
            Contact
          </h4>
          <ul className="text-base sm:text-lg text-Text-Brand-Inverse flex flex-col gap-y-3 sm:gap-y-5">
            <li className="flex items-center">
              <IoMail className="w-4 h-4 sm:w-5 sm:h-5 mr-3" />
              alaminhossine@gmail.com
            </li>
            <li className="flex items-center">
              <FaLocationDot className="w-4 h-4 sm:w-5 sm:h-5 mr-3" />
              New York, USA
            </li>
            <li className="flex items-center gap-x-3 pt-6 text-lg sm:text-xl">
              <a
                href="https://www.linkedin.com/in/md-al-amin-b50487366/"
                target="__blank"
              >
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </a>
              <a
                href="https://scholar.google.com/citations?user=5f7cSQQAAAAJ&hl=en"
                target="__blank"
              >
                <img
                  src={googleSchooler}
                  alt="google scholar"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </a>
              <a href="https://orcid.org/0009-0008-8981-9667" target="__blank">
                <img
                  src={orcid}
                  alt="orcid"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </a>
              <a
                href="https://www.researchgate.net/profile/Md-Al-Amin-18/research"
                target="__blank"
              >
                <img
                  src={WebofScience}
                  alt="webofscience"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </a>
              <a
                href="https://www.researchgate.net/profile/Md-Al-Amin-18/research"
                target="__blank"
              >
                <img
                  src={researchGate}
                  alt="researchGate"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

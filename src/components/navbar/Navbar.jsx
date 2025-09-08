import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = ({ scrollToSection, refs }) => {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="bg-Bg-Neutral-Primary shadow">
      <div className="flex items-center justify-between mx-auto px-6 py-4 sm:px-4">
        {/* Brand */}
        <div
          className="text-2xl text-Text-Neutral-Primary md:mr-10 cursor-pointer"
          onClick={() => scrollToSection(refs.homeRef)}
        >
          Md Al Amin
        </div>

        {/* Menu for desktop (only visible on lg and above) */}
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-between">
          <ul className="flex gap-x-6 lg:gap-x-0 xl:gap-x-6 mx-auto">
            {NavData.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.target)}
                  className="block py-2 px-3 lg:px-2 xl:px-3 text-Text-Neutral-Primary hover:bg-Bg-SemanticWarning-Subtle hover:text-Text-Brand-Primary rounded-[6px] transition-all duration-300 ease-in-out"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="text-white font-medium rounded-[100px] text-[16px] px-6 py-3 text-center bg-Text-Brand-Primary"
          >
            Download CV
          </button>
        </div>

        {/* Mobile Hamburger Button (visible up to md, hidden on lg+) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-Text-Neutral-Primary focus:outline-none"
          >
            {isOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-Text-Neutral-Primary focus:outline-none"
          >
            {isOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with smooth transition */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        } bg-Bg-Neutral-Primary px-6`}
      >
        <ul className="flex flex-col gap-y-3 py-3">
          {NavData.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => {
                  scrollToSection(item.target);
                  setIsOpen(false);
                }}
                className="w-full text-left block py-2 px-3 text-Text-Neutral-Primary hover:bg-Bg-SemanticWarning-Subtle hover:text-Text-Brand-Primary rounded-[6px] transition-all"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="mt-4 w-full text-white font-medium rounded-[100px] text-[16px] px-6 py-3 text-center bg-Text-Brand-Primary mb-5"
        >
          Download CV
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

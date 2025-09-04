const Navbar = ({ scrollToSection, refs }) => {
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
    <nav className="bg-Bg-Neutral-Primary">
      <div className="flex flex-wrap items-center justify-between mx-auto px-6 py-4 sm:px-4">
        {/* Brand */}
        <div
          className="text-2xl text-Text-Neutral-Primary md:mr-10 cursor-pointer"
          onClick={() => scrollToSection(refs.homeRef)}
        >
          Md Al Amin
        </div>

        {/* Menu for desktop */}
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <ul className="flex gap-x-6 mx-auto">
            {NavData.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.target)}
                  className="block py-2 px-3 text-Text-Neutral-Primary hover:bg-Bg-SemanticWarning-Subtle hover:text-Text-Brand-Primary rounded-[6px] transition-all duration-300 ease-in-out"
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
      </div>
    </nav>
  );
};

export default Navbar;

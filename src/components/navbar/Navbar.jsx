import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavData = [
    { id: 1, name: "Home" },
    { id: 2, name: "About Us" },
    { id: 3, name: "Research" },
    { id: 4, name: "Education" },
    { id: 5, name: "Experience" },
    { id: 6, name: "Skills" },
    { id: 7, name: "Portfolio" },
    { id: 8, name: "Contact" },
  ];

  return (
    <nav className="bg-Bg-Neutral-Primary">
      <div className="flex flex-wrap items-center justify-between mx-auto px-6 py-4 sm:px-4">
        {/* Brand */}
        <div className="text-2xl text-Text-Neutral-Primary">John Anderson</div>

        {/* Hamburger → only for sm */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Menu for md and above */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <ul className="flex gap-x-6">
            {NavData.map((item) => (
              <li key={item.id}>
                <a
                  className="block py-2 px-3 text-Text-Neutral-Primary hover:bg-Bg-SemanticWarning-Subtle hover:text-Text-Brand-Primary rounded-[6px] transition-all duration-300 ease-in-out"
                  href="#"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          {/* Button always visible from md and up */}
          <button
            type="button"
            className="hidden md:block text-white font-medium rounded-[100px] text-[16px] px-6 py-3 text-center bg-Text-Brand-Primary"
          >
            Download CV
          </button>
        </div>
      </div>

      {/* Mobile menu (sm only) */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col space-y-2">
            {NavData.map((item) => (
              <li key={item.id}>
                <a
                  className="block py-2 px-3 text-Text-Neutral-Primary hover:bg-Bg-SemanticWarning-Subtle hover:text-Text-Brand-Primary rounded-[6px] transition-all duration-300 ease-in-out"
                  href="#"
                >
                  {item.name}
                </a>
              </li>
            ))}
            {/* Button at the end in mobile menu */}
            <li>
              <button
                type="button"
                className="w-full text-white font-medium rounded-[100px] text-[16px] px-6 py-3 text-center bg-Text-Brand-Primary"
              >
                Download CV
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

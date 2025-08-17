const Navbar = () => {
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
    <div>
      <nav className="bg-Bg-Neutral-Primary">
        <div className="flex flex-wrap items-center justify-between mx-auto px-[24px] py-[24px]">
          <div className="text-2xl text-Text-Neutral-Primary">
            John Anderson
          </div>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white font-medium rounded-[100px] text-[16px] px-6 py-4 text-center bg-Text-Brand-Primary"
            >
              Download CV
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
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
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex justify-between gap-x-[14px] px-3 py-4">
              {NavData.map((item) => (
                <li key={item.id}>
                  <a
                    className="block py-2 px-3 text-Text-Neutral-Primary  md:bg-transparent hover:bg-Bg-SemanticWarning-Subtle hover:text-Text-Brand-Primary rounded-[6px]  transition-all duration-300 ease-in-out "
                    aria-current="page"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import { FaGoogleScholar, FaLocationDot } from "react-icons/fa6";
import { IoCallSharp, IoMail } from "react-icons/io5";
import { LiaOrcid } from "react-icons/lia";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <div
      className="px-[100px] py-[80px] bg-Bg-Brand-Dark flex justify-between items-start gap-x-15 
      max-xs:p-3 max-xs:flex-col max-xs:gap-x-0 
      sm:px-20 sm:py-10 sm:flex-col sm:gap-y-10"
    >
      {/* Left side */}
      <div className="w-[40%] max-xs:w-full max-sm:w-full">
        <h3
          className="text-4xl font-semibold text-Bg-Neutral-White pb-5 
          max-xs:pb-3 sm:text-3xl sm:pb-4"
        >
          John Anderson
        </h3>
        <p className="text-Text-Brand-Inverse max-sm:text-base">
          Dedicated researcher specializing in artificial intelligence and
          machine learning, with a focus on natural language processing and
          computer vision. Passionate about advancing AI technology through
          innovative research and practical applications.
        </p>
      </div>

      {/* Right side */}
      <div
        className="w-[60%] flex justify-between items-end 
        max-xs:w-full max-xs:flex-wrap max-xs:gap-x-5 max-xs:justify-start 
        sm:w-full sm:flex-wrap sm:gap-y-8 sm:justify-between"
      >
        {/* Quick Links */}
        <div>
          <h4
            className="text-2xl font-semibold text-white pb-5 
            max-xs:pt-6 max-xs:pb-3 sm:text-xl sm:pb-4"
          >
            Quick Links
          </h4>
          <ul
            className="text-xl text-Text-Brand-Inverse flex flex-col gap-y-5 
            max-xs:text-base max-xs:font-normal sm:text-base sm:gap-y-3"
          >
            <li>Home</li>
            <li>About Me</li>
            <li>Research</li>
            <li>Education</li>
          </ul>
        </div>

        {/* Second Links */}
        <div>
          <ul
            className="text-xl text-Text-Brand-Inverse flex flex-col gap-y-5 
            max-xs:text-base max-xs:font-normal sm:text-base sm:gap-y-3"
          >
            <li>Experience</li>
            <li>Skills</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="max-xs:pt-6 sm:pt-6">
          <h4
            className="text-2xl font-semibold text-white pb-5 
            max-xs:pb-3 sm:text-xl sm:pb-4"
          >
            Contact
          </h4>
          <ul
            className="text-xl text-Text-Brand-Inverse flex flex-col gap-y-5 
            sm:text-base sm:gap-y-3"
          >
            <li className="flex items-center max-xs:text-base max-xs:font-normal">
              <span className="pr-4">
                <IoMail className="w-6 h-6 max-xs:w-4 max-xs:h-4 sm:w-5 sm:h-5" />
              </span>
              johnanderaon@gmail.com
            </li>
            <li className="flex items-center max-xs:text-base max-xs:font-normal">
              <span className="pr-4">
                <IoCallSharp className="w-6 h-6 max-xs:w-4 max-xs:h-4 sm:w-5 sm:h-5" />
              </span>
              +1 (555) 123-4567
            </li>
            <li className="flex items-center max-xs:text-base max-xs:font-normal">
              <span className="pr-4">
                <FaLocationDot className="w-6 h-6 max-xs:w-4 max-xs:h-4 sm:w-5 sm:h-5" />
              </span>
              New York, USA
            </li>
            <li className="flex items-center gap-x-4 text-2xl sm:text-xl">
              <a
                href="https://www.linkedin.com/in/md-al-amin-b50487366/"
                target="__blank"
              >
                <TiSocialLinkedinCircular />
              </a>
              <a
                href="https://scholar.google.com/citations?user=5f7cSQQAAAAJ&hl=en"
                target="__blank"
              >
                <FaGoogleScholar />
              </a>
              <a href="https://orcid.org/0009-0008-8981-9667" target="__blank">
                <LiaOrcid />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

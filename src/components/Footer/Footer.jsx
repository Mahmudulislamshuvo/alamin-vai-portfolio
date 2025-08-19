import { FaGoogleScholar, FaLocationDot } from "react-icons/fa6";
import { IoCallSharp, IoMail } from "react-icons/io5";
import { LiaOrcid } from "react-icons/lia";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="px-[100px] py-[80px] bg-Bg-Brand-Dark flex justify-between items-start gap-x-15">
      <div className="w-[40%]">
        <h3 className="text-4xl font-semibold text-Bg-Neutral-White pb-5">
          John Anderson
        </h3>
        <p className=" text-Text-Brand-Inverse">
          Dedicated researcher specializing in artificial intelligence and
          machine learning, with a focus on natural language processing and
          computer vision. Passionate about advancing AI technology through
          innovative research and practical applications.
        </p>
      </div>
      <div className="w-[60%] flex justify-between items-end">
        <div>
          <h4 className="text-2xl font-semibold text-white pb-5">
            Quick Links
          </h4>
          <ul className="text-xl text-Text-Brand-Inverse flex flex-col gap-y-5">
            <li>Home</li>
            <li>About Me</li>
            <li>Research</li>
            <li>Education</li>
          </ul>
        </div>
        <div>
          <ul className="text-xl text-Text-Brand-Inverse flex flex-col gap-y-5">
            <li>Experience</li>
            <li>Skills</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-semibold text-white pb-5">Contact</h4>
          <ul className="text-xl text-Text-Brand-Inverse flex flex-col gap-y-5">
            <li className="flex items-center">
              <span className="pr-4">
                <IoMail className="w-6 h-6" />
              </span>
              johnanderaon@gmail.com
            </li>
            <li className="flex items-center">
              <span className="pr-4">
                <IoCallSharp className="w-6 h-6" />
              </span>
              +1 (555) 123-4567
            </li>
            <li className="flex items-center">
              <span className="pr-4">
                <FaLocationDot className="w-6 h-6" />
              </span>
              New York, USA
            </li>
            <li className="flex items-center gap-x-4">
              <TiSocialLinkedinCircular />
              <FaGoogleScholar />
              <LiaOrcid />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

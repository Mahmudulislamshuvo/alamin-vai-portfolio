import bannerpic from "../../assets/banner/NewpicBanner.png";
import { ReactTyped } from "react-typed";
import badge1 from "../../assets/banner/A+.png";
import badge2 from "../../assets/banner/Security.png";
import badge3 from "../../assets/banner/iiba.png";
import badge4 from "../../assets/banner/pmi.png";

const Banner = () => {
  return (
    <div className="bg-Bg-Neutral-Primary pb-[120px] max-xs:py-0 max-sm:py-0 lg:pb-[95px] xl:pb-[120px]">
      <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-x-10 lg:gap-x-5 xl:gap-x-10">
        <div className="py-[150px] w-full sm:py-10 lg:w-[50%] px-6 max-xs:py-5 max-xs:px-4 lg:pl-[60px] xl:pl-[160px]">
          <h2 className="font-semibold text-[40px] sm:text-[64px] lg:text-[90px] leading-[110%] text-Text-Neutral-Primary lg:text-2xl xl:text-[124px]">
            Hello
          </h2>
          <h3 className="text-3xl font-bold pl-1 text-Text-Neutral-Primary">
            I'm
          </h3>
          <h1 className="font-semibold text-[40px] sm:text-[64px] lg:text-[90px] leading-[110%] text-Text-Neutral-Primary xl:text-[124px]">
            <ReactTyped
              strings={["Md Al Amin"]}
              typeSpeed={150}
              backSpeed={50}
              loop={true}
            />
          </h1>
          <h5 className="text-lg sm:text-xl lg:text-2xl text-Text-Neutral-Primary">
            AI Research Scientist | Machine Learning Expert
          </h5>
          <p className="text-base text-Text-Neutral-Secondary pt-6 sm:pt-9 lg:pt-4 xl:pt-6">
            Dedicated researcher specializing in artificial intelligence and
            machine learning, with a focus on natural language processing and
            computer vision. Passionate about advancing AI technology through
            innovative research and practical applications.
          </p>
          <div className="lg:hidden xl:block">
            <div className="flex flex-wrap items-center gap-4 pt-6 sm:pt-9">
              <button className="font-medium px-[28px] py-3 sm:px-[33px] sm:py-4 text-white bg-Text-Brand-Primary rounded-[100000px] max-xs:w-full">
                <a href="mailto:alaminhossine@gmail.com">Contact Me</a>
              </button>
              <button className="font-medium px-[28px] py-3 sm:px-[33px] sm:py-4 text-Text-Brand-Primary border border-Text-Brand-Primary rounded-[100000px] max-xs:w-full">
                Download CV
              </button>
            </div>
            <div className="flex items-center gap-x-5 pt-20 max-xs:justify-center max-sm:justify-center max-xs:gap-x-2">
              <img
                src={badge4}
                alt="badge1"
                className="w-20 h-20 rounded-full max-xs:w-15 max-xs:h-15"
              />
              <img
                src={badge2}
                alt="badge2"
                className="w-20 h-20 rounded-full max-xs:w-15 max-xs:h-15"
              />
              <img
                src={badge3}
                alt="badge3"
                className="w-20 h-20 rounded-full max-xs:w-15 max-xs:h-15"
              />
              <img
                src={badge1}
                alt="badge4"
                className="w-20 h-20 rounded-full max-xs:w-15 max-xs:h-15"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[40%] bg-gradient-to-r from-[rgba(216,212,223,0.05)] to-[rgba(197,230,76,0.50)] rounded-sm pt-11">
          <div className="pt-5">
            <img
              src={bannerpic}
              alt=""
              className="pt-[30px] max-sm:pt-[20px] mx-auto pr-18"
            />
          </div>
        </div>
      </div>
      <div className="lg:block xl:hidden">
        <div className="flex justify-between items-center px-20">
          <div className="flex flex-wrap items-center gap-4 pt-6 sm:pt-9">
            <button className="font-medium px-[28px] py-3 sm:px-[33px] sm:py-4 text-white bg-Text-Brand-Primary rounded-[100000px] max-xs:w-full">
              <a href="mailto:alaminhossine@gmail.com">Contact Me</a>
            </button>
            <button className="font-medium px-[28px] py-3 sm:px-[33px] sm:py-4 text-Text-Brand-Primary border border-Text-Brand-Primary rounded-[100000px] max-xs:w-full">
              Download CV
            </button>
          </div>
          <div className="flex items-center gap-x-5 pt-10 max-xs:justify-center max-sm:justify-center max-xs:gap-x-2">
            <img
              src={badge4}
              alt="badge1"
              className="w-20 h-20 rounded-full max-xs:w-15 max-xs:h-15"
            />
            <img
              src={badge2}
              alt="badge2"
              className="w-20 h-20 rounded-full max-xs:w-15 max-xs:h-15"
            />
            <img
              src={badge3}
              alt="badge3"
              className="w-20 h-20 rounded-full max-xs:w-15 max-xs:h-15"
            />
            <img
              src={badge1}
              alt="badge4"
              className="w-20 h-20 rounded-full max-xs:w-15 max-xs:h-15"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

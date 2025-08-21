import bannerpic from "../../assets/banner/banner.png";

const Banner = () => {
  return (
    <div className="bg-Bg-Neutral-Primary pb-[120px] max-xs:py-0 ">
      <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-x-10">
        <div className="py-[150px] w-full lg:w-[50%] px-6 max-xs:py-5 max-xs:px-4 lg:pl-[160px]">
          <h1 className="font-semibold text-[40px] sm:text-[64px] lg:text-[124px] leading-[110%] text-Text-Neutral-Primary">
            John Anderson
          </h1>
          <h5 className="text-lg sm:text-xl lg:text-2xl text-Text-Neutral-Primary">
            AI Research Scientist | Machine Learning Expert
          </h5>
          <p className="text-base text-Text-Neutral-Secondary pt-6 sm:pt-9">
            Dedicated researcher specializing in artificial intelligence and
            machine learning, with a focus on natural language processing and
            computer vision. Passionate about advancing AI technology through
            innovative research and practical applications.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-6 sm:pt-9">
            <button className="font-medium px-[28px] py-3 sm:px-[33px] sm:py-4 text-white bg-Text-Brand-Primary rounded-[100000px] max-xs:w-full">
              Contact Me
            </button>
            <button className="font-medium px-[28px] py-3 sm:px-[33px] sm:py-4 text-Text-Brand-Primary border border-Text-Brand-Primary rounded-[100000px] max-xs:w-full">
              Download CV
            </button>
          </div>
        </div>
        <div className="w-full lg:w-[40%] bg-gradient-to-r from-[rgba(216,212,223,0.05)] to-[rgba(197,230,76,0.50)] rounded-sm pt-11">
          <div className="pt-5">
            <img
              src={bannerpic}
              alt=""
              className="pt-[30px] sm:pt-[20px] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

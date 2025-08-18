import bannerpic from "../../assets/banner/banner.png";

const Banner = () => {
  return (
    <div className=" bg-Bg-Neutral-Primary pb-[120px]">
      <div className="flex items-center justify-between gap-x-10">
        <div className="py-[150px] w-[50%] pl-[160px]">
          <h1 className="font-semibold text-[124px] leading-[110%] text-Text-Neutral-Primary">
            John Anderson
          </h1>
          <h5 className="text-2xl text-Text-Neutral-Primary">
            AI Research Scientist | Machine Learning Expert
          </h5>
          <p className="text-base text-Text-Neutral-Secondary pt-9">
            Dedicated researcher specializing in artificial intelligence and
            machine learning, with a focus on natural language processing and
            computer vision. Passionate about advancing AI technology through
            innovative research and practical applications.
          </p>
          <div className="flex items-center gap-x-4 pt-9">
            <button className="font-medium px-[33px] py-4 text-white bg-Text-Brand-Primary rounded-[100000px]">
              Contact Me
            </button>
            <button className="font-medium px-[33px] py-4 text-Text-Brand-Primary border-1 border-Text-Brand-Primary rounded-[100000px]">
              Download CV
            </button>
          </div>
        </div>
        <div className="w-[40%] bg-gradient-to-r from-[rgba(216,212,223,0.05)] to-[rgba(197,230,76,0.50)] mr-6 rounded-sm">
          <img src={bannerpic} alt="" className="pt-[53px]" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

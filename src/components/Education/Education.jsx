import PageHeader from "../CommonCoponents/PageHeader";
import Timeline from "../Education/Timeline";
import Image from "../../assets/education/Rectangle.png";
import TimeLine from "./Timeline";

const Education = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-Bg-Brand-Tertiary py-[120px] pl-[160px] pr-[93px] rounded-xl">
        <div className="pb-[80px]">
          <PageHeader title={"ACADEMIC BACKGROUND"} header={"Education"} />
        </div>
        <div>
          <div>
            {/* <div className="bg-Bg-Brand-Secondary p-4 w-[52%] rounded-lg flex justify-between gap-x-5">
              <img src={Image} alt={Image} className="h-[82px] w-[82px]" />
              <div>
                <h3 className="text-3xl font-semibold text-Text-Neutral-Primary">
                  Ph.D. in Computer Science
                </h3>
                <h5 className="text-xl font-medium text-Text-Neutral-Tertiary">
                  Stanford University
                </h5>
                <p className="text-xl text-Text-Neutral-Tertiary">
                  Advanced Machine Learning Techniques for Medical Imaging
                </p>
              </div>
            </div> */}
            <TimeLine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

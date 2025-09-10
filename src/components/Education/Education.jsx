import PageHeader from "../CommonCoponents/PageHeader";
import VerticalTimeline from "./TimeLine";

const Education = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-Bg-Brand-Tertiary py-10 md:py-[120px] pl-5 md:pl-[160px] pr-5 md:pr-[93px] rounded-xl max-xs:p-3 max-xs:bg-Bg-Neutral-Secondary sm:p-5">
        <div className="pb-[80px] max-xs:pb-6">
          <PageHeader title={"ACADEMIC BACKGROUND"} header={"Education"} />
        </div>
        <div>
          <div className="w-[95%] md:w-full px-2 md:px-0">
            <VerticalTimeline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

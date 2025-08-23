import PageHeader from "../CommonCoponents/PageHeader";
import TimeLine from "./Timeline";

const Education = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-Bg-Brand-Tertiary py-[120px] pl-[160px] pr-[93px] rounded-xl max-xs:p-3 max-xs:bg-Bg-Neutral-Secondary sm:p-5">
        <div className="pb-[80px] max-xs:pb-6">
          <PageHeader title={"ACADEMIC BACKGROUND"} header={"Education"} />
        </div>
        <div>
          <div className="max-xs:w-full sm:w-[95%]">
            <TimeLine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

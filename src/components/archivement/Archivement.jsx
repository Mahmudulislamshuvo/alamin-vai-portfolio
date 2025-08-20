import medal1 from "../../assets/archivments/medal-01.svg";
import medal2 from "../../assets/archivments/medal-02.svg";
import medal3 from "../../assets/archivments/medal-03.svg";
import ArchivementsMedal from "../CommonCoponents/ArchivementsMedal";
import PageHeader from "../CommonCoponents/PageHeader";
import StatsCard from "../CommonCoponents/StatsCard";

const Archivement = () => {
  return (
    <div className="bg-Bg-Neutral-White max-xs:bg-Bg-Neutral-Secondary md:bg-Bg-Neutral-White py-[120px] max-xs:py-9">
      <div className="container mx-auto max-xs:p-3">
        <div className="pb-[80px] max-xs:pb-6">
          <PageHeader
            title={"NOTABLE ACHIEVEMENTS"}
            header={"Key Achievements"}
          />
        </div>
        <div className="w-full flex items-center justify-between max-xs:block ">
          <div className="w-[49%] flex flex-col gap-y-4 max-xs:gap-y-3 max-xs:py-5 max-xs:w-full max-xs:bg-Bg-Neutral-White  max-xs:rounded-xl">
            <ArchivementsMedal
              icon={medal1}
              title={"Best Research Paper"}
              des={"International Conference on AI, 2023"}
            />
            <ArchivementsMedal
              icon={medal2}
              title={"Best Research Paper"}
              des={"International Conference on AI, 2023"}
            />
            <ArchivementsMedal
              icon={medal3}
              title={"Best Research Paper"}
              des={"International Conference on AI, 2023"}
            />
          </div>
          <div className="w-[49%] max-xs:mt-5 max-xs:w-full">
            <div className="flex flex-wrap gap-4">
              <StatsCard
                width="1/2"
                value="8"
                label="Research Paper Published"
              />
              <StatsCard
                width="1/2"
                value="8"
                label="Research Paper Published"
              />
              <StatsCard
                width="1/2"
                value="8"
                label="Research Paper Published"
              />
              <StatsCard
                width="1/2"
                value="8"
                label="Research Paper Published"
              />
              <StatsCard
                width="full"
                value="8"
                label="Research Paper Published"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archivement;

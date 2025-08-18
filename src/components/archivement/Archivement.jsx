import medal1 from "../../assets/archivments/medal-01.svg";
import medal2 from "../../assets/archivments/medal-02.svg";
import medal3 from "../../assets/archivments/medal-03.svg";
import ArchivementsMedal from "../CommonCoponents/ArchivementsMedal";
import StatsCard from "../CommonCoponents/StatsCard";

const Archivement = () => {
  return (
    <div className="bg-Bg-Neutral-White sm:bg-Bg-Neutral-Secondary md:bg-Bg-Neutral-White py-[120px]">
      <div className="container mx-auto">
        <div className="pb-[80px]">
          <h5 className="font-semibold text-Text-Brand-Primary">
            NOTABLE ACHIEVEMENTS
          </h5>
          <h3 className="font-semibold text-[60px] leading-[120%] text-Text-Neutral-Primary">
            Key Achievements
          </h3>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="w-[49%] flex flex-col gap-y-4">
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
          <div className="w-[49%]">
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

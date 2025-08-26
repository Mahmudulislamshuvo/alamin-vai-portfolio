import PageHeader from "../CommonCoponents/PageHeader";
import SkillsPercentage from "../CommonCoponents/SkillsPercentage";

const SkillsAndTools = () => {
  const skills1 = [
    { name: "Python", percentage: 80, color: "#FF7636" },
    { name: "TensorFlow", percentage: 95, color: "#FF7636" },
    { name: "PyTorch", percentage: 20, color: "#FF7636" },
    { name: "Java", percentage: 75, color: "#FF7636" },
  ];

  return (
    <div className="py-[120px] max-xs:py-9 max-xs:bg-Bg-Neutral-Secondary max-xs:px-3">
      <div className="container mx-auto">
        <div className="pb-[80px] max-xs:pb-6 sm:pb-8">
          <PageHeader
            title={"TECHNICAL EXPERTISE & METHODS"}
            header={"Skills & Tools"}
          />
        </div>
        <div className="flex gap-x-11 max-xs:gap-y-3 max-xs:gap-x-0 max-xs:flex-col max-sm:flex-col sm:gap-y-4">
          <SkillsPercentage skills={skills1} />
          <SkillsPercentage skills={skills1} />
          <SkillsPercentage skills={skills1} />
          <SkillsPercentage skills={skills1} />
        </div>
      </div>
    </div>
  );
};

export default SkillsAndTools;

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
    <div className="py-[120px]">
      <div className="container mx-auto">
        <div className="pb-[80px]">
          <PageHeader
            title={"TECHNICAL EXPERTISE & METHODS"}
            header={"Skills & Tools"}
          />
        </div>
        <div className="flex gap-x-11">
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

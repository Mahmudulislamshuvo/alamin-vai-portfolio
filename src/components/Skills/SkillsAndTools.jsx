import PageHeader from "../CommonCoponents/PageHeader";
import SkillsPercentage from "../CommonCoponents/SkillsPercentage";

const SkillsAndTools = () => {
  const skills = [
    {
      id: 1,
      category: "Programming & Development",
      items: [
        { id: 1, name: "Python", percentage: 85, color: "#FF7636" },
        { id: 2, name: "Java", percentage: 75, color: "#FF7636" },
        { id: 3, name: "JavaScript", percentage: 70, color: "#FF7636" },
        { id: 4, name: "C++", percentage: 60, color: "#FF7636" },
      ],
    },
    {
      id: 2,
      category: "Cybersecurity",
      items: [
        { id: 1, name: "Network Security", percentage: 80, color: "#FF7636" },
        {
          id: 2,
          name: "Penetration Testing",
          percentage: 65,
          color: "#FF7636",
        },
        { id: 3, name: "Firewalls & VPNs", percentage: 75, color: "#FF7636" },
        { id: 4, name: "Cryptography", percentage: 60, color: "#FF7636" },
      ],
    },
    {
      id: 3,
      category: "Data & AI",
      items: [
        { id: 1, name: "TensorFlow", percentage: 95, color: "#FF7636" },
        { id: 2, name: "PyTorch", percentage: 75, color: "#FF7636" },
        { id: 3, name: "SQL / NoSQL", percentage: 80, color: "#FF7636" },
        {
          id: 4,
          name: "Data Visualization (Power BI, Tableau)",
          percentage: 70,
          color: "#FF7636",
        },
      ],
    },
    {
      id: 4,
      category: "Cloud & DevOps",
      items: [
        { id: 1, name: "AWS / Azure / GCP", percentage: 80, color: "#FF7636" },
        { id: 2, name: "Docker", percentage: 85, color: "#FF7636" },
        { id: 3, name: "Kubernetes", percentage: 75, color: "#FF7636" },
        {
          id: 4,
          name: "CI/CD (Jenkins, GitHub Actions)",
          percentage: 70,
          color: "#FF7636",
        },
      ],
    },
  ];

  return (
    <div className="py-20 px-2 md:py-[120px] md:px-0">
      <div className="container mx-auto">
        <div className="pb-10 md:pb-[80px] max-xs:pb-6 sm:pb-8">
          <PageHeader
            title={"TECHNICAL EXPERTISE & METHODS"}
            header={"Skills & Tools"}
          />
        </div>

        {/* Css issue somehow adjust */}
        <div className="xl:hidden">
          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-wrap xl:flex-row gap-y-4 md:gap-x-11">
            <SkillsPercentage skills={skills} />
          </div>
        </div>

        <div className="max-sm:hidden sm:hidden xl:block">
          <div className="flex gap-x-11 max-xs:gap-y-3 max-xs:gap-x-0 max-xs:flex-col max-sm:flex-col sm:gap-y-4">
            <SkillsPercentage skills={skills} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsAndTools;

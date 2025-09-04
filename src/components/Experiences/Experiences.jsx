import CustomAccordion from "../CommonCoponents/CustomAccordion";
import PageHeader from "../CommonCoponents/PageHeader";
import icon1 from "../../assets/experience/jat_apperal_group.png";
import icon2 from "../../assets/experience/logo.png";

const Experiences = () => {
  const projects = [
    {
      id: 1,
      title: "Business Analyst",
      subtitle: "Jay Apparel Group LLC",
      location: "New York",
      period: "July 2025 - Present",
      icon: icon1,
      orderlist: [
        {
          id: 1,
          task: "Utilize knowledge of business analysis concepts and Software Development Life Cycle",
        },
        {
          id: 2,
          task: "Gather data, analyze, and make recommendations to meet project objectives, prepare client presentations, and assist in pre-call planning.",
        },
        {
          id: 3,
          task: "Ensure communication and information flow between business and technology teams.",
        },
        {
          id: 4,
          task: "Maintain client relationships by consulting on customer and competitor strategies, business solutions, and management decisions.",
        },
        {
          id: 5,
          task: "Supported cross-functional projects with business data analysis and system documentation",
        },
        {
          id: 6,
          task: "Maintained ERP and network systems, ensuring data integrity and usability.Create reports and presentations utilizing qualitative analysis regarding companies, markets, and industry trends.",
        },
        {
          id: 7,
          task: "Provide requirements gathering, documentation, data analysis to support planning, prioritization, and decision-making.",
        },
        {
          id: 8,
          task: "Assess proposed solutions to determine which fit the business need, identify gaps and shortcomings in solutions and determine necessary workarounds and/or changes to the solutions proposed",
        },
        {
          id: 9,
          task: "Compile and maintain company profiles and reports.",
        },
        {
          id: 10,
          task: "Conduct weekly client updates on the progress of research, both in-person and over the phone.",
        },
      ],
    },
    {
      id: 2,
      title: "Senior Merchandiser",
      subtitle: "Uni Gears Ltd. (Gears Group)",
      location: "Dhaka , Bangladesh",
      period: "Aug 2018 - Aug 2023",
      icon: icon2,
      orderlist: [
        {
          id: 1,
          task: "Independently manage buyer accounts and orders, ensuring smooth execution from development to final shipment.",
        },
        {
          id: 2,
          task: "Prepare accurate garment costing and pricing, maintaining competitiveness in line with buyer expectations.",
        },
        {
          id: 3,
          task: "Lead all merchandising responsibilities related to Tops and Bottoms, including Time & Action (T&A) planning and follow-ups.",
        },
        {
          id: 4,
          task: "Drive new product development, overseeing all sampling processes and ensuring timely proto, fit, and pre-production submissions.",
        },
        {
          id: 5,
          task: "Source fabrics, trims, and accessories from reliable suppliers, ensuring quality and timely delivery in accordance with the TNA plan.",
        },
        {
          id: 6,
          task: "Obtain buyer approvals for trims, accessories, lab dips, and other development elements.",
        },
        {
          id: 7,
          task: "Maintain strong liaison with buyers, buying offices, factories, and internal PP & QA departments to streamline communication and execution.",
        },
        {
          id: 8,
          task: "Implement and monitor ERP systems for order entry, production tracking, and shipment follow-up.",
        },
        {
          id: 9,
          task: "Control and monitor production status daily to ensure adherence to customer quality standards and shipment deadlines.",
        },
        {
          id: 10,
          task: "Coordinate with factories on yarn, knitting, dyeing, and garment production stages, resolving issues proactively.",
        },
        {
          id: 11,
          task: "Ensure timely shipments by closely monitoring suppliers, production teams, and logistics partners.",
        },
        {
          id: 12,
          task: "Manage key buyer accounts and follow-ups with Outerstuff, Weatherproof, DICK’S Sporting Goods, Target AU, Kmart, Costco Wholesale, Intersports, Sports Direct, and UMBRO.",
        },
      ],
    },
    {
      id: 3,
      title: "Merchandiser",
      subtitle: "Uni Gears Ltd. (Gears Group)",
      location: "Dhaka , Bangladesh",
      period: "Jan 2020 - Jul 2022",
      icon: icon2,
      orderlist: [
        {
          id: 1,
          task: "Manage and execute multiple buyers’ orders independently with accountability.",
        },
        {
          id: 2,
          task: "Prepare garment costing and pricing with accuracy and competitiveness.",
        },
        {
          id: 3,
          task: "Source fabrics, trims, and accessories in alignment with buyer and production requirements.",
        },
        {
          id: 4,
          task: "Coordinate effectively with sample sections and factories as needed.",
        },
        {
          id: 5,
          task: "Maintain strong liaison with buyers, as well as PP and QA departments, ensuring smooth communication.",
        },
        {
          id: 6,
          task: "Develop and monitor Time and Action (T&A) plans to drive on-time execution.",
        },
        {
          id: 7,
          task: "Oversee and control production status to meet buyer expectations.",
        },
        {
          id: 8,
          task: "Ensure timely shipment of all orders while maintaining quality standards.",
        },
        {
          id: 9,
          task: "Implement and monitor ERP software for effective order and production management.",
        },
        {
          id: 10,
          task: "Handle follow-ups with key clients, including Outerstuff, Weatherproof, Target AU, Kmart, Intersports, Sports Direct, and UMBRO.",
        },
      ],
    },
    {
      id: 4,
      title: "Assistant Merchandiser",
      subtitle: "Uni Gears Ltd. (Gears Group)",
      location: "Dhaka , Bangladesh",
      period: "Aug 2018 - Dec 2019",
      icon: icon2,
      orderlist: [
        {
          id: 1,
          task: "Oversee all sample developments and production processes with a strong sense of personal responsibility.",
        },
        {
          id: 2,
          task: "Obtain customer approvals for trims and accessories.",
        },
        {
          id: 3,
          task: "Coordinate with factories on lab dips, yarn, knitting, and proto submissions in line with established timelines.",
        },
        {
          id: 4,
          task: "Maintain effective liaison with buyers, as well as PP and QA departments.",
        },
        {
          id: 5,
          task: "Enter and manage orders in the ERP system.",
        },
        {
          id: 6,
          task: "Monitor and control production progress to ensure alignment with customer requirements.",
        },
        {
          id: 7,
          task: "Follow up with suppliers to in-house trims and accessories as per the TNA plan.",
        },
        {
          id: 8,
          task: "Manage follow-ups with key clients, including Outerstuff, Target AU, Kmart, Intersports, Sports Direct, and UMBRO.",
        },
      ],
    },
  ];

  return (
    <div className="">
      <div className="container mx-auto ">
        <div className="rounded-xl bg-Bg-Brand-Tertiary px-[160px] py-[120px] max-xs:p-3 sm:p-5 shadow-[0px_0px_25px_-14px_#000]">
          <div className="pb-[80px] max-xs:pb-5">
            <PageHeader
              title={"PROFESSIONAL & RESEARCH ROLES"}
              header={"Experience"}
            />
          </div>
          <div>
            <CustomAccordion experienceData={projects} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;

import PageHeader from "../CommonCoponents/PageHeader";

const AboutMe = () => {
  const researchTopics = [
    {
      id: 1,
      title: "AI-Driven Cybersecurity Ecosystems",
      description:
        "Building autonomous multi-agent systems for real-time threat detection, response, and recovery.",
    },
    {
      id: 2,
      title: "Quantum-Integrated Security",
      description:
        "Designing AI frameworks resilient to quantum-enabled cyberattacks and next-generation threats.",
    },
    {
      id: 3,
      title: "Autonomous Industrial Decision Systems",
      description:
        "Applying reinforcement learning to automate scheduling, routing, and procurement tasks.",
    },
    {
      id: 4,
      title: "Generative AI for Manufacturing",
      description:
        "Using generative models to accelerate production workflow design and rapid prototyping.",
    },
    {
      id: 5,
      title: "Federated & Privacy-Preserving AI",
      description:
        "Developing collaborative AI training across distributed sites without compromising data privacy.",
    },
    {
      id: 6,
      title: "AI-Powered Business Intelligence",
      description:
        "Leveraging predictive analytics and ERP integration to optimize supply chains and boost competitiveness.",
    },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto">
        {/* Parent container */}
        <div className="px-[160px] py-[160px] max-[479px]:p-3 bg-Bg-Brand-Tertiary flex flex-col lg:flex-row items-start gap-8 rounded-2xl max-sm:p-3 sm:px-5 sm:py-5 shadow-[0px_0px_25px_-14px_#000]">
          {/* About Me Content */}
          <div className="w-full lg:w-[48%]">
            <div className="pb-[80px] max-[479px]:pb-6 sm:pb-6">
              <PageHeader header={"About Me"} />
            </div>
            <div className="flex flex-col gap-4 text-justify">
              <p className="text-base max-[479px]:text-base text-Text-Black">
                I’m <span className="font-bold">MD AL AMIN</span>, graduated
                from Daffodil International University in 2018 with a BSc in
                Textile Engineering. Early in my career in apparel manufacturing
                industry, I recognized the transformative potential of
                integrating automation and enterprise resource planning (ERP)
                into industrial operations. This led me to pursue advanced
                studies, including a Master of Business Administration in
                Textiles at the Bangladesh University of Textiles and, more
                recently, a Master of Science in Information Technology at St.
                Francis College. During my most recent Mast of Science program,
                I focused my research on developing artificial intelligence,
                adaptive, and predictive cybersecurity frameworks. I worked
                extensively on projects such as dual-encoder adversarial
                learning for cloud-based intrusion detection, spatio-temporal
                graph neural networks for connected and automated transport
                security, and quantum machine learning–integrated cybersecurity
                systems. My work introduced novel architectures for detecting
                sophisticated cyberattacks, predicting intrusions seconds before
                they occur, and securing communications against quantum-enabled
                threats.
              </p>
              <p className="text-base max-[479px]:text-base text-Text-Black pt-4">
                Right now, I work at{" "}
                <span className="font-bold px-1">
                  Jay Apparel Group in New York
                </span>
                as a <span className="font-bold">Business Analyst</span>. My
                day-to-day is all about solving problems and creating bridges
                between business needs and technology. Whether it’s analyzing
                data, keeping ERP and network systems running smoothly, and
                turning complex insights into clear client presentations, I make
                sure projects move forward efficiently. I enjoy being the person
                who can translate between tech teams and business leaders so
                everyone feels aligned and supported. Before moving into this
                role, I spent over five years in the
                <span className="font-bold px-1">
                  textile and apparel industry
                </span>
                in Bangladesh, working my way up from Assistant Merchandiser to
                Senior Merchandiser at Uni Gears Ltd. I managed international
                buyer accounts, oversaw product development, and made sure
                shipments for brands like Target, Costco, and UMBRO went out on
                time and at the right quality. Those years taught me how to
                handle pressure, keep communication flowing across cultures, and
                find solutions when things didn’t go as planned.
              </p>
              <p className="text-base max-[479px]:text-base text-Text-Black pt-4">
                My research interests lie at the intersection of artificial
                intelligence, cybersecurity, and industrial operations, with a
                focus on designing intelligent systems that enhance the
                resilience, efficiency, and security of critical U.S.
                infrastructure.
              </p>
            </div>
            <div className="pt-5 text-justify">
              <h3 className="text-2xl font-bold text-Text-Neutral-Primary">
                Research Interests
              </h3>
              <p className="text-base max-[479px]:text-base ttext-Text-Black pt-4">
                My future research will focus on building autonomous AI-driven
                cybersecurity ecosystems that can detect, respond to, and
                recover from threats without human intervention. My goal is to
                integrate multi-agent reinforcement learning into enterprise and
                industrial security platforms, each AI agent will specialize in
                a distinct function real-time anomaly detection, vulnerability
                assessment, incident containment, and system recovery
                coordinating through a secure, distributed communication
                protocol. Such systems will continuously learn from both
                simulated attack scenarios and live operational data, enabling
                proactive defense adaptation. Using techniques such as
                graph-based threat modeling and adversarial training, my work
                will ensure that these agents anticipate evolving attack
                patterns. Recovery protocols will automate service restoration,
                configuration hardening, and forensic reporting, and
                uninterrupted operations to reduce response times from hours to
                seconds.
              </p>
            </div>
          </div>

          {/* Research Interests */}
          <div className="w-full lg:w-[48%] flex flex-col gap-6 max-[479px]:pt-8">
            <h3 className="text-4xl font-semibold pb-4 text-Text-Neutral-Primary">
              Research Area
            </h3>
            <div className="flex flex-col gap-y-4">
              <p className="text-base max-[479px]:text-base text-Text-Black pt-4">
                My research interests lie at the intersection of artificial
                intelligence, cybersecurity, and industrial operations, with a
                focus on designing intelligent systems that enhance the
                resilience, efficiency, and security of critical U.S.
                infrastructure.
              </p>
              {/* Item 1 */}
              {researchTopics.map((data) => (
                <div>
                  <h4 className="font-semibold text-[60px] leading-[110%] text-Text-Brand-Primary pb-2 max-[479px]:text-4xl">
                    {data.id}
                  </h4>
                  <h5 className="text-2xl font-medium text-Text-Neutral-Primary pb-2 max-[479px]:text-xl">
                    {data.title}
                  </h5>
                  <p className="text-base text-Text-Black max-[479px]:text-sm">
                    {data.description}
                  </p>
                </div>
              ))}

              {/* <div>
                <h4 className="font-semibold text-[60px] leading-[110%] text-Text-Brand-Primary pb-2 max-[479px]:text-4xl">
                  02
                </h4>
                <h5 className="text-2xl font-medium text-Text-Neutral-Primary pb-2 max-[479px]:text-xl">
                  Big Data & AI Tools
                </h5>
                <p className="text-base text-Text-Neutral-Secondary max-[479px]:text-sm">
                  Using Hadoop, Spark, MapReduce, and AI solutions for data
                  transformation and predictive modeling.
                </p>
              </div>

       
              <div>
                <h4 className="font-semibold text-[60px] leading-[110%] text-Text-Brand-Primary pb-2 max-[479px]:text-4xl">
                  03
                </h4>
                <h5 className="text-2xl font-medium text-Text-Neutral-Primary pb-2 max-[479px]:text-xl">
                  Visualization & Project Management
                </h5>
                <p className="text-base text-Text-Neutral-Secondary max-[479px]:text-sm">
                  Expert in Tableau, PowerBI, JIRA, Confluence, and reporting
                  dashboards for effective project tracking and visualization.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

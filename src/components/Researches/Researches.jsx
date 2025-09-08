import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import PageHeader from "../CommonCoponents/PageHeader";
import CurrentResearchCart from "../CommonCoponents/CurrentResearchCart";
import PublishedReserach from "../CommonCoponents/PublishedReserach";
import imgResearch from "../../assets/reserach/rtic-capa.jpg";
import Published3 from "../../assets/reserach/Published3.jpg";
import currentIEEE1 from "../../assets/reserach/IEEE.png";
import currentMadrid1 from "../../assets/reserach/madrid.png";
import currentLanguage1 from "../../assets/reserach/language.png";

const Researches = () => {
  // State for toggling view
  const [showAllCurrent, setShowAllCurrent] = useState(false);
  const [showAllPublished, setShowAllPublished] = useState(false);

  const currentResearches = [
    {
      id: 1,
      image: currentIEEE1,
      title:
        "Explainable Deep Malware Detection in IoT Devices Using CNN-BiLSTM",
      des: "2025 IEEE International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN), 31 July - 2 August 2025, Bangladesh Army University of Science and Technology (BAUST), Saidpur, Nilphamari, Bangladesh",
    },
    {
      id: 2,
      image: currentIEEE1,
      title:
        "Self-Supervised Representation Learning for Human Activity Recognition Using Inertial Sensor Data",
      des: "2025 IEEE International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN), 31 July - 2 August 2025, Bangladesh Army University of Science and Technology (BAUST), Saidpur, Nilphamari, Bangladesh",
    },
    {
      id: 3,
      image: currentIEEE1,
      title:
        "MoraleTrack: A Dual-Phase Transformer-Based Framework for Sentiment-Aware Team Morale Forecasting in Agile Project Environments",
      des: "3rd International Conference on Artificial Intelligence, Blockchain, and Internet of Things, (AIBThings), September 06 – 07, 2025, CMU, USA",
    },
    {
      id: 4,
      image: currentMadrid1,
      title:
        "SmolLab_SEU at CheckThat! 2025: How Well Do Multilingual Transformers Transfer Across News Domains for Cross-lingual Subjectivity Detection?",
      des: "CLEF 2025 Conference and Labs of the Evaluation Forum Information Access Evaluation meets Multilinguality, Multimodality, and Visualization, 9 - 12 September 2025, Madrid - Spain",
    },
    {
      id: 5,
      image: currentLanguage1,
      title:
        "Hinterwelt@LT-EDI 2025: A Transformer-Based Detection of Caste and Migration Hate Speech in Tamil Social Media",
      des: "Fifth workshop on Language Technology for Equality, Diversity, Inclusion, LTEDI 2025, Sep 09 2025, Naples, Italy",
    },
    {
      id: 6,
      image: currentLanguage1,
      title:
        "Hinterwelt@LT-EDI 2025: A Transformer-Based Approach for Identifying Racial Hoaxes in Code-Mixed Hindi-English Social Media Narratives",
      des: "Fifth workshop on Language Technology for Equality, Diversity, Inclusion, LTEDI 2025, Sep 09 2025, Naples, Italy",
    },
    {
      id: 7,
      image: currentIEEE1,
      title:
        "Dual-Encoder Adversarial Learning for Cloud-Based Cyber Intrusion Detection",
      des: "Research Papper",
    },
    {
      id: 8,
      image: currentIEEE1,
      title:
        "Physics-Informed Self-Supervised Diagnosis of Rotating Machinery Using Latent ODEs and Transformer Encoders",
      des: "Research Papper",
    },
    {
      id: 9,
      image: currentIEEE1,
      title:
        "Look-Ahead Cyber-Threat Forecasting for Connected and Automated Transport: A Spatio-Temporal Graph Learning Approach",
      des: "Research Papper",
    },
  ];

  const publishedResearches = [
    {
      id: 1,
      image: imgResearch,
      title:
        "Enhancing Proactive Cyber Defense: A Theoretical Framework for AI-Driven Predictive Cyber Threat Intelligence",
      des: "The rapid evolution of cyber threats and the dynamic nature of the threat landscape have necessitated the development of...",
      publish: "Journal of Technologies Information and Communication",
      year: "2025",
      papername: "Conference Paper",
      link: "10.1145/3723178.3723226",
      btnName: "View Paper",
      linkbtn: "https://doi.org/10.55267/rtic/16176",
    },
    {
      id: 2,
      image: imgResearch,
      title:
        "Quantum Machine Learning for Enhanced Cybersecurity: Proposing a Hypothetical Framework for Next-Generation Security Solutions",
      des: "This study introduces a Quantum Machine Learning Cybersecurity Framework that leverages quantum computing and...",
      publish:
        "IEEE Conference on Computing Applications and Systems, COMPAS 2024",
      year: "2024",
      papername: "Conference Paper",
      link: "10.1145/3723178.3723226",
      btnName: "View Paper",
      linkbtn: "https://doi.org/10.55267/rtic/15824",
    },
    {
      id: 3,
      image: Published3,
      title:
        "Quantum Machine Learning for Enhanced Cybersecurity: Proposing a Hypothetical Framework for Next-Generation Security Solutions",
      des: "The rapid adoption of AI in educational technology is changing learning settings, making...",
      ConferencePaper:
        "20th Workshop on Innovative Use of NLP for Building Educational Applications, July 31 and August 1, 2025.",
      year: "2024",
      papername: "Conference Paper",
      link: "10.1145/3723178.3723226",
      btnName: "View Paper",
      linkbtn: "https://doi.org/10.18653/v1/2025.bea-1.88",
    },
  ];

  // Displayed data based on toggle
  const displayedCurrent = showAllCurrent
    ? currentResearches
    : currentResearches.slice(0, 4);

  const displayedPublished = showAllPublished
    ? publishedResearches
    : publishedResearches.slice(0, 4);

  return (
    <div className="container mx-auto">
      <div className="py-[120px] max-xs:py-9 max-xs:bg-Bg-Neutral-Secondary">
        <div className="pb-[80px] max-xs:pb-6 max-xs:px-3 sm:pb-6 sm:px-2">
          <PageHeader
            title={"CURRENT PROJECTS & RELATED PUBLICATIONS"}
            header={"Researches"}
          />
        </div>

        {/* Published Researches */}
        <div className="pt-10 max-xs:pt-1">
          <h3 className="text-4xl font-semibold text-Text-Brand-Primary pb-7 max-xs:gap-y-3 max-xs:px-3 sm:font-medium sm:text-2xl sm:px-2">
            PUBLISHED RESEARCHES
          </h3>
          <div className="flex flex-wrap justify-between items-center gap-y-6 max-xs:px-3 max-xs:gap-y-3">
            {displayedPublished.map((item) => (
              <PublishedReserach
                key={item.id}
                image={item.image}
                title={item.title}
                des={item.des}
                publish={item.publish}
                year={item.year}
                papername={item.papername}
                link={item.link}
                btnName={item.btnName}
                ConferencePaper={item.ConferencePaper}
                linkbtn={item.linkbtn}
              />
            ))}
          </div>
          {/* toggle button */}
          {publishedResearches.length > 3 && (
            <div className="flex justify-center items-center pt-7">
              <button
                onClick={() => setShowAllPublished(!showAllPublished)}
                className="flex items-center gap-2 text-Text-Brand-Primary text-lg"
              >
                {showAllPublished ? "Show Less" : "View All"}
                <span>
                  {showAllPublished ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Current Researches */}
        <div className="border-b-2 border-Bg-Neutral-Secondary pt-10 max-xs:pb-9">
          <h3 className="text-4xl font-semibold text-Text-Brand-Primary pb-7 max-xs:text-2xl max-xs:pb-5 max-xs:px-3 sm:font-medium sm:text-2xl">
            CURRENT RESEARCHES
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-xs:px-3">
            {displayedCurrent.map((item) => (
              <CurrentResearchCart
                key={item.id}
                image={item.image}
                title={item.title}
                des={item.des}
              />
            ))}
          </div>

          {/* toggle button */}
          {currentResearches.length > 3 && (
            <div className="flex justify-center items-center pt-7">
              <button
                onClick={() => setShowAllCurrent(!showAllCurrent)}
                className="flex items-center gap-2 text-Text-Brand-Primary text-lg"
              >
                {showAllCurrent ? "Show Less" : "View All"}
                <span>
                  {showAllCurrent ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Researches;

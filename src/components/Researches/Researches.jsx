import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import PageHeader from "../CommonCoponents/PageHeader";
import image from "../../assets/reserach/Rectangle9.png";
import CurrentResearchCart from "../CommonCoponents/CurrentResearchCart";
import PublishedReserach from "../CommonCoponents/PublishedReserach";
import image2 from "../../assets/reserach/Rectangle2.png";

const Researches = () => {
  // State for toggling view
  const [showAllCurrent, setShowAllCurrent] = useState(false);
  const [showAllPublished, setShowAllPublished] = useState(false);

  const currentResearches = [
    {
      id: 1,
      image,
      title: "Predictive Modeling for Urban Air Quality",
      des: "Developing a machine learning model to forecast air pollution levels in major urban centers using historical sensor data and meteorological variables. The project aims to support smarter city planning and real-time pollution alerts.",
    },
    {
      id: 2,
      image,
      title: "Predictive Modeling for Urban Air Quality",
      des: "Developing a machine learning model to forecast air pollution levels in major urban centers...",
    },
    {
      id: 3,
      image,
      title: "Predictive Modeling for Urban Air Quality",
      des: "Developing a machine learning model to forecast air pollution levels in major urban centers...",
    },
    {
      id: 4,
      image,
      title: "Predictive Modeling for Urban Air Quality",
      des: "Developing a machine learning model to forecast air pollution levels in major urban centers...",
    },
  ];

  const publishedResearches = [
    {
      id: 1,
      image: image2,
      title: "Predictive Modeling for Urban Air Quality",
      des: "Developing a machine learning model to forecast air pollution levels in major urban centers...",
      publish:
        "IEEE Conference on Computing Applications and Systems, COMPAS 2024",
      year: "2024",
      papername: "Conference Paper",
      link: "10.1145/3723178.3723226",
      btnName: "View Paper",
    },
    {
      id: 2,
      image: image2,
      title: "Predictive Modeling for Urban Air Quality",
      des: "Developing a machine learning model to forecast air pollution levels...",
      publish:
        "IEEE Conference on Computing Applications and Systems, COMPAS 2024",
      year: "2024",
      papername: "Conference Paper",
      link: "10.1145/3723178.3723226",
      btnName: "View Paper",
    },
    {
      id: 3,
      image: image2,
      title: "Predictive Modeling for Urban Air Quality",
      des: "Developing a machine learning model to forecast air pollution levels...",
      publish:
        "IEEE Conference on Computing Applications and Systems, COMPAS 2024",
      year: "2024",
      papername: "Conference Paper",
      link: "10.1145/3723178.3723226",
      btnName: "View Paper",
    },
    {
      id: 4,
      image: image2,
      title: "Predictive Modeling for Urban Air Quality",
      des: "Developing a machine learning model to forecast air pollution levels...",
      publish:
        "IEEE Conference on Computing Applications and Systems, COMPAS 2024",
      year: "2024",
      papername: "Conference Paper",
      link: "10.1145/3723178.3723226",
      btnName: "View Paper",
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
        <div className="pb-[80px] max-xs:pb-6 max-xs:px-3 sm:pb-6">
          <PageHeader
            title={"CURRENT PROJECTS & RELATED PUBLICATIONS"}
            header={"Researches"}
          />
        </div>

        {/* Current Researches */}
        <div className="border-b-2 border-Bg-Neutral-Secondary pb-10 max-xs:pb-9">
          <h3 className="text-4xl font-semibold text-Text-Brand-Primary pb-7 max-xs:text-2xl max-xs:pb-5 max-xs:px-3 sm:font-medium sm:text-2xl">
            CURRENT RESEARCHES
          </h3>
          <div className="flex flex-wrap justify-between items-center gap-6 max-xs:gap-y-3 max-xs:px-3">
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

        {/* Published Researches */}
        <div className="pt-10 max-xs:pt-1">
          <h3 className="text-4xl font-semibold text-Text-Brand-Primary pb-7 max-xs:gap-y-3 max-xs:px-3 sm:font-medium sm:text-2xl">
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
      </div>
    </div>
  );
};

export default Researches;

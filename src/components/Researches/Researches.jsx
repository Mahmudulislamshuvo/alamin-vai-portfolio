import { MdKeyboardArrowDown } from "react-icons/md";
import PageHeader from "../CommonCoponents/PageHeader";
import image from "../../assets/reserach/Rectangle9.png";
import CurrentResearchCart from "../CommonCoponents/CurrentResearchCart";
import PublishedReserach from "../CommonCoponents/PublishedReserach";
import image2 from "../../assets/reserach/Rectangle2.png";

const Researches = () => {
  return (
    <div className="container mx-auto">
      <div className="py-[120px]">
        <div className="pb-[80px]">
          <PageHeader
            title={"CURRENT PROJECTS & RELATED PUBLICATIONS"}
            header={"Researches"}
          />
        </div>
        <div>
          <div className="border-b-2 border-Bg-Neutral-Secondary pb-10">
            <h3 className="text-4xl font-semibold text-Text-Brand-Primary pb-7">
              CURRENT RESEARCHES
            </h3>
            <div className="flex flex-wrap justify-between items-center gap-6">
              <CurrentResearchCart
                image={image}
                title={"Predictive Modeling for Urban Air Quality"}
                des={
                  "Developing a machine learning model to forecast air pollution levels in major urban centers using historical sensor data and meteorological variables. The project aims to support smarter city planning and real-time pollution alerts."
                }
              />
              <CurrentResearchCart
                image={image}
                title={"Predictive Modeling for Urban Air Quality"}
                des={
                  "Developing a machine learning model to forecast air pollution levels in major urban centers using historical sensor data and meteorological variables. The project aims to support smarter city planning and real-time pollution alerts."
                }
              />{" "}
              <CurrentResearchCart
                image={image}
                title={"Predictive Modeling for Urban Air Quality"}
                des={
                  "Developing a machine learning model to forecast air pollution levels in major urban centers using historical sensor data and meteorological variables. The project aims to support smarter city planning and real-time pollution alerts."
                }
              />
              <CurrentResearchCart
                image={image}
                title={"Predictive Modeling for Urban Air Quality"}
                des={
                  "Developing a machine learning model to forecast air pollution levels in major urban centers using historical sensor data and meteorological variables. The project aims to support smarter city planning and real-time pollution alerts."
                }
              />
            </div>
            <div className="flex justify-center items-center pt-7">
              <button className="flex items-center gap-2 text-Text-Brand-Primary text-lg">
                View All
                <span>
                  <MdKeyboardArrowDown />
                </span>
              </button>
            </div>
          </div>
          <div className="pt-10">
            <h3 className="text-4xl font-semibold text-Text-Brand-Primary pb-7">
              PUBLISHED RESEARCHES
            </h3>
            <div className="flex flex-wrap justify-between items-center gap-6">
              <PublishedReserach
                image={image2}
                title={"Predictive Modeling for Urban Air Quality"}
                des={
                  "Developing a machine learning model to forecast air pollution levels in major urban centers using historical sensor data and meteorological variables. The project aims to support smarter city planning and real-time pollution alerts."
                }
                publish={
                  "IEEE Conference on Computing Applications and Systems, COMPAS 2024"
                }
                year={"2024"}
                papername={"Conference Paper"}
                link={"10.1145/3723178.3723226"}
                btnName={"View Paper"}
              />
              <PublishedReserach
                image={image2}
                title={"Predictive Modeling for Urban Air Quality"}
                des={
                  "Developing a machine learning model to forecast air pollution levels in major urban centers using historical sensor data and meteorological variables. The project aims to support smarter city planning and real-time pollution alerts."
                }
                publish={
                  "IEEE Conference on Computing Applications and Systems, COMPAS 2024"
                }
                year={"2024"}
                papername={"Conference Paper"}
                link={"10.1145/3723178.3723226"}
                btnName={"View Paper"}
              />
              <PublishedReserach
                image={image2}
                title={"Predictive Modeling for Urban Air Quality"}
                des={
                  "Developing a machine learning model to forecast air pollution levels in major urban centers using historical sensor data and meteorological variables. The project aims to support smarter city planning and real-time pollution alerts."
                }
                publish={
                  "IEEE Conference on Computing Applications and Systems, COMPAS 2024"
                }
                year={"2024"}
                papername={"Conference Paper"}
                link={"10.1145/3723178.3723226"}
                btnName={"View Paper"}
              />
              <PublishedReserach
                image={image2}
                title={"Predictive Modeling for Urban Air Quality"}
                des={
                  "Developing a machine learning model to forecast air pollution levels in major urban centers using historical sensor data and meteorological variables. The project aims to support smarter city planning and real-time pollution alerts."
                }
                publish={
                  "IEEE Conference on Computing Applications and Systems, COMPAS 2024"
                }
                year={"2024"}
                papername={"Conference Paper"}
                link={"10.1145/3723178.3723226"}
                btnName={"View Paper"}
              />
            </div>
            <div className="flex justify-center items-center pt-7">
              <button className="flex items-center gap-2 text-Text-Brand-Primary text-lg">
                View All
                <span>
                  <MdKeyboardArrowDown />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Researches;

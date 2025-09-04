import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PageHeader from "../CommonCoponents/PageHeader";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import cerificate1 from "../../assets/certifications/PMI-PMP-Certfication.jpg";
import cerificate2 from "../../assets/certifications/CompTIA_Security.png";
import cerificate3 from "../../assets/certifications/Generative-AI.jpg";
import CompTIA_A from "../../assets/certifications/CompTIA_A.png";
import Job_Simulation from "../../assets/certifications/Management_Job_Simulation.png";
import AccentureStrategy from "../../assets/certifications/Accenture-Strategy.png";
import CBRE_Project from "../../assets/certifications/CBRE_Project.png";
import Discover_Professional from "../../assets/certifications/Discover-Professional.png";
import Lululemon from "../../assets/certifications/Lululemon.png";
import Pepsico from "../../assets/certifications/PEPSICOn.png";
import Pwc from "../../assets/certifications/PWC.png";
import Red_Bull from "../../assets/certifications/Red_Bull.png";
import dualFace from "../../assets/certifications/Dual-Phase.png";
import Deep_Malware_Detection from "../../assets/certifications/Deep_Malware_Detection.png";
import self_Supervised from "../../assets/certifications/self-Supervised.png";

const Certifications = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const certifications = [
    {
      id: 1,
      img: cerificate1,
      title: "Project Management Professional(PMP)",
      desc: "PMP",
      year: "2024",
      button: "View",
    },
    {
      id: 2,
      img: cerificate2,
      title: "CampTIA Security+",
      desc: "CampTIA",
      year: "2025",
      button: "View",
    },

    {
      id: 3,
      img: cerificate3,
      title: "Generative AI Overview",
      desc: "PMP",
      year: "2024",
      button: "View",
    },
    {
      id: 4,
      img: CompTIA_A,
      title: "CampTIA A+",
      desc: "CampTIA",
      year: "2025",
      button: "View",
    },
    {
      id: 5,
      img: Job_Simulation,
      title: "Management Job Simulation",
      desc: "Accenture",
      year: "2024",
      button: "View",
    },
    {
      id: 6,
      img: AccentureStrategy,
      title: "Strategy Consulting Job Simulation",
      desc: "Accenture",
      year: "2024",
      button: "View",
    },
    {
      id: 7,
      img: CBRE_Project,
      title: "Project	Management	Job	Simulation",
      desc: "CBRE",
      year: "2024",
      button: "View",
    },
    {
      id: 8,
      img: Discover_Professional,
      title: "Professional	Skills	Job	Simulation",
      desc: "DISCOVER",
      year: "2024",
      button: "View",
    },
    {
      id: 9,
      img: Pepsico,
      title: "Sales	Job	Simulation",
      desc: "PEPSICO",
      year: "2025",
      button: "View",
    },
    {
      id: 10,
      img: Pwc,
      title: "Management	Consulting	Simulation",
      desc: "PWC",
      year: "2025",
      button: "View",
    },
    {
      id: 11,
      img: Red_Bull,
      title: "On-Premise	Sales	Job	Simulation",
      desc: "RedBull",
      year: "2025",
      button: "View",
    },
    {
      id: 12,
      img: Lululemon,
      title: "Omnichannel	Marketing	Job	Simulation",
      desc: "Lululemon",
      year: "2024",
      button: "View",
    },
    {
      id: 13,
      img: dualFace,
      title: "Artificial Intelligence, Blockchain",
      desc: "Northest Micihigan University",
      year: "2024",
      button: "View",
    },
    {
      id: 14,
      img: Deep_Malware_Detection,
      title: "Explainable Deep Malware Detection",
      desc: "IEEE Photonics Society Bangladesh",
      year: "2022",
      button: "View",
    },
    {
      id: 15,
      img: self_Supervised,
      title: "Explainable Deep Malware Detection",
      desc: "IEEE Photonics Society Bangladesh",
      year: "2022",
      button: "View",
    },
  ];

  const displayedCerts = showAll ? certifications : certifications.slice(0, 3);

  return (
    <div className="sm:bg-Bg-Neutral-White sm:py-3">
      <div className="container mx-auto relative max-xs:bg-Bg-Brand-Tertiary">
        <div className="bg-white px-[40px] md:px-[100px] py-[80px] rounded-xl max-xs:hidden shadow-[0px_0px_14px_2px_rgba(0,_0,_0,_0.1)]">
          <div className="mb-12 ">
            <PageHeader
              title={"PROOF OF QUALIFICATION"}
              header={"Certifications"}
            />
          </div>

          {/* Custom navigation buttons */}
          <div className="absolute top-1/2 -left-10 z-10">
            <button
              ref={prevRef}
              className={`text-3xl text-Text-Neutral-Primary ${
                isBeginning ? "opacity-35 cursor-not-allowed" : ""
              }`}
              onClick={() => swiperInstance?.slidePrev()}
              disabled={isBeginning}
            >
              <IoIosArrowBack />
            </button>
          </div>
          <div className="absolute top-1/2 -right-10 z-10">
            <button
              ref={nextRef}
              className={`text-3xl text-Text-Neutral-Primary ${
                isEnd ? "opacity-35 cursor-not-allowed" : ""
              }`}
              onClick={() => swiperInstance?.slideNext()}
              disabled={isEnd}
            >
              <IoIosArrowForward />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={40}
            slidesPerView={3}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
          >
            {certifications.map((cert) => (
              <SwiperSlide key={cert.id}>
                <div className="bg-Bg-Brand-Secondary rounded-xl">
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-70 rounded-lg"
                  />
                  <div className="px-6">
                    <h4 className="text-xl font-semibold text-Text-Neutral-Primary pt-4 pb-2 truncate w-[250px]">
                      {cert.title}
                    </h4>

                    <div className="flex justify-between items-center pb-6">
                      <p className="flex items-center gap-2 text-base text-Text-Neutral-Tertiary">
                        {cert.desc}
                        <span className="border-l h-5"></span>
                        {cert.year}
                      </p>
                      <button className="text-base text-Text-Brand-Primary">
                        {cert.button}
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* ===============For mobile only ============*/}
        <div className="block sm:hidden max-xs:p-3">
          <div className="mb-12 max-xs:mb-6">
            <PageHeader
              title={"PROOF OF QUALIFICATION"}
              header={"Certifications"}
            />
          </div>

          {/* Cards container with gap */}
          <div className="flex flex-col gap-y-3">
            {displayedCerts.map((cert) => (
              <div
                key={cert.id}
                className="bg-Bg-Brand-Secondary rounded-xl max-xs:p-3"
              >
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-70 object-cover rounded-lg"
                />
                <div className="px-6">
                  <h4 className="text-xl font-semibold text-Text-Neutral-Primary pt-4 pb-2">
                    {cert.title}
                  </h4>
                  <div className="flex justify-between items-center pb-6">
                    <p className="flex items-center gap-2 text-base text-Text-Neutral-Tertiary">
                      {cert.desc}
                      <span className="border-l h-5"></span>
                      {cert.year}
                    </p>
                    <button className="text-base text-Text-Brand-Primary">
                      {cert.button}
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Toggle Button */}
            {certifications.length > 3 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="flex items-center justify-center gap-2 text-Text-Brand-Primary text-lg"
              >
                {showAll ? "Show Less" : "View All"}
                <span>
                  {showAll ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;

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
import pic1 from "../../assets/portfolio/Deep_Malware_Detection.png";
import pic2 from "../../assets/portfolio/Dual-Phase.png";
import pic3 from "../../assets/portfolio/self-Supervised.png";
import Modal from "react-responsive-modal";
import { CgCloseO } from "react-icons/cg";

const Portfolio = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // modal states
  const [open, setOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const certifications = [
    {
      id: 1,
      img: pic1,
      title:
        "Certification of Presentation-Explainable Deep Malware Detection in IoT Devices Using CNN-BiLSTM",
      desc: "IEEE",
      year: "2025",
      button: "View",
    },
    {
      id: 2,
      img: pic3,
      title:
        "Certification of Presentation-Self-Supervised Representation Learning for Human Activity Recognition Using Inertial Sensor Data",
      desc: "IEEE",
      year: "2025",
      button: "View",
    },
    {
      id: 3,
      img: pic2,
      title:
        "Acceptance letter A Dual-Phase Transformer-Based Framework for Sentiment-Aware Team Morale Forecasting in Agile Project Environments",
      desc: "IEEE",
      year: "2025",
      button: "View",
    },
  ];

  const displayedCerts = showAll ? certifications : certifications.slice(0, 3);

  const handleModal = (cert) => {
    setSelectedCert(cert);
    setOpen(true);
  };

  const closeIcon = <CgCloseO className="w-8 h-8 text-red-500" />;

  return (
    <div className="container mx-auto relative">
      <div className="bg-Bg-Brand-Tertiary px-[40px] md:px-[100px] py-[80px] rounded-xl max-xs:hidden">
        <div className="mb-12 ">
          <PageHeader title={"PROJECTS & CONTRIBUTIONS"} header={"Portfolio"} />
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
                  <h4 className="text-xl font-semibold text-Text-Neutral-Primary pt-4 pb-2 truncate max-w-[350px]">
                    {cert.title}
                  </h4>

                  <div className="flex justify-between items-center pb-6">
                    <p className="flex items-center gap-2 text-base text-Text-Neutral-Tertiary">
                      {cert.desc}
                      {/* <span className="border-l h-5"></span> */}
                      <span className="border-l h-5"> {cert.year}</span>
                    </p>
                    <button
                      onClick={() => handleModal(cert)}
                      className="text-base text-Text-Brand-Primary cursor-pointer"
                    >
                      {cert.button}
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Only for mobile device */}
      <div className="block sm:hidden max-xs:p-3 bg-Bg-Brand-Tertiary">
        <div className="mb-12 max-xs:mb-6">
          <PageHeader title={"PROJECTS & CONTRIBUTIONS"} header={"Portfolio"} />
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
                  <button
                    onClick={() => handleModal(cert)}
                    className="text-base text-Text-Brand-Primary"
                  >
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
      {/* React Modal */}
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
          setSelectedCert(null);
        }}
        center
        closeIcon={closeIcon}
      >
        {selectedCert && (
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-3">{selectedCert.title}</h2>
            <img
              src={selectedCert.img}
              alt={selectedCert.title}
              className="w-full h-auto rounded-lg mb-4 border border-Text-Neutral-Secondary shadow"
            />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Portfolio;

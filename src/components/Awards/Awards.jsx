import PageHeader from "../CommonCoponents/PageHeader";
import { useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import cerificate1 from "../../assets/awardsMembership/PMI-Member1.jpg";
import cerificate2 from "../../assets/awardsMembership/IIBA-Membership2.jpg";
import cerificate3 from "../../assets/awardsMembership/IEEE-MEMBERSHIP3.jpg";
import cerificate4 from "../../assets/awardsMembership/IEEE-COMPUTER-SOCITY-MEMBERSHIP4.jpg";
import cerificate5 from "../../assets/awardsMembership/IEEE-Young-Professional5.jpg";
import Modal from "react-responsive-modal";
import { CgCloseO } from "react-icons/cg";

const Awards = () => {
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
      img: cerificate1,
      // title: "Full Stack Developer",
      desc: "Google",
      year: "2024",
      button: "View",
    },
    {
      id: 2,
      img: cerificate2,
      // title: "Full Stack Developer",
      desc: "Google",
      year: "2024",
      button: "View",
    },
    {
      id: 3,
      img: cerificate3,
      // title: "Full Stack Developer",
      desc: "Google",
      year: "2025",
      button: "View",
    },
    {
      id: 4,
      img: cerificate4,
      // title: "Full Stack Developer",
      desc: "Google",
      year: "2024",
      button: "View",
    },
    {
      id: 4,
      img: cerificate5,
      // title: "Full Stack Developer",
      desc: "Google",
      year: "2024",
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
    <div className="bg-Bg-Neutral-White sm:bg-Bg-Neutral-Secondary md:bg-Bg-Neutral-Secondary lg:bg-Bg-Neutral-White max-xs:bg-Bg-Neutral-Secondary ">
      <div className="container mx-auto">
        <div className="py-[120px] relative max-xs:py-9">
          <div className="pb-[80px] max-xs:px-3 max-xs:pb-6">
            <PageHeader
              title={"HONORS & ACHIEVEMENTS"}
              header={"Awards and Membership"}
            />
          </div>
          {/* For desktop and others Devices */}
          <div className="max-xs:hidden">
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
              {certifications.map((cert, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-xl border border-[#E9E8E8]">
                    <img
                      src={cert.img}
                      alt={cert.img}
                      className="w-full h-70 rounded-lg"
                    />
                    <div className="px-6">
                      {cert.title && (
                        <h4 className="text-xl font-semibold text-Text-Neutral-Primary pt-4 pb-2">
                          {cert.title}
                        </h4>
                      )}
                      <div className="flex justify-between items-center pb-6">
                        <p className="flex items-center gap-2 text-base text-Text-Neutral-Tertiary">
                          {cert.desc}
                          <span className="border-l h-5"></span>
                          {cert.year}
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
          {/* =========For mobile device only========== */}
          <div className="sm:hidden max-xs:p-3 flex flex-col gap-y-3">
            {displayedCerts.map((cert) => (
              <div key={cert.id}>
                <div className="bg-white rounded-xl border border-[#E9E8E8]">
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

export default Awards;

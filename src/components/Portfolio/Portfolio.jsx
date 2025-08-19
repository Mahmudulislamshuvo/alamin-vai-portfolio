import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import cerificate1 from "../../assets/certifications/Rectangle5.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PageHeader from "../CommonCoponents/PageHeader";

const Portfolio = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const certifications = [
    {
      id: 1,
      img: cerificate1,
      title: "Full Stack Developer",
      desc: "Google",
      year: "2024",
      button: "View",
    },
    {
      id: 2,
      img: cerificate1,
      title: "Full Stack Developer",
      desc: "Google",
      year: "2024",
      button: "View",
    },
    {
      id: 3,
      img: cerificate1,
      title: "Full Stack Developer",
      desc: "Google",
      year: "2024",
      button: "View",
    },
    {
      id: 4,
      img: cerificate1,
      title: "Full Stack Developer",
      desc: "Google",
      year: "2024",
      button: "View",
    },
  ];

  return (
    <div className="container mx-auto relative">
      <div className="bg-Bg-Brand-Tertiary px-[40px] md:px-[100px] py-[80px] rounded-xl">
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
                      {"Google/Coursera"}
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
    </div>
  );
};

export default Portfolio;

import { FaCircle } from "react-icons/fa";
import stfrancis from "../../assets/education/st-francis-college-seeklogo.png";
import bangladeshUniversity from "../../assets/education/Bangladesh_University_of_Textile.png";
import Daffodil_International_University from "../../assets/education/Daffodil_International_University.png";
import Mirzaganj_U from "../../assets/education/Mirzaganj_U.D.S_High_School.jpg";

const VerticalTimeline = () => {
  const timelineItems = [
    {
      date: "2024 - 2025",
      title: "Master of Science in Information Technology",
      subtitle: "St. Francis College, Brooklyn",
      // description: "Advanced Machine Learning Techniques for Medical Imaging",
      avatar: stfrancis,
    },
    {
      date: "2020 - 2023",
      title: "MBA in Textile Engineering Management",
      subtitle: "Bangladesh University of Textiles, Bangladesh",
      // description: "Advanced Machine Learning Techniques for Medical Imaging",
      avatar: bangladeshUniversity,
    },
    {
      date: "2014 - 2018",
      title: "Bachelor of Science in Textile Engineering",
      subtitle: "Daffodil International University, Bangladesh",
      // description: "Advanced Machine Learning Techniques for Medical Imaging",
      avatar: Daffodil_International_University,
    },
    {
      date: "Jun, 2012 - jun, 2014",
      title: "Higher Secondary Certificate",
      subtitle: "Subidkhali Govt Degree College, Bangladesh",
      // description: "Advanced Machine Learning Techniques for Medical Imaging",
      avatar: Daffodil_International_University,
    },
    {
      date: "Jan, 2011 - Dec, 2012",
      title: "Secondary School Certificate",
      subtitle: "Mirzaganj U.D.S High School",
      // description: "Advanced Machine Learning Techniques for Medical Imaging",
      avatar: Mirzaganj_U,
    },
  ];

  return (
    <section className="relative">
      {/* Vertical line */}
      <div className="pointer-events-none absolute left-5 md:left-1/2 top-0 h-full w-0.5 bg-Bg-Neutral-Tertiary md:-translate-x-1/2 z-0"></div>

      <div className="space-y-10 relative z-10">
        {timelineItems.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col md:flex-row md:items-center"
          >
            {/* Dot (mobile: left rail, desktop: center) */}
            <div className="absolute left-5 md:left-1/2 top-1 md:top-0 -translate-x-1/2 z-20">
              <FaCircle className="w-5 h-5 text-Text-Neutral-Tertiary" />
            </div>

            {/* Date (mobile: dot-এর ডান পাশে) */}
            <div className="md:hidden mb-2 pl-10">
              <span className="text-xs font-medium text-Text-Neutral-Tertiary">
                {item.date}
              </span>
            </div>

            {/* Date (desktop: বিপরীত পাশে) */}
            <div
              className={`hidden md:flex w-5/12 items-center ${
                index % 2 === 0
                  ? "justify-end pr-6"
                  : "order-2 justify-start pl-6"
              }`}
            >
              <span
                className={`font-medium text-Text-Neutral-Tertiary text-xl ${
                  index % 2 === 0 ? "mr-1" : "ml-1"
                }`}
              >
                {item.date}
              </span>
            </div>

            {/* Content Card */}
            <div
              className={`ml-10 md:ml-0 w-full md:w-5/12 bg-Bg-Brand-Secondary rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg max-xs:ml-8 max-xs:w-[90%] ${
                index % 2 === 0
                  ? "md:ml-auto md:pl-6"
                  : "md:mr-auto md:pr-6 order-1"
              }`}
            >
              <div className="p-5 flex gap-4">
                <img
                  src={item.avatar}
                  alt="Logo"
                  className="h-[72px] w-[72px] md:h-[82px] md:w-[82px] object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <h5 className="text-sm md:text-base text-gray-700 font-medium">
                    {item.subtitle}
                  </h5>
                  {/* <p className="text-sm md:text-base text-gray-600 mt-1">
                    {item.description}
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VerticalTimeline;

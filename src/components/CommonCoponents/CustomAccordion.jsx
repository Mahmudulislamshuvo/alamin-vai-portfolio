import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import image from "../../assets/experience/Rectangle.png";

const CustomAccordion = ({ experienceData = [] }) => {
  const [open, setOpen] = useState(null);

  const handleOpen = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <div className="w-full mx-auto py-2 sm:py-1">
      {experienceData.map((project) => (
        <div
          key={project.id}
          className="mb-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="bg-Bg-Brand-Secondary rounded-2xl p-8">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleOpen(project.id)}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start justify-between w-full">
                <div className="flex w-full justify-between items-center gap-x-5">
                  <div className="flex items-center gap-x-4">
                    <img src={image} alt={image} />
                    <div className="flex flex-col justify-start items-start">
                      <h3 className="text-3xl font-semibold text-Text-Neutral-Primary">
                        {project.title}
                      </h3>
                      <p className="text-xl text-Text-Neutral-Tertiary">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-500 tracking-wide text-start pr-5">
                    {project.period}
                  </span>
                </div>
              </div>
              <FaChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${
                  open === project.id ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                open === project.id ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="pt-8 px-0">
                <ol className="list-disc pl-5 space-y-2 text-base text-gray-800">
                  {project.orderlist.map((item) => (
                    <li key={`${project.id}-${item.id}`}>{item.task}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomAccordion;

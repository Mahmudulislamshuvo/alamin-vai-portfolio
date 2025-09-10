import { IoCall } from "react-icons/io5";
import PageHeader from "../CommonCoponents/PageHeader";
import ContactInfo from "../CommonCoponents/ContactInfo";
import { MdEmail } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <div className="py-20 md:py-[80px] lg:py-[120px] max-xs:py-9 max-xs:bg-Bg-Neutral-Secondary">
      <div className="container mx-auto px-3 md:px-0">
        <div className="pb-10 md:pb-[80px]">
          <PageHeader title={"LET'S CONNECT"} header={"Contact"} />
        </div>

        {/* Right side*/}
        <div className="w-full border border-Bg-Neutral-Primary p-6 rounded-xl max-xs:bg-Bg-Neutral-White sm:p-0">
          <div className="pb-5">
            <h3 className="text-xl font-semibold text-Text-Neutral-Primary">
              Md Al Amin
            </h3>
            <h6 className="font-medium text-Text-Neutral-Primary pb-1">
              AI Research Scientist | Machine Learning Expert
            </h6>
          </div>
          <div>
            <ContactInfo
              icon={<MdEmail className="w-6 h-6 text-Text-Neutral-Primary" />}
              name={"Email"}
              info={"alaminhossine@gmail.com"}
            />
            <ContactInfo
              icon={<TiHome className="w-6 h-6 text-Text-Neutral-Primary" />}
              name={"Freelance"}
              info={"Available"}
            />
            <ContactInfo
              icon={
                <FaLocationDot className="w-6 h-6 text-Text-Neutral-Primary" />
              }
              name={"Location"}
              info={"New York, USA"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

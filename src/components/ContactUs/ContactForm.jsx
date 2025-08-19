import { IoCall } from "react-icons/io5";
import PageHeader from "../CommonCoponents/PageHeader";
import ContactInfo from "../CommonCoponents/ContactInfo";
import { MdEmail } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="py-[120px]">
      <div className="container mx-auto">
        <div className="pb-[80px]">
          <PageHeader title={"LET'S CONNECT"} header={"Contact"} />
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
          {/* Left side: Contact form */}
          <div className="w-full lg:w-1/2">
            <form className=" bg-white rounded-xl">
              <div className="grid gap-6 pb-8">
                {/* Your Name Input */}
                <div className="relative z-0 w-full pb-8 group">
                  <input
                    type="text"
                    name="name"
                    className="peer block w-full appearance-none border-0 border-b bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-Text-Brand-Primary focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-Text-Brand-Primary">
                    Your name
                  </label>
                </div>

                {/* Your Email Input */}
                <div className="relative z-0 w-full pb-8 group">
                  <input
                    type="email"
                    name="email"
                    className="peer block w-full appearance-none border-0 border-b border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-Text-Brand-Primary focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-Text-Brand-Primary">
                    Your email
                  </label>
                </div>

                {/* Your Message Textarea */}
                <div className="relative z-0 w-full pb-8 group">
                  <textarea
                    name="message"
                    rows="5"
                    className="peer block w-full appearance-none border-0 border-b border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-Text-Brand-Primary focus:outline-none focus:ring-0"
                    placeholder=" "
                  ></textarea>
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-Text-Brand-Primary">
                    Your message
                  </label>
                </div>
              </div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="mt-5 bg-Text-Brand-Primary px-6 py-2.5 text-white font-medium w-full rounded-full"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Right side*/}
          <div className="w-full lg:w-1/2 border border-Bg-Neutral-Primary p-6 rounded-xl">
            <div className="pb-5">
              <h3 className="text-xl font-semibold text-Text-Neutral-Primary">
                John Anderson
              </h3>
              <h6 className="font-medium text-Text-Neutral-Primary pb-1">
                AI Research Scientist | Machine Learning Expert
              </h6>
            </div>
            <div>
              <ContactInfo
                icon={<IoCall className="w-6 h-6 text-Text-Neutral-Primary" />}
                name={"Phone"}
                info={"+1 (555) 123-4567"}
              />
              <ContactInfo
                icon={<MdEmail className="w-6 h-6 text-Text-Neutral-Primary" />}
                name={"Email"}
                info={"johnanderaon@gmail.com"}
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
    </div>
  );
};

export default ContactForm;

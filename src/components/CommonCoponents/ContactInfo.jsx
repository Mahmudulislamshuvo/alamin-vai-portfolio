const ContactInfo = ({ icon, name, info }) => {
  return (
    <>
      <div className="flex items-start gap-x-4 p-4">
        {icon}
        <span>
          <p className="text-Text-Neutral-Secondary"> {name}</p>
          <h5 className="text-lg font-medium text-Text-Neutral-Primary">
            {info}
          </h5>
        </span>
      </div>
    </>
  );
};

export default ContactInfo;

const ArchivementsMedal = ({ icon, title, des }) => {
  return (
    <div className="px-[48px] py-3 max-xs:px-5 max-xs:py-0">
      <img src={icon} alt="" />
      <h5 className="pt-3 font-medium text-Text-Neutral-Primary text-3xl">
        {title}
      </h5>
      <p className="pt-3 text-base text-Text-Neutral-Secondary">{des}</p>
    </div>
  );
};

export default ArchivementsMedal;

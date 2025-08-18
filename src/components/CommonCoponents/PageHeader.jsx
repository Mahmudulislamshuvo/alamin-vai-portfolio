const PageHeader = ({ title, header }) => {
  return (
    <div>
      <h5 className="font-semibold text-Text-Brand-Primary">{title}</h5>
      <h3 className="font-semibold text-[40px] md:text-[60px] text-Text-Neutral-Primary pt-4">
        {header}
      </h3>
    </div>
  );
};

export default PageHeader;

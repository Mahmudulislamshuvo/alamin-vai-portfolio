const PageHeader = ({ title, header }) => {
  return (
    <div>
      <h5 className="font-semibold text-Text-Brand-Primary max-xs:text-sm">
        {title}
      </h5>
      <h3 className="font-semibold text-[40px] md:text-[60px] text-Text-Neutral-Primary max-xs:text-3xl pt-4 max-xs:pt-1">
        {header}
      </h3>
    </div>
  );
};

export default PageHeader;

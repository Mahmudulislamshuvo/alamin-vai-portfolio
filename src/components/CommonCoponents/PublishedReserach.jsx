const PublishedReserach = ({
  image,
  title,
  des,
  publish,
  year,
  papername,
  link,
  btnName,
  ConferencePaper,
  linkbtn,
}) => {
  return (
    <>
      <div className="border border-Bg-Neutral-Secondary w-[49%] p-5 rounded-lg max-xs:w-full max-xs:p-3 max-xs:bg-Bg-Neutral-White max-sm:w-full">
        <div className="border-b border-Bg-Neutral-Secondary py-4">
          <img src={image} alt={image} />
          <h4 className="text-xl font-semibold text-Text-Neutral-Primary pt-4">
            <a target="_blank" rel="noopener noreferrer" href={linkbtn}>
              {title}
            </a>
          </h4>
          <p className="text-Text-Neutral-Primary text-base pt-3">{des}</p>
        </div>
        {/* For Desktop and others device */}
        <div className="max-xs:hidden">
          <p className="text-Text-Neutral-Tertiary pt-4">
            {ConferencePaper ? (
              <span className="text-lg font-medium text-Text-Neutral-Tertiary">
                Conference Paper:
              </span>
            ) : (
              <span className="text-lg font-medium text-Text-Neutral-Tertiary">
                Published on:
              </span>
            )}
            {ConferencePaper ? ConferencePaper : publish}
          </p>
          <div className="flex flex-col gap-y-2 sm:flex-col md:flex-row md:justify-between pt-2">
            <div className="text-Text-Neutral-Tertiary flex flex-col sm:flex-col md:flex-row md:gap-x-4">
              <span>{year}</span>
              <span className="text-Text-Neutral-Tertiary">{papername}</span>
              <span>
                <span>DOI:</span>
                <a target="_blank" rel="noopener noreferrer" href={linkbtn}>
                  {link}
                </a>
              </span>
            </div>
            <a
              href={linkbtn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-Text-Brand-Primary"
            >
              {btnName}
            </a>
          </div>
        </div>

        {/* For Mobile device only */}
        <div className="sm:hidden">
          <p className="text-Text-Neutral-Tertiary pt-4">
            <span className="text-lg font-medium text-Text-Neutral-Tertiary">
              Published on:
            </span>
            {publish}
          </p>
          <div className="pt-2 sm:flex sm:flex-col sm:gap-y-2">
            <div className="text-Text-Neutral-Tertiary flex gap-x-4">
              <span className="border-r border-Text-Neutral-Secondary pr-2">
                <span>DOI:</span>
                <a target="__blank" href={`https://doi.org/${link}`}>
                  {link}
                </a>
              </span>
              <span>{year}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-Text-Neutral-Tertiary">{papername}</span>
              <button className="text-Text-Brand-Primary">
                <a href={linkbtn} target="__blank">
                  View Paper
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PublishedReserach;

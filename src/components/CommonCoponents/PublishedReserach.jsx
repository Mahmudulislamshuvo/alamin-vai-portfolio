const PublishedReserach = ({
  image,
  title,
  des,
  publish,
  year,
  papername,
  link,
  btnName,
}) => {
  return (
    <>
      <div className="border border-Bg-Neutral-Secondary w-[49%] p-5 rounded-lg">
        <div className="border-b border-Bg-Neutral-Secondary py-4">
          <img src={image} alt={image} />
          <h4 className="text-xl font-semibold text-Text-Neutral-Primary pt-4">
            {title}
          </h4>
          <p className="text-Text-Neutral-Primary text-base pt-3">{des}</p>
        </div>
        <p className="text-Text-Neutral-Tertiary pt-4">
          <span className="text-lg font-medium text-Text-Neutral-Tertiary">
            Published on:
          </span>
          {publish}
        </p>
        <div className="flex justify-between pt-2">
          <div className="text-Text-Neutral-Tertiary flex gap-x-4">
            <span>{year}</span> <span>{papername}</span>
            <span>
              <span>DOI:</span>
              <a target="__blank" href={`https://doi.org/${link}`}>
                {link}
              </a>
            </span>
          </div>
          <button className="text-Text-Brand-Primary">{btnName}</button>
        </div>
      </div>
    </>
  );
};

export default PublishedReserach;

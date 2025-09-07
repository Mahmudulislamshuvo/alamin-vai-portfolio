const CurrentResearchCart = ({ image, title, des }) => {
  return (
    <div
      className="border border-Bg-Neutral-Secondary p-5 rounded-lg bg-Bg-Neutral-White
      w-full           /* default for mobile (smaller screens) */
      sm:w-[49%]       /* small devices: two items per row */
      md:w-[49%]       /* medium devices: three items per row */
      lg:w-[49%]       /* large devices: three items per row */
      xl:w-[49%]       /* extra large devices: three items per row */
      "
    >
      <img src={image} alt={title} className="w-full h-auto rounded-md" />
      <h4 className="text-xl font-semibold text-Text-Neutral-Primary pt-4">
        {title}
      </h4>
      <p className="text-Text-Neutral-Primary text-base pt-3">{des}</p>
    </div>
  );
};

export default CurrentResearchCart;

const CurrentResearchCart = ({ image, title, des }) => {
  return (
    <>
      <div className="border border-Bg-Neutral-Secondary w-[49%] p-5 rounded-lg">
        <img src={image} alt={image} />
        <h4 className="text-xl font-semibold text-Text-Neutral-Primary pt-4">
          {title}
        </h4>
        <p className="text-Text-Neutral-Primary text-base pt-3">{des}</p>
      </div>
    </>
  );
};

export default CurrentResearchCart;

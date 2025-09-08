const CurrentResearchCart = ({ image, title, des }) => {
  return (
    <div className="border border-Bg-Neutral-Secondary p-5 rounded-lg bg-Bg-Neutral-White">
      <img
        src={image}
        alt={title}
        className="w-full h-auto rounded-md object-cover shadow-lg"
      />
      <h4 className="text-xl font-semibold text-Text-Neutral-Primary pt-4">
        {title}
      </h4>
      <p className="text-Text-Neutral-Primary text-base pt-3">{des}</p>
    </div>
  );
};

export default CurrentResearchCart;

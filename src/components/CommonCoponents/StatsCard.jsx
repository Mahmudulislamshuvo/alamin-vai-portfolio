// StatsCard.jsx
const StatsCard = ({ width, value, label }) => {
  const widthClass =
    width === "1/2"
      ? "basis-[calc(50%-0.5rem)]" // gap-4 হলে 0.5rem কমালাম
      : width === "full"
      ? "basis-full"
      : "basis-auto";

  return (
    <div className={`${widthClass} bg-Bg-Brand-Primary px-6 py-5 text-center`}>
      <span className="text-6xl font-bold text-orange-500 mb-2">{value}</span>
      <p className="text-gray-600 font-medium text-lg">{label}</p>
    </div>
  );
};

export default StatsCard;

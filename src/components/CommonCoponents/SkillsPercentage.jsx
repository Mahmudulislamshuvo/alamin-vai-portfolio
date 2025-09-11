const SkillsPercentage = ({ skills }) => {
  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {skills?.map((group) => (
          <div
            key={group.id}
            className="border border-Text-Neutral-Secondary p-6 rounded-lg max-xs:bg-Bg-Neutral-White max-xs:border-none"
          >
            {/* Category Title */}
            <h4 className="text-xl font-semibold md:text-3xl text-Text-Neutral-Primary pb-5">
              {group.category}
            </h4>

            {/* Items */}
            {group.items?.map((skill) => (
              <div className="mb-7" key={skill.id}>
                {/* Name + Percentage */}
                <div className="flex justify-between py-1">
                  <span className="text-lg text-Text-Neutral-Primary">
                    {skill.name}
                  </span>
                  <span className="text-base font-medium text-Text-Neutral-Tertiary">
                    {skill.percentage}%
                  </span>
                </div>

                {/* Progress Line */}
                <svg
                  className="rc-progress-line"
                  viewBox="0 0 100 1"
                  preserveAspectRatio="none"
                  style={{ width: "100%", height: "6px" }}
                >
                  {/* Background line */}
                  <path
                    d="M 0.5,0.5 L 99.5,0.5"
                    strokeLinecap="round"
                    stroke="#D4D0D2"
                    strokeWidth="1"
                    fillOpacity="0"
                  />
                  {/* Progress line */}
                  <path
                    d="M 0.5,0.5 L 99.5,0.5"
                    strokeLinecap="round"
                    stroke={skill.color}
                    strokeWidth="1"
                    fillOpacity="0"
                    style={{
                      strokeDasharray: `${skill.percentage}, 100`,
                      strokeDashoffset: "0px",
                      transition:
                        "stroke-dasharray 0.5s ease, stroke-dashoffset 0.5s ease",
                    }}
                  />
                </svg>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default SkillsPercentage;

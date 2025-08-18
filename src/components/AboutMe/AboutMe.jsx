const AboutMe = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="px-[160px] py-[160px] bg-Bg-Brand-Tertiary flex items-center justify-between rounded-2xl">
          <div className="w-[48%]">
            <h6 className="font-semibold text-Text-Brand-Primary pb-4">
              GET TO KNOW ME
            </h6>
            <h3 className="font-semibold text-[60px] leading-[120%] pb-[80px]">
              About Me
            </h3>
            <p className="text-base text-Text-Neutral-Secondary">
              I am skilled in facilitating the entire lifecycle of a data
              science project, including Data Extraction, Pre-Processing,
              Feature Engineering, Dimensionality Reduction, Algorithm
              Implementation, Back Testing, and Validation. Proficient in
              various data transformation techniques, I tailor solutions to
              specific dataset requirements. Experienced in analyzing missing
              data, I introduce dummy variables for missingness and employ
              imputation methods such as iterative imputer in Python. I am adept
              at applying regression and classification models, ensemble
              learning techniques, and clustering methods.
            </p>
            <p className="text-base text-Text-Neutral-Secondary pt-4">
              With extensive experience in data cleansing and visualization, I
              use tools like Tableau, PowerBI, Denodo, Seaborn, Matplotlib, and
              ggplot2. Proficient in configuring Salesforce quote-to-cash
              functionalities, I also develop AI solutions using Neural Networks
              and Deep Learning. Skilled in Big Data tools like Hadoop HDFS,
              Spark, and MapReduce, I also perform Web Data Mining and NLP.
              Additionally, I manage projects using JIRA and Confluence, and
              conduct financial analysis using Python, R, and SAS.
            </p>
          </div>
          <div className="w-[48%]">
            <h3 className="text-4xl font-semibold pb-8 text-Text-Neutral-Primary">
              Research Interests
            </h3>
            <div className="flex flex-col gap-y-2">
              <div>
                <h4 className="font-semibold text-[60px] leading-[110%] text-Text-Brand-Primary pb-3">
                  01
                </h4>
                <h5 className="text-2xl font-medium text-Text-Neutral-Primary pb-3">
                  Data Science & Machine Learning
                </h5>
                <p className="text-base text-Text-Neutral-Secondary">
                  Developing and applying data-driven models to extract
                  insights, forecast trends, and solve complex problems.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[60px] leading-[110%] text-Text-Brand-Primary pb-3">
                  01
                </h4>
                <h5 className="text-2xl font-medium text-Text-Neutral-Primary pb-3">
                  Data Science & Machine Learning
                </h5>
                <p className="text-base text-Text-Neutral-Secondary">
                  Developing and applying data-driven models to extract
                  insights, forecast trends, and solve complex problems.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[60px] leading-[110%] text-Text-Brand-Primary pb-3">
                  01
                </h4>
                <h5 className="text-2xl font-medium text-Text-Neutral-Primary pb-3">
                  Data Science & Machine Learning
                </h5>
                <p className="text-base text-Text-Neutral-Secondary">
                  Developing and applying data-driven models to extract
                  insights, forecast trends, and solve complex problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
